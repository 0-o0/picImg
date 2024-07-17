<template>
  <div class="switch-theme-wrap" v-if="!isMobile">
    <div @click="handleSetting">
      <button>
        <SettingSvg />
      </button>
    </div>
    <div @click="handleThemeChange" style="display:inline-block">
      <button v-if="isLight">
        <VPIconSun />
      </button>
      <button v-else>
        <VPIconMoon />
      </button>
    </div>
  </div>
  <div v-else>
    <div class="dropdown">
      <div class="dropdown-trigger" @click="toggleDropdown">
        <button class="dropdown-button">{{ selectedOption }}</button>
      </div>
      <transition name="fade">
        <div v-if="isOpen" class="dropdown-menu" :style="getComputedStyle">
          <ul class="dropdown-options">
            <li @click="handleSetting">
              <button>
                <SettingSvg />
              </button>
            </li>
            <li @click="handleThemeChange" style="display:inline-block">
              <button v-if="isLight">
                <VPIconSun />
              </button>
              <button v-else>
                <VPIconMoon />
              </button>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import VPIconMoon from '@/views/svg/VPIconMoon.vue'
import VPIconSun from '@/views/svg/VPIconSun.vue'
import { mapActions } from 'pinia'
import useStore from '@/store'
import SettingSvg from '@/views/svg/SettingSvg.vue'

export default {
  components: { VPIconMoon, VPIconSun, SettingSvg },
  data() {
    return {
      isLight: true,
      disappear: false,
      isOpen: false,
      selectedOption: '🍥'
    }
  },
  props: {
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    const theme = localStorage.getItem('themeb2')
    this.isLight = theme ? JSON.parse(theme).theme !== 'dark' : true
  },
  computed: {
    getComputedStyle() {
      return {
        top: `${-38.5 * 4}px`
      }
    }
  },
  methods: {
    ...mapActions(useStore, ['setShowSettingBtn']),
    handleSetting() {
      this.setShowSettingBtn(true)
      // this.disappear = true
    },
    handleSelect(e) {
      const dom = document.documentElement
      dom.className = e
      localStorage.setItem('themeb2', JSON.stringify({ theme: e }))
    },
    handleThemeChange() {
      this.isLight = !this.isLight
      const item = this.isLight ? '' : 'dark'
      this.handleSelect(item)
      const backColor = this.isLight ? '#FFFFFF' : '#000000'
      const event = new CustomEvent('ColorChanged', { detail: { backColor } })
      window.dispatchEvent(event)
    },
    toggleDropdown() {
      this.isOpen = !this.isOpen
    },
    selectOption(option) {
      this.selectedOption = option
      this.isOpen = false
    }
  }
}
</script>

<style lang="less" scoped>
.common(@mg-left) {
  button {
    border: 1px solid #d4d4d4;
    background-color: transparent;
    outline: none;
    margin-left: @mg-left;
    width: 28px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    box-sizing: border-box;
    padding: 0;
    padding-top: 3px;
    border-radius: 8px;

    &:hover {
      border-color: var(--b2-theme-c);
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
}

.switch-theme-wrap {
  display: flex;
  .common(12px)
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-trigger {
  display: inline-block;
}

.dropdown-button {
  padding: 4px 10px;
  // background-color: #f0f0f0;
  border: .1px solid #ccc;
  /* 修改边框样式为细线 */
  border-radius: 5px;
  /* 圆角样式 */
}

.dropdown-menu {
  // background-color: #f0f0f0;
  border: .1px solid #ccc;
  /* 修改边框样式为细线 */
  border-radius: 5px;
  /* 圆角样式 */
  position: absolute;
  width: 39px;
  right: 0;
  background: #f5f6ff;
  filter: blur(0.2px);
}

.dropdown-options {
  list-style: none;
  padding: 0;
  margin: 0;
  .common(0)
}

.dropdown-options li {
  cursor: pointer;
  padding: 5px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
