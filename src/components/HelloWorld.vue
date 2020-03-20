<template>
  <div class="hello">
    <h1>欢迎</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  height: 200px;
  border: 1px solid #000;
}
</style>
