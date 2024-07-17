<template>
  <div class="form-w">
    <h2 class="setting-hd-h2">配置信息</h2>
    <el-form ref="formRef" :model="form" :rules="rules">
      <el-form-item label="Token" prop="token">
        <el-input v-model="form.token" placeholder="请填写Token"></el-input>
      </el-form-item>
      <el-form-item label="Strategy ID" prop="strategy_id">
        <el-row>
          <el-col :span="24">
            <el-select v-model="form.strategy_id" placeholder="请选择Strategy ID">
              <el-option label="默认" value="0"></el-option>
              <el-option label="京东" value="5"></el-option>
              <el-option label="美团" value="11"></el-option>
            </el-select>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="Album ID" prop="album_id">
        <el-input v-model="form.album_id" placeholder="请填写Album ID"></el-input>
      </el-form-item>
      <el-form-item>
        <div class="btn-wrap-form">
          <el-button type="primary" @click="submitForm('formRef')" plain>保存本地</el-button>
          <el-button @click="resetForm('formRef')">重置</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Notification } from 'element-ui'
import { debounce } from '@/plugin/filter'
export default {
  data() {
    return {
      form: {
        token: '',
        strategy_id: '',
        album_id: ''
      },
      rules: {
        token: [
          { required: false, message: '请输入Token', trigger: 'blur' }
        ],
        strategy_id: [
          { required: false, message: '请选择Strategy ID', trigger: 'blur' }
        ],
        album_id: [
          { required: false, message: '请输入Album ID', trigger: 'blur' }
        ]
      }
    }
  },
  mounted() {
    const config = localStorage.getItem('config')
    if (config) {
      this.form = JSON.parse(config)
    }
  },
  methods: {
    submitForm: debounce(function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          localStorage.setItem('config', JSON.stringify(this.form))
          Notification({
            title: '提示',
            message: '配置信息已保存到本地',
            type: 'success'
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }, 400, true),
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
@import './formview.module.less';
</style>
