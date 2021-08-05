<template>
<div id="app">
  <aside-menu></aside-menu>
  <!-- 地圖區塊 -->
  <mask-map></mask-map>
  <light-box></light-box>
</div>
</template>

<script>
import AsideMenu from './components/AsideMenu.vue'
import LightBox from './components/LightBox.vue'
import MaskMap from './components/MaskMap.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    AsideMenu,
    LightBox,
    MaskMap
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
