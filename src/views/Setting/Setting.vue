<template>
  <div class="common-container">
    <h1 class="set-tit">⌜全局配置⌟</h1>
    <el-collapse class="img-manage" v-model="activeName" accordion>
      <el-collapse-item title="🗝️ 密钥配置管理" name="1">
        <form-view />
      </el-collapse-item>
      <el-collapse-item title="📷 上传图片设置" name="2">
        <h2>是否开启默认上传Markdown模式</h2>
        <set-default-copy />
        <h2>是否开启压缩</h2>
        <set-compress />
      </el-collapse-item>
      <el-collapse-item title="🎃 页面图片管理" name="3">
        <h2>图片外链默认复制格式 <span class="red-c">%s</span>为外链地址</h2>
        <set-copy />
      </el-collapse-item>
    </el-collapse>

  </div>
</template>

<script>
import FormView from '@/views/formview/FormView.vue'
import SetCompress from '@/view/Setting/setMain/SetCompress.vue'
import SetCopy from '@/view/Setting/setcopy/SetCopy.vue'
import SetDefaultCopy from '@/view/Setting/setdefaultCopy/SetDefaultCopy.vue'
export default {
  components: {
    FormView,
    SetCompress,
    SetCopy,
    SetDefaultCopy
    // SetWatermark
  },
  data() {
    return {
      activeName: ''
    }
  },
  mounted() {
    const { id } = this.$route.query
    if (id) {
      this.activeName = id + ''
    }
  }
}
</script>

<style lang="less" scoped>
@import './setting.module.less';
</style>
