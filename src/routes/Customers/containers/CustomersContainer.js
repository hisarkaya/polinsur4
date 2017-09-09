import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {map} from 'lodash'
import {connect} from 'react-redux'
import {UserIsAuthenticated} from 'utils/router'
import {firebaseConnect, populatedDataToJS, pathToJS, isLoaded, isEmpty} from 'react-redux-firebase'
import {CUSTOMER_LIST_PATH} from 'constants'
import LoadingSpinner from 'components/LoadingSpinner'
import CustomerTile from '../components/CustomerTile'
import NewCustomerTile from '../components/NewCustomerTile'
import NewCustomerDialog from '../components/NewCustomerDialog'
import classes from './CustomersContainer.scss'

const populates = [
  {
    child: 'createdBy',
    root: 'users'
  }
]

@UserIsAuthenticated // redirect to /login if user is not authenticated
@connect(({firebase}) => ({
  profile: pathToJS(firebase, 'profile')
}))

@firebaseConnect(function({params, auth, profile}) {
  const accountName = (profile && profile.accountName) || 'demo'
  return [
    {
      path: `${accountName}/customers`,
      populates
    }
  ]
})

@connect(function({
  firebase
}, {profile}) {
  const accountName = (profile && profile.accountName) || 'demo'
  return {
    customers: populatedDataToJS(firebase, `${accountName}/customers`, populates),
    auth: pathToJS(firebase, 'auth')
  }
})
export default class Customers extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  static propTypes = {
    children: PropTypes.object,
    customers: PropTypes.object,
    firebase: PropTypes.object
  }

  state = {
    newCustomerModal: false
  }

  newSubmit = (newCustomer) => {
    const {firebase: {
        pushWithMeta
      }} = this.props
    // push new Customer with createdBy and createdAt
    return pushWithMeta('customers', newCustomer).then(() => this.setState({newCustomerModal: false})).catch(err => {
      // TODO: Show Snackbar
      console.error('error creating new customer', err) // eslint-disable-line
    })
  }

  deleteCustomer = ({name}) => this.props.firebase.remove(`customer/${name}`)

  toggleModal = (name, customer) => {
    let newState = {}
    newState[`${name}Modal`] = !this.state[`${name}Modal`]
    this.setState(newState)
  }

  render() {
    // Customer Route is being loaded
    if (this.props.children)
      return this.props.children

    const {customers} = this.props
    const {newCustomerModal} = this.state

    if (!isLoaded(customers)) {
      return <LoadingSpinner/>
    }

    return (
      <div className={classes.container}>
        {newCustomerModal && <NewCustomerDialog open={newCustomerModal}
          onSubmit={this.newSubmit} onRequestClose={() => this.toggleModal('newCustomer')}/>
}
        <div className={classes.tiles}>
          <NewCustomerTile onClick={() => this.toggleModal('newCustomer')}/>
          {!isEmpty(customers) && map(customers, (customer, key) =>
            (<CustomerTile key={`${customer.name}-Collab-${key}`}
              customer={customer} onCollabClick={this.collabClick}
              onSelect={() => this.context.router.push(`${CUSTOMER_LIST_PATH}/${key}`)}
              onDelete={this.deleteCustomer}/>))
}
        </div>
      </div>
    )
  }
}
