<template>
 <div class="header">{{msg}}:{{age}}</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎来到我的第一个vue项目',
      age:20
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  background:red;
}
</style>
