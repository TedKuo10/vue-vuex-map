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
      // latitude: 25.03,
      // longitude: 121.55,
      markers: []
    }
  },
  methods: {
    initMap () {
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
          // console.log(this)
          this.latitude = position.coords.latitude
          this.longitude = position.coords.longitude

          this.initMap()
        })
      }
    },
    addMarker (item) {
      // 標記的圖示
      const ICON = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      })
      // 將標記放置到地圖上
      // const marker =
      L.marker([item.longitude, item.latitude], { icon: ICON })
        .addTo(this.map)
        .bindPopup(`<h2 class="popup-name">${item.name}</h2>`)

      // marker.markerId = item.id
      // marker.lng = item.longitude
      // marker.lat = item.latitude

      // this.markers.push(marker)
    },
    clearMarkers () {
      // 清除地圖所有標記
      this.map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          this.map.removeLayer(layer)
        }
      })

      // 清空陣列
      this.markers.length = 0
    }
  },
  computed: {
    currDistrictInfo () {
      return this.$store.getters.currDistrictInfo
    },
    filteredStores () {
      return this.$store.getters.filteredStores
    }
  },
  watch: {
    // 切換行政區的時候
    currDistrictInfo (dist) {
      // 透過 this.map.panTo() 指定地圖中心點
      this.map.panTo(new L.LatLng(dist.latitude, dist.longitude))
    },
    filteredStores (stores) {
      // 先清除原有 marker
      // this.clearMarkers()
      // 根據藥局資訊加上對應 marker
      stores.forEach((element) => this.addMarker(element))
    }
  },
  mounted () {
    // this.getGeo()
    // 將地圖初始化
    this.map = L.map('mask-map', {
      center: [25.03, 121.55],
      zoom: 18
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map)
  }
}
</script>
