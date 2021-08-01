import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    // 目前所選城市和行政區，預設為台北市、北投區
    currCity: '臺北市',
    currDistrict: '北投區',
    // 存放 API 回傳的縣市/行政區資訊
    location: [],
    // 存放藥局的資訊
    stores: []
  },
  mutations: {
    setCurrCity (state, payload) {
      state.currCity = payload
    },
    setCurrDistrict (state, payload) {
      state.currDistrict = payload
    },
    setLocations (state, payload) {
      state.location = payload
    },
    setStores (state, payload) {
      state.stores = payload
    }
  },
  actions: {
    // 取得行政區資料
    fetchLocations (context) {
      const url = 'https://raw.githubusercontent.com/kurotanshi/mask-map/master/raw/area-location.json'
      axios.get(url)
        .then((res) => {
          // console.log(res)
          context.commit('setLocations', res.data)
        }).catch((err) => {
          console.log(err)
        })
    },
    // 取得藥局資料
    fetchStores (context) {
      const url = 'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json'
      axios.get(url)
        .then((res) => {
          // console.log(res)
          context.commit('setStores', res.data.features)
        }).catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  },
  getters: {

  }
})
