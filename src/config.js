/**
 * NOTE: This file is ignored from git tracking. In a CI environment, it is
 * generated using build/create-config.js by calling npm run create-config (or
 * using firebase-ci if deploying to Firebase hosting). This is done so that
 * environment specific settings can be applied.
 */

export const env = 'development'

// Config for firebase
export const firebase = {
  apiKey: 'AIzaSyCzX7wKVZ5vzCt0tG1A50EraG8awTwvR38',
  authDomain: 'polinsur-66a5c.firebaseapp.com',
  databaseURL: 'https://polinsur-66a5c.firebaseio.com',
  storageBucket: 'polinsur-66a5c.appspot.com'
}

// Config for react-redux-firebase
// For more details, visit https://prescottprue.gitbooks.io/react-redux-firebase/content/config.html
export const reduxFirebase = {
  userProfile: 'users', // root that user profiles are written to
  enableLogging: false, // enable/disable Firebase Database Logging
  updateProfileOnLogin: false // enable/disable updating of profile on login
  // profileDecorator: (userData) => ({ email: userData.email }) // customize format of user profile
}

export default { env, firebase, reduxFirebase }
