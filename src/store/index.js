import { createStore } from 'vuex'
import axios from 'axios' // 在 store 中需要引入 axios 才能用，全域宣告無法

export default createStore({
  state: {
    // 目前所選城市和行政區，預設為台北市、北投區
    currCity: '臺北市',
    currDistrict: '北投區',
    // 存放 API 回傳的縣市/行政區資訊
    location: [],
    // 存放藥局的資訊
    stores: [],
    keywords: '',
    showModal: false,
    infoBoxSid: null
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
    },
    setKeywords (state, payload) {
      state.keywords = payload
    },
    setShowModal (state, payload) {
      state.showModal = payload
    },
    setInfoBoxSid (state, payload) {
      state.infoBoxSid = payload
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
          // 整理資料格式，拆出經緯度
          const rawData = res.data.features
          const data = rawData.map((item) => {
            return {
              ...item.properties,
              latitude: item.geometry.coordinates[0],
              longitude: item.geometry.coordinates[1]
            }
          })

          context.commit('setStores', data)
        }).catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {
  },
  getters: {
    cityList (state) {
      return state.location.map((item) => {
        return item.name
      })
    },
    districtList (state) {
      // 使用 optional chaining
      const district = state.location.find((item) => item.name === state.currCity)?.districts || []
      return district
    },
    filteredStores (state) {
      const { stores } = state
      const storesList = state.keywords ? stores.filter((item) => item.name.includes(state.keywords)) : stores.filter((item) => {
        return item.county === state.currCity && item.town === state.currDistrict
      })
      return storesList
    },
    currDistrictInfo (state, getters) {
      return getters.districtList.find((d) => d.name === state.currDistrict) || {}
    }
  }
})
