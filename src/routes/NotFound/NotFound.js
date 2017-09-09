import React from 'react'
import localization from 'localization'

export const NotFound = () => (
  <div className='container'>
    <h1>{localization.whoops404}</h1>
    <p>{localization.pageNotFound}</p>
  </div>
)

export default NotFound
