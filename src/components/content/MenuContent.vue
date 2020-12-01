<template>
    <div class="main_article_container">
        <div class="NoMenu" v-if="MainmenuArray == null">
            对不起,没有这个菜，换个菜搜索试试
        </div>
        <div v-else class="article_cotainer_m" v-for="item in MainmenuArray" :key="item[5]">
            <ContentSmall>
                    <a  href="#" @click.prevent="Xqtc(item[5])">
                        <div class="article_imgage">
                            <img :src="item[0]" :alt="item[3]">
                        </div>
                        <div class="article_txt" style="text-align: center;">
                            菜名：{{ item[3] }} | 功效：{{ item[2] }}
                            <p class="article_time" style="padding: 4px 0px;">烹饪时间: {{ item[4] }} | 准备时间: {{item[1] }}</p>
                        </div>
                    </a>
            </ContentSmall>
        </div>
        <div style="height: 60px;"></div>
    </div>
</template>

<script>
import axios from "axios"
import ContentSmall from "@/components/content/ContentSmall"
export default {
    props: {
        menuName: {
            type:String,
            required: true
        }
    },
    components: {
        ContentSmall
    },
    methods:{
        Xqtc(id){
            this.$router.push({
                path: '/MainMenuContent',
                query: {
                    MuneId: id,
                    MenuName: this.menuName
                }
            })
        }
    },
    data(){
        return {
            MainmenuArray: []
        }
    },
    created(){
        axios.get('/jisuapi/search',{params:{keyword:this.menuName,num:20,appkey:"d046da97e0df4ec0b7343f0b2b8e61d8"}})
        .then(res => {
            /**
             * item.pic 图片
             * preparetime 准备时间
             * tag 菜性标签
             * name 名字
             * cookingtime 烹饪时间
             * id
             * **/
            let menuArray = [];
            let Pathdata = res.data.result.result.list;
            for(let item of Pathdata){
                menuArray.push(item.pic,item.preparetime,item.tag,item.name,item.cookingtime,item.id);
                this.MainmenuArray.push(menuArray);
                menuArray = [];
            };
        }).catch(err => {
            this.MainmenuArray = null;
            console.log(err);
        })
    }
}
</script>

<style scoped>
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
        .NoMenu{
            max-width: 330px;
            height: 200px;
            margin: auto;
            position: absolute;
            left: 0;right: 0;top: 0;bottom: 0;
            line-height: 200px;
            text-align: center;
            color: #111;
            font-size: 20px;
            font-weight: 900;
        }
</style>