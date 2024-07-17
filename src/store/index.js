
import { defineStore } from 'pinia'
const useStore = defineStore('store', {
  // 开启数据缓存
  persist: {
    enabled: true
  },
  state: () => {
    return {
      defaultcopyformat: {
        formatList: {
          HTML: '<img src="%s" alt="" />',
          MarkDown: '![](%s)',
          URL: '%s',
          Custom: ''
        },
        formatStr: 'URL'
      },
      isshowSetting: false,
      setdefaultFile: {
        methods: '1',
        valPt: '',
        valAt: [],
        valTt: ''
      },
      commpressParams: {
        iscompress: false,
        rank: 0.8
      },
      openUploadOutMD: false
    }
  },
  getters: {
    ShowSetting(state) {
      return state.isshowSetting
    },
    defaultCopy(state) {
      return state.defaultcopyformat.formatStr
    },
    defaultCopyUrl(state) {
      const a_ = state.defaultcopyformat.formatStr
      return state.defaultcopyformat.formatList[a_]
    },
    // 图片默认返回
    imgDefaultFile(state) {
      const med = state.setdefaultFile.methods
      switch (med) {
        case '1':
          return state.setdefaultFile.valPt
        case '2':
          return state.setdefaultFile.valAt.join('/') + '/'
        case '3':
          return state.setdefaultFile.valTt
        default:
          return ''
      }
    },
    // 配置默认返回
    defaultFile(state) {
      return state.setdefaultFile
    },
    // 返回压缩图片的配置
    CompressData(state) {
      return state.commpressParams
    },
    // 返回默认上传的文件路径
    DefaultToFile(state) {
      return state.toFile
    },
    defaultCopyType(state) {
      return state.openUploadOutMD
    }
  },
  actions: {
    setShowSettingBtn(e) {
      this.isshowSetting = e
    },
    setDefaultFile(o) {
      this.setdefaultFile.methods = o.methods
      this.setdefaultFile.valAt = o.valAt
      this.setdefaultFile.valPt = o.valPt
      this.setdefaultFile.valTt = o.valTt
    },
    setDefaultCompress(obj) {
      this.commpressParams = obj
    },
    setDefaultToFile(a) {
      this.toFile = a
    },
    // 处理格式问题
    setDefaultFormat(e) {
      this.defaultcopyformat.formatStr = e
    },
    // 设置自定义格式
    setCustomFormat(e) {
      this.defaultcopyformat.formatList.Custom = e
    }
  }
})
export default useStore
