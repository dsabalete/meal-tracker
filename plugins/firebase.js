export default (ctx, inject) => {
  if (process.client) {
    ctx.$fireModule.auth().onAuthStateChanged((user) => {
      ctx.store.dispatch('Login/fetchUser', user)
    })
  }
}
