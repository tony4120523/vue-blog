import { ref } from 'vue'
import { store } from './store.js'

export default {
  setup() {
    const username = ref('')
    const password = ref('')
    const loginErrorMsg = ref('')
    const loggedIn = ref(false)

    const login = () => {
      // 驗證帳號密碼
      if (username.value === 'jess' && password.value === 'jess') {
        loginErrorMsg.value = ''
        loggedIn.value = true
        store.storeLogin()
      } else {
        loginErrorMsg.value = '登錄失敗，請檢查帳號密碼。'
        loggedIn.value = false
      }
    }
    return { username, password, loginErrorMsg, loggedIn, login }
  },
  template: /*html*/`
    <div>
      <h1>blog 會員登錄</h1>
      <form @submit.prevent="login">
        <div>
          <label for="username">帳號：</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div>
          <label for="password">密碼：</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">登錄</button>
      </form>
      <div v-if="loginErrorMsg" class="error-message">{{ loginErrorMsg }}</div>
      <div v-if="loggedIn" class="success-message"><h2>🎉 歡迎！{{ username }}</h2></div>
    </div>`
}
