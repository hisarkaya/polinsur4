import React from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import { isObject } from 'lodash'
import classes from './CustomerTile.scss'
import localization from 'localization'

export const CustomerTile = ({ customer, onSelect }) => (
  <Paper className={classes.container}>
    <div className={classes.top}>
      <span className={classes.name} onClick={() => onSelect(customer)}>
        {customer.isCompany ? customer.title : customer.name + ' ' + customer.surname}
      </span>
    </div>
    <span className={classes.owner}>
      {
        customer.tcVergiNo
        // isObject(customer.createdBy)
        //   ? customer.createdBy.displayName
        //   : customer.createdBy || localization.noOwner
      }
    </span>
  </Paper>
)

CustomerTile.propTypes = {
  customer: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default CustomerTile
