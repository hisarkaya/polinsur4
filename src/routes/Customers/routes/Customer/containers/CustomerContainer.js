import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {UserIsAuthenticated} from 'utils/router'
import { connect } from 'react-redux'
import { firebaseConnect, isLoaded, isEmpty, dataToJS, pathToJS } from 'react-redux-firebase'
import LoadingSpinner from 'components/LoadingSpinner'
import classes from './CustomerContainer.scss'


@UserIsAuthenticated // redirect to /login if user is not authenticated
@connect(({firebase}) => ({
  profile: pathToJS(firebase, 'profile')
}))

// Get project path from firebase based on params prop (route params)
@firebaseConnect(({ params, profile }) => ([
  `asigorta/customers/${params.customername}`
]))
// Map state to props
@connect(({ firebase }, { params }) => ({
  customer: dataToJS(firebase, `asigorta/customers/${params.customername}`)
}))
export default class Customer extends Component {
  static propTypes = {
    customer: PropTypes.object,
    params: PropTypes.object.isRequired
  }

  render () {
    const { customer, params } = this.props
  
    if (isEmpty(customer)) {
      return (
        <div>
          Customer not found
        </div>
      )
    }

    if (!isLoaded(customer)) {
      return <LoadingSpinner />
    }

    return (
      <div className={classes.container}>
        <h2>Customer Container</h2>
        <pre>Customer Key: {params.customername}</pre>
        <pre>{JSON.stringify(customer, null, 2)}</pre>
      </div>
    )
  }
}
