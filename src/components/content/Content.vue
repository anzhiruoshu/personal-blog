<template>
    <div class="main_article_container">
        <div class="article_cotainer_m" v-for="item in ArticleData" :key="item.id">
            <ContentSmall>
                <a :href="item.path">
                    <div class="article_imgage">
                        <img :src="item.image" :alt="item.title">
                    </div>
                    <div class="article_txt">
                        {{ item.title }}
                        <p class="article_time">2020-18-28</p>
                    </div>
                </a>
            </ContentSmall>
        </div>
        <div style="height: 60px;"></div>
    </div>
</template>

<script>
import {ArticleRequest} from "@/network/ArticleRequest";
import ContentSmall from "@/components/content/ContentSmall"
export default {
  components: {
    ContentSmall,
  },
  data(){
    return {
      ArticleData: "",
    }
  },
  created(){
    // 获取服务器数据
    ArticleRequest({
        url: "/getWangYiNews",
        parsam: {
          page: 1,
          count: 10
        }
    }).then(res => {
        this.ArticleData = res;
    }).catch(err => {
        console.log(err);
    });
  },
}
</script>

<style>
  .main_article_container {
      width: 100%;
      height: auto;
      
  }
    .article_cotainer_m {
      width: 100%;
      height: 100%;
      background: #FFF;
      border-radius: 3px;
      margin-top: 20px;
    }
</style>