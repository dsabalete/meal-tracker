const actions = {
  fetchUser({ commit, dispatch }, user) {
    commit('SET_LOGGED_IN', user !== null)
    if (user) {
      commit('UPDATE_USER', {
        displayName: user.displayName,
        email: user.email,
        picture: user.photoURL,
      })
      dispatch('fetchUserIdToken')
    } else {
      commit('UPDATE_USER', null)
    }
  },
  fetchUserIdToken({ commit }) {
    this.$fireModule
      .auth()
      .currentUser.getIdToken(true)
      .then((idToken) => {
        commit('SET_USER_ID_TOKEN', idToken)
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.log('error while fetching user idToken', error)
      })
  },
  login({ dispatch }) {
    this.$fireModule
      .auth()
      .setPersistence(this.$fireModule.auth.Auth.Persistence.LOCAL)
      .then(() => {
        const provider = new this.$fireModule.auth.GoogleAuthProvider()
        provider.addScope('profile')
        provider.addScope('email')

        return this.$fireModule.auth().signInWithPopup(provider)
      })
  },
  logout({ commit }) {
    this.$fireModule
      .auth()
      .signOut()
      .then(() => {
        commit('SET_USER_ACTIONS', null)
      })
      .catch((err) => {
        this.error = err
        // eslint-disable-next-line
        console.error(err)
      })
  },
}

export default actions
