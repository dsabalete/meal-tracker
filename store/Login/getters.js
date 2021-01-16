/* eslint-disable no-prototype-builtins */
const getters = {
  user: (state) => state.user,
  imgProfile: (state) => state.user?.data?.picture,
  initials: (state) => {
    return state.user?.data?.displayName
      .split(' ')
      .map((word) => word[0].toUpperCase())
      .join('')
  },
}

export default getters
