import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    tasks: [],
    searchText: ''
  },
  getters: {
    tasksAsc(state) {
      return state.tasks.sort((a,b) => a.updatedAt < b.updatedAt ? 1 : -1)
          .filter(el => el.name.toUpperCase().includes(state.searchText.toUpperCase()))
    },
    tasksDesc(state) {
      return state.tasks.sort((a,b) => a.updatedAt > b.updatedAt ? 1 : -1)
          .filter(el => el.name.toUpperCase().includes(state.searchText.toUpperCase()))
    },
  },
  mutations: {
    updateSearchString(state, payload) {
      state.searchText = payload
    },
    updateTasks(state, payload) {
      state.tasks = payload
    },
    addTask(state, payload) {
      state.tasks.push(payload)
    },
    deleteTask(state, id) {
      const index = state.tasks.findIndex(el => el._id == id)
      if(index != -1) {
        state.tasks.splice(index, 1)
      } else (console.log('Нет такого ID'))
    },
    updateTask(state, data) {
      const index = state.tasks.findIndex(el => el._id == data._id)
      if(index != -1) {
        state.tasks[index] = data
      }
    }
  },
  actions: {
    async fetchAllTasks({commit}) {
      try {
        const res = await axios.get('http://localhost:3000/api/task/all').then(res => res.data)
        commit('updateTasks', res)
      } catch(e) {
        console.log(e.message)
      }
    },
    addNewTask({commit}, data) {
      try {
        axios.post('http://localhost:3000/api/task/create', data)
            .then(res => {
              commit('addTask', res.data)
            })
      } catch(e) {
        console.log(e.message)
      }
    },
    deleteTask({commit}, id) {
      try {
        axios.delete('http://localhost:3000/api/task/' + id)
            .then(commit('deleteTask', id))
      } catch(e) {
        console.log(e.message)
      }
    },
    updateTask({commit}, data) {
      try {
       axios.patch('http://localhost:3000/api/task/' + data.id, data.updatedData)
           .then(res => commit('updateTask', res.data))
      } catch(e) {
          console.log(e.message)
      }
    }
  },
  modules: {
  }
})
