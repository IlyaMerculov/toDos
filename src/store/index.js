import Vue from 'vue'
import Vuex from 'vuex'
// import { visible } from 'ansi-colors';

Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
      todos: [],
      visible: false,
      unvisible: true,
      userName: ''
    },

    getters: {
      doneTodos: state => {
        console.log(state)
        return state.todos;
      }
    },
    mutations: {
      setToDo: (state, todo) => {
        state.todos = todo
        console.log(state.todos)
        return state.todos
      },
      doneToDo: (state, id) => {
        state.todos[id].completed = true
        console.log(state.todos)
        return state.todos
      },
      deleteToDo: (state, id) => {
        console.log(state.todos[id])
        state.todos = state.todos.filter( el => el.id != id)
        state.todos.forEach((el , index) => el.id = index)
        console.log(state.todos)
        return state.todos
      },
      addToDo: (state, todo)=> {
        state.todos.push(todo)
        console.log(state.todos)
      },
      visibleToDos: state => {
        state.visible = true
        return state.visible
      },
      unvisibleToDos: state => {
        state.unvisible = false
        return state.unvisible
      },
      sortByIdDownToUp: state => {
        state.todos.sort((a , b) => b.id - a.id)
        console.log(state.todos)
        return state.todos
      },
      sortByIdUpToDown: state => {
        state.todos.sort((a , b) => a.id - b.id)
        console.log(state.todos)
        return state.todos
      },
      sortByUserName: state => {
        state.todos.sort((a , b) => a.userId - b.userId)
        console.log(state.todos)
        return state.todos
      },
     
    },
    actions: {
      getToDos: async (get) => {
        
        fetch('https://jsonplaceholder.typicode.com/users/1/todos').then( (response) => {
            return response.json()
        }).then( data =>{
          data.forEach(( el, index ) => {
            el.id = index
            el.userId = Math.ceil( Math.random() * 6 )
          })
          get.commit('setToDo', data)
        })
      },
      
    },
  });