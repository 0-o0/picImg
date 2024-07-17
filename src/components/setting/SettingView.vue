<template>
  <div class="setting-view-wrap" v-if="ShowSetting" @click.self="toclose">
    <div class="setting-item-wrap animate__animated" :class="ishow ? 'animate__fadeInDown' : 'animate__fadeOutDown'">
      <div class="setting-hd">o_o
        <span class="close-setting" @click="toclose">
          <CloseSvg />
        </span>
      </div>
      <div class="setting-content">
        <FormView class="separate-line" />
        <set-default-copy class="separate-line" />
        <set-compress class="separate-line" />
        <set-copy class="separate-line" />
      </div>
      <p><span class="red-c">*</span>😊<a href="mailto:i@o-x.icu" target="_blank"
          rel="noopener noreferrer">BUG反馈</a></p>
    </div>
  </div>
</template>

<script>
import FormView from '@/views/formview/FormView.vue'
import SetCompress from '@/views/Setting/setMain/SetCompress.vue'
import SetCopy from '@/views/Setting/setcopy/SetCopy.vue'
import SetDefaultCopy from '@/views/Setting/setdefaultCopy/SetDefaultCopy.vue'
import CloseSvg from '@/views/svg/CloseSvg.vue'
import { mapActions, mapState } from 'pinia'
import useStore from '@/store'
export default {
  components: {
    FormView,
    SetCompress,
    SetCopy,
    SetDefaultCopy, // SetWatermark
    CloseSvg
  },
  computed: {
    ...mapState(useStore, ['ShowSetting'])
  },
  data() {
    return {
      ishow: true
    }
  },
  methods: {
    ...mapActions(useStore, ['setShowSettingBtn']),
    toclose() {
      this.ishow = false
      setTimeout(() => {
        this.setShowSettingBtn(false)
        this.ishow = true
      }, 500)
    }
  }
}
</script>

<style lang="less" scoped>
@import './Settingview.module.less';
</style>
