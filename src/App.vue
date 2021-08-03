<template>
<div id="app">
  <aside-menu></aside-menu>
  <!-- 地圖區塊 -->
  <div class="mask-map" id="mask-map"></div>
  <light-box></light-box>
</div>
</template>

<script>
import AsideMenu from './components/AsideMenu.vue'
import LightBox from './components/LightBox.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    AsideMenu,
    LightBox
  },
  methods: {
    ...mapActions([
      'fetchLocations',
      'fetchStores'
    ])
  },
  mounted () {
    this.fetchLocations()
    this.fetchStores()
    // this.test()
  }
}
</script>

<style lang="scss" src="./assets/style.scss"></style>
