export default {
  SET_LOGGED_IN: (state, value) => {
    state.user.loggedIn = value
  },
  UPDATE_USER: (state, data) => {
    state.user.data = data
  },
  SET_USER_ID_TOKEN: (state, token) => {
    state.user.data.idToken = token
  },
}
