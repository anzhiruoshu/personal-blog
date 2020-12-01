<template>
    <div class="article_container">
        <slot/>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .article_container {
      width: 100%;
      height: 100%;
      box-shadow: 2px 2px 0 #f1f1f1;
    }
       .article_imgage {
         width: 100%;
         height: 70%;
         padding: 5px 10px;
       }
        .article_imgage img {
          width: 100%;
          height: 100%;
          margin-top: 5px;
        }
      .article_txt {
        width: 100%;
        height: 30%;
        color: #111;
        font-size: 14px;
        padding: 12px 12px;
      }
      .article_time {
        font-size: 14px;
        text-align: right;
        padding: 0px 9px;
        color: #bdbdbd;
      }

</style>