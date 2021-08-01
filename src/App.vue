<template>
<div id="app">
  <aside-menu></aside-menu>
  <!-- 地圖區塊 -->
  <div class="mask-map" id="mask-map"></div>
</div>
</template>

<script>
import AsideMenu from './components/AsideMenu.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    AsideMenu
  },
  methods: {
    ...mapActions([
      'fetchLocations',
      'fetchStores'
    ]),
    test () {
      const url = 'https://raw.githubusercontent.com/kurotanshi/mask-map/master/raw/area-location.json'
      this.$http.get(url)
        .then((res) => {
          console.log(res)
        }).catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.fetchLocations()
    this.fetchStores()
    // this.test()
  }
}
</script>

<style lang="scss" src="./assets/style.scss"></style>
