export const LIST_PATH = '/projects'
export const CUSTOMER_LIST_PATH = '/customers'
export const ACCOUNT_PATH = '/account'
//export const CUSTOMERS_PATH = '/customers'
export const AGENCIES_PATH = '/agencies'
export const POLICIES_PATH = '/policies'
export const LOGIN_PATH = '/login'
export const SIGNUP_PATH = '/signup'
export const ACCOUNT_FORM_NAME = 'account'
export const CUSTOMERS_FORM_NAME = 'customers'
export const AGENCIES_FORM_NAME = 'agencies'
export const POLICIES_FORM_NAME = 'policies'
export const LOGIN_FORM_NAME = 'login'
export const SIGNUP_FORM_NAME = 'signup'
export const NEW_PROJECT_FORM_NAME = 'newProject'
export const NEW_CUSTOMER_FORM_NAME = 'newCustomer'


export const formNames = {
  account: ACCOUNT_FORM_NAME,
  customers: CUSTOMERS_FORM_NAME,
  agencies: AGENCIES_FORM_NAME,
  policies: POLICIES_FORM_NAME,
  signup: SIGNUP_FORM_NAME,
  login: LOGIN_FORM_NAME
}

export const paths = {
  list: LIST_PATH,
  account: ACCOUNT_PATH,
  customers: CUSTOMER_LIST_PATH,
  agencies: AGENCIES_PATH,
  policies: POLICIES_PATH,
  login: LOGIN_PATH,
  signup: SIGNUP_PATH
}

export default { ...paths, ...formNames }
