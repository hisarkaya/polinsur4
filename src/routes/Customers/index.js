import { CUSTOMER_LIST_PATH as path } from 'constants'

export default (store) => ({
  path,
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Customers = require('./containers/CustomersContainer').default

      /*  Return getComponent   */
      cb(null, Customers)

    /* Webpack named bundle   */
    }, 'Customers')
  },
  getChildRoutes (partialNextState, cb) {
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Customer = require('./routes/Customer').default

      /*  Return getComponent   */
      cb(null, [
        Customer(store)
      ])
    })
  }
})
