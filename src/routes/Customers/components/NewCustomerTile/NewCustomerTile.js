import React from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import ContentAddCircle from 'material-ui/svg-icons/content/add-circle'
import classes from './NewCustomerTile.scss'

const iconSize = '6rem'
const iconStyle = { width: iconSize, height: iconSize }
const color = '#979797'
const hoverColor = '#616161'

export const NewCustomerTile = ({ onClick }) => (
  <Paper className={classes.container} onClick={onClick}>
    <ContentAddCircle
      color={color}
      hoverColor={hoverColor}
      style={iconStyle}
    />
  </Paper>
)

NewCustomerTile.propTypes = {
  onClick: PropTypes.func
}

export default NewCustomerTile
