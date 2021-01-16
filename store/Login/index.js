import { createNamespacedHelpers } from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

export default {
  ...createNamespacedHelpers('Login'),
  createConfig: () => ({
    namespaced: true,
    actions,
    getters,
    mutations,
    state,
  }),
}
