<template>
  <div id="app">
    <homepage-header></homepage-header>
    <!-- <homepage-slider></homepage-slider> -->
    <music-banner
      :imgs="[
        'http://p3.music.126.net/09hujI6_LSJD6DWK02qXwQ==/18964376555989719.jpg',
        'http://p4.music.126.net/j_cH-yjz5tTLIDFmz4sSiQ==/18833534674063637.jpg',
        'http://p4.music.126.net/I1zKnPl4g9snKbAA5zJi3Q==/18623527953173535.jpg',
        'http://p4.music.126.net/x9KxmTxNEXHQJS9n-oWRLw==/18623527953173527.jpg',
        'http://p3.music.126.net/U3y3VH4_3cX8pXECLFsHjA==/18624627464801303.jpg',
        'http://p4.music.126.net/F7yr2uUq982rTIWlwvaThg==/18964376555989729.jpg',
        'http://p4.music.126.net/qADzamZDC3c5whBibC_rAQ==/18906102439712983.jpg',
        'http://p3.music.126.net/tw17cN9NJfa5FmFDyS0A_g==/18624627464801294.jpg'
      ]"
    ></music-banner>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import './iconfont.js'
import MusicBanner from './components/MusicBanner'
import HomepageHeader from './components/HomepageHeader'
import HomepageSlider from './components/HomepageSlider'


export default {
  components: {
    'music-banner': MusicBanner,
    'homepage-header': HomepageHeader,
    'homepage-slider': HomepageSlider
  }
}
</script>

<style lang='scss'>
  @import 'style/app'
</style>
