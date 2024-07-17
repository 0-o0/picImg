<template>
  <div class="hd-w">
    <div :class="isMobile ? 'lay-out-mobile' : 'lay-out'">
      <SwitchTheme :isMobile="isMobile" />
    </div>
    <nav class="nav-container" @click="handleNav($event)">
      <span :class="currentMenu === 'home' ? 'is-nav-selected' : ''" data-index="home">O👻O</span>
    </nav>
    <router-view />
    <SettingView />
  </div>
</template>

<script>
import useStore from '@/store' // 引入store
import { mapActions, mapState } from 'pinia'
import SwitchTheme from '@/components/switchtheme/SwitchTheme.vue'
import SettingView from '@/components/setting/SettingView.vue'
export default {
  data() {
    return {
      currentMenu: 'home',
      disappear: false,
      isMobile: false
    }
  },
  watch: {
    routerName: {
      handler(n, o) {
        if (n !== this.currentMenu) {
          this.currentMenu = n
        }
      }
    }
  },
  components: { SwitchTheme, SettingView },
  mounted() {
    const theme = localStorage.getItem('themeb2')
    this.getIsMobile()

    window.addEventListener('resize', this.getIsMobile)
    if (theme) {
      const dom = document.documentElement
      const t_ = JSON.parse(theme).theme
      if (dom.className !== t_) { document.documentElement.className = t_ }
    }
    this.handleReload()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getIsMobile)
  },
  computed: {
    timeE() { return (new Date()).getFullYear() },
    ...mapState(useStore, ['routerName'])
  },
  methods: {
    ...mapActions(useStore, ['setroutername']),
    // 页面刷新时的nav选中
    handleReload() {
      this.currentMenu = this.$route.name
    },
    getIsMobile() {
      this.isMobile = window.screen.availWidth < 768
    }
  }
}
</script>

<style lang="less" scoped>
@import './tannav.module.less';
</style>
