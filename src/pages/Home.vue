<template>
  <div>
    <div class="Main_container_header">
      <MainHeader>
        <a href="https://3g.163.com/s">
            <i class="iconfont icon-wangyi"></i>
        </a>
      </MainHeader>
    </div>
    <div class="Main_container_content">
        <Content/>
    </div>
  </div>
</template>
<script>
import Content from "@/components/content/Content"
import MainHeader from "@/components/header/MainHeader"
export default {
  components: {
    Content,
    MainHeader
  }
}
</script>

<style scoped>
  .Main_container_header {
    width:100%;
    height:49px;
  }
  .Main_container_content {
      width: 90%;
      margin: auto;
      margin-top: 20px;
  }
</style>