<template>
  <div v-if="isload" class="isdload animate__animated animate__fadeIn">
    <span><img src="/img/loading.gif" alt="" srcset="" />{{ loadText }}
      <i v-if="totalnum">
        ({{ progressnum }}/{{ totalnum }})
      </i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    isload: {
      type: Boolean,
      default: false
    },
    totalnum: {
      type: Number,
      default: 0
    },
    progressnum: {
      type: Number,
      default: 0
    },
    loadText: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
</style>
