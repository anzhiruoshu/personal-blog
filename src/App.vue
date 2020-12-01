<template>
  <div style="width:100%;height:100%;">
       <router-view/>
    <div class="container">
      <Navbar :NavbarInfo="NavInfo" @NavClick="NavbarClick" :ActiveId="ActiveId"></Navbar>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/footer/Navbar";
export default {
    data(){
        return {
            NavInfo: [
                {
                    id:'0',
                    FontClass: "icon-shouyeshouye",
                    FontText: "首页"
                },
                {
                    id:'1',
                    FontClass: "icon-caipu",
                    FontText: "菜谱"
                },
                {
                    id:'2',
                    FontClass: "icon-shoucang",
                    FontText: "收藏"
                },
                {
                    id:'3',
                    FontClass: "icon-daohanglan-05",
                    ActiveClass:"icon-shouyeshouye-copy",
                    FontText: "我的"
                }
            ],
            ActiveId:0
        }
    },
    beforeUpdate(){
      let IdNumber = 0;
      switch(this.$route.matched[0].meta.title){
          case "菜谱":
            IdNumber = 1;
          break;
          case "收藏":
            IdNumber = 2;
          break;
          case "我的":
            IdNumber = 3;
          break;
      }
       this.ActiveId = IdNumber;
    },
    components:{
        Navbar,
    },
    methods:{
      NavbarClick(data){
          if(data != this.ActiveId){
            switch(data){
                case "0":
                  this.$router.push("/home");
                  break;
                case "1":
                  this.$router.push("/categories");
                  break;
                case "2":
                  this.$router.push("/shoppingcart");
                  break;
                case "3":
                  this.$router.push("/profile");
                  break;
            }
            this.ActiveId = data;
          }
      }
    }
}
</script>

<style>
@import "./assets/css/base.css";
.container {
  width: 100%;
  height: 49px;
  position:fixed;
  left: 0;right: 0;bottom: 0;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 1px rgb(100 100 100 / 10%);
}
</style>