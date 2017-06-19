<template>
  <el-row>
    <el-col :span="6">&nbsp;
    </el-col>
    <el-col :span="12">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click='onSubmit'>立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
'use strict'
import {list} from '../api/api'

export default {
  name: 'register',
  data () {
    return {
      form: {
        code: '',
        name: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit: () => {
      list().then(res => {
        console.log(res)
      })
    }
  }
}
</script>
