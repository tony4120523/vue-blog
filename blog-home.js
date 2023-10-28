import { ref } from 'vue'
export default {
  setup() {
    const count = ref(0)
    return { count }
  },
  template: /*html*/`
    <div>
      <h2>🎉 歡迎！</h2>
    </div>`
}