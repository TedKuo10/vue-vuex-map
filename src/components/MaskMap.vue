<template>
  <div class="mask-map" id="mask-map"></div>
</template>

<script>
import L from 'leaflet'

export default {
  name: 'MaskMap',
  data () {
    return {
      map: {},
      markers: [],
      latitude: 25.03,
      longitude: 121.55
    }
  },
  mounted () {
    this.initMap()
    // this.map = L.map('mask-map', {
    //   center: [25.03, 121.55],
    //   zoom: 18
    // })

    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(this.map)
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
    currDistrictInfo (dist) {
      this.map.panTo(new L.LatLng(dist.latitude, dist.longitude))
    },
    filteredStores (stores) {
      this.clearMarkers()

      stores.forEach((element) => this.addMarker(element))
    }
  },
  methods: {
    addMarker (item) {
      const ICON = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      })

      const marker = L.marker([item.longitude, item.latitude], { icon: ICON })
        .addTo(this.map)
        .bindPopup(`<h2 class="popup-name">${item.name}</h2>`)

      marker.markerId = item.id
      marker.lng = item.longitude
      marker.lat = item.latitude

      this.markers.push(marker)
    },
    clearMarkers () {
      this.map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          this.map.removeLayer(layer)
        }
      })

      this.markers.length = 0
    },
    triggerPopup (markerId) {
      const marker = this.markers.find((d) => d.markerId === markerId)

      this.map.flyTo(new L.LatLng(marker.lng, marker.lat), 15)
      marker.openPopup()
    },
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
    }
  }
}
</script>
