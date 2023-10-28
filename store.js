import { reactive } from 'vue'

export const store = reactive({
  isAuthenticated: false,

  storeLogin() {
    this.isAuthenticated = true
  },

  storeLogout() {
    this.isAuthenticated = false
  }
})