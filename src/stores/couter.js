import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
  getters:{
    oddOrEven(){
      if(this.count/2 == 0) return 'odd'
      return 'even'
    }
  }
})