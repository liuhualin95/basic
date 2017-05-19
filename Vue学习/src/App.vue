<template>
  <div id="app">
    <homepage-header></homepage-header>
    <homepage-slider></homepage-slider>
    <router-view class="router-view"></router-view>
    <homepage-footer></homepage-footer>
  </div>
</template>

<script>
import './iconfont.js'
import HomepageHeader from './components/HomepageHeader'
import HomepageSlider from './components/HomepageSlider'
import HomepageFooter from './components/HomepageFooter'

export default {
  components: {
    'homepage-header': HomepageHeader,
    'homepage-slider': HomepageSlider,
    'homepage-footer': HomepageFooter
  }
}
</script>

<style lang='scss'>
  @import 'style/app'
</style>
