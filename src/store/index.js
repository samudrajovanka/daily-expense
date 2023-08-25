import { createStore } from 'vuex'

export default createStore({
  state: {
    expenses: []
  },
  getters: {
    groupedExpenses: (state) => {
      return state.expenses.reduce((acc, expense) => {
        let key = expense.tanggal
        key = key.substring(0, key.length - 5)

        if (!acc[key]) {
          acc[key] = []
        }

        acc[key].push(expense)

        return acc
      }, {})
    },
    total: (state) => {
      return state.expenses.reduce((acc, expense) => {
        return acc + expense.pengeluaraan
      }, 0)
    }
  },
  mutations: {
    setExpenses(state, payload) {
      state.expenses = payload
    },
    addExpense(_, payload) {
      const { name: nama, expense: pengeluaraan } = payload

      const now = new Date()

      const time = now.toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit'
      })

      const date = now.toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })

      const lengthDateItem = this.state.expenses.filter((expense) => expense.tanggal === date).length

      this.state.expenses.splice(lengthDateItem, 0, {
        jam: time,
        tanggal: date,
        nama,
        pengeluaraan
      })
    }
  },
  actions: {
    async fetchExpenses({ commit }) {
      try {
        const res = await fetch('http://localhost:3000/detail')
        const data = await res.json()
        commit('setExpenses', data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
