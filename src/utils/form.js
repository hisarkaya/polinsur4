import localization from 'localization'

export const required = value => value ? undefined : localization.required

export const validateEmail = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? localization.invalidEmail
    : undefined
