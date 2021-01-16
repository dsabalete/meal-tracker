module.exports = {
  config: {
    apiKey: 'AIzaSyAkM5o5yrUuTj3NQY3_63_TksPDHpYYMVE',
    authDomain: 'meal-tracker-9b7e5.firebaseapp.com',
    databaseURL: 'https://meal-tracker-9b7e5.firebaseio.com',
    projectId: 'meal-tracker-9b7e5',
    storageBucket: 'meal-tracker-9b7e5.appspot.com',
    messagingSenderId: '1067596219075',
    appId: '1:1067596219075:web:714a13bc7227c4f33d5876',
    measurementId: 'G-MM5P1TRKHQ',
  },
  services: {
    auth: {
      static: false,
      preload: true,
      chunkName: 'firebase-auth',
      persistence: 'local',
      // initialize: {
      //     onAuthStateChangedMutation: 'Login/UPDATE_USER',
      //     onAuthStateChangedAction: 'Login/fetchUser',
      //     subscribeManually: true
      // },
      ssr: false, // default
    },
  },
}
