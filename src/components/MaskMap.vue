<template>
  <div class="mask-map" id="mask-map">
  </div>
</template>

<script>
import L from 'leaflet'

export default {
  name: 'MaskMap',
  data () {
    return {
      // 因為不會在別的地方使用 map，所以不需要丟到 vuex
      map: {},
      latitude: 25.03,
      longitude: 121.55
    }
  },
  mounted () {
    this.getGeo()
    // 將地圖初始化
    // this.t()
    // this.map = L.map('mask-map', {
    //   center: [this.latitude, this.longitude],
    //   zoom: 18
    // })

    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(this.map)
  },
  methods: {
    t () {
      this.map = L.map('mask-map', {
        center: [this.latitude, this.longitude],
        zoom: 18
      })

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map)
    },
    getGeo () {
      if (!navigator.geolocation) {
        alert('無法取得當前位置')
      } else {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(this)
          this.latitude = position.coords.latitude
          this.longitude = position.coords.longitude

          this.t()
        })
      }
    }
  }
}
</script>
