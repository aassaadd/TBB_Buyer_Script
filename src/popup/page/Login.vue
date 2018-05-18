<template>
  <div class="container">
    <div class="bg-card"></div>
    <div class="form-signin" >
      <h2 class="form-signin-heading">闯客行--渠道端</h2>
      <div class="login-wrap">
        <input v-model.trim="user.phoneNum" type="text" class="form-control" placeholder="用户名" autofocus>
        <input v-model.trim="user.password" type="password" class="form-control" placeholder="密码" @keyup="submit($event)">
        <button @click="login()" class="btn btn-lg btn-login btn-block" type="submit">登录</button>
      </div>
    </div>
  </div>
</template>
<style >
</style>
<script>
  export default{
    data () {
      return {
        user: {
          phoneNum: '',
          password: ''
        }
      }
    },
    components: {
    },
    created: function () {
      this.$nextTick(function () {
        console.log('login')
      })
    },
    methods: {
      login: function () {
        let _u = this.user

      },
      submit: function (ev) {
        if(ev.keyCode == 13){
          this.login()
        }
      }
    }
}
</script>
