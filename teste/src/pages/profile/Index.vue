<template>
  <div @scroll="handleScrolledToBottom" class="containerProfile">
    <Toolbar title="Perfil" class="tlbProfile" />
    <div class="containerMain">
      <div class="header">
        <img class="imgback" alt="Vue logo" src="../../assets/profileback.png" />
        <img class="imgbackBig" alt="Vue logo" src="../../assets/profileback2.png" />
        <img class="imgProfileMobile" :src="userDetail.avatar_url" />
        <div class="containerImgInfos">
          <div class="containerImgLabel">
            <img class="imgProfile" :src="userDetail.avatar_url" />

            <div class="containerDeskInfos">
              <h3 id="labelProfile">{{userDetail.name}}</h3>
              <div class="containerUserName">
                <img class="ic1" alt="Vue logo" src="../../assets/icon1.png" />
                <p>{{userDetail.login}}</p>
              </div>
            </div>
          </div>

          <div class="containerIcons">
            <div class="containerClasses">
              <div class="item">
                <div class="iconNum">
                  <img class="ic2" alt="Vue logo" src="../../assets/icon2.png" />
                  <p>{{userDetail.following}}</p>
                </div>
                <p>Seguindo</p>
              </div>
              <div class="item">
                <div class="iconNum">
                  <img class="ic3" alt="Vue logo" src="../../assets/icon3.png" />
                  <p>{{userDetail.public_repos}}</p>
                </div>
                <p>Projetos</p>
              </div>
              <div class="item">
                <div class="iconNum">
                  <img class="ic4" alt="Vue logo" src="../../assets/icon4.png" />
                  <p>{{userDetail.followers}}</p>
                </div>
                <p>Seguidores</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="containerInfosLabels">
        <h3 id="labelProfile">Julia lopes</h3>
        <div class="containerUserName">
          <img class="ic1" alt="Vue logo" src="../../assets/icon1.png" />
          <p>julianaTeste</p>
        </div>
        <div class="containerClasses">
          <div class="item">
            <div class="iconNum">
              <img class="ic2" alt="Vue logo" src="../../assets/icon2.png" />
              <p>{{userDetail.following}}</p>
            </div>
            <p>Seguindo</p>
          </div>
          <div class="item">
            <div class="iconNum">
              <img class="ic3" alt="Vue logo" src="../../assets/icon3.png" />
              <p>{{userDetail.public_repos}}</p>
            </div>
            <p>Projetos</p>
          </div>
          <div class="item">
            <div class="iconNum">
              <img class="ic4" alt="Vue logo" src="../../assets/icon4.png" />
              <p>{{userDetail.followers}}</p>
            </div>
            <p>Seguidores</p>
          </div>
        </div>
      </div>

      <div class="containerSubInfos">
        <div class="containerAbProj">
          <div v-on:click="about" class="abProjHalf" id="ab">
            <h3>Sobre</h3>
          </div>
          <div class="dividerProfile" />
          <div v-on:click="project" class="abProjHalf" id="projectaba">
            <h3>Projetos</h3>
          </div>
        </div>

        <div class="containerAbout">
          <div class="containerbioDesc">
            <h3>Bio</h3>
            <p>{{userDetail.bio || "Não foi definido"}}</p>
          </div>
          <div class="containerInfos">
            <div class="containerLocation">
              <img class="ic5" alt="Vue logo" src="../../assets/icon5.png" />
              <p>{{userDetail.location || 'Não fornecido'}}</p>
            </div>
            <div class="containerLocation">
              <img class="ic6" alt="Vue logo" src="../../assets/icon6.png" />
              <p>{{userDetail.html_url || "Não fornecido"}}</p>
            </div>
          </div>
        </div>
        <div class="containerProjects">
          <div v-for="(proj,index) in projects" :key="index" class="projectItem">
            <h3>{{proj.name || "Não foi definido"}}</h3>
            <div class="containerDesktopInfos">
              <p>{{proj.description || "Não foi definido"}}</p>
              <div class="containerPointerUpdate">
                <div class="containerPointer">
                  <img class="pointerlanguage" :style="{'background': getRandomColor()}"/>
                  <p>{{proj.language || "Não foi definido"}}</p>
                </div>
                <p>Atualizado em {{changeData(proj.updated_at)}}</p>
              </div>
            </div>

            <div class="containerTextProject">
              <div class="containerPointer">
                  <img class="pointerlanguage" :style="{'background': getRandomColor()}"/>
                  <p>{{proj.language || "Não foi definido"}}</p>
                </div>
              <p>Atualizado em {{changeData(proj.updated_at)}}</p>
            </div>
          </div>
          <div v-if="loader" class="circleLoader" />
        </div>
      </div>
      <!-- <div v-observe-visibility="handleScrolledToBottom"></div> -->
    </div>
  </div>
</template>

<script>
import Toolbar from "../../components/toolbar/Index.vue";
import User from "../../services/getUser";
import ProjectsList from "../../services/getProjects";
import $ from "jquery";

export default {
  components: {
    Toolbar
  },
  data() {
    return {
      userDetail: "",
      projects: [],
      currentPage: 8,
      loader: false,
      isProject: false
    };
  },
  mounted() {
    User.getUser(localStorage.getItem("userId")).then(response => {
      this.userDetail = response.data;
    });
    this.fetch();
  },
  methods: {
    async fetch() {
      const response = await ProjectsList.getProject(
        localStorage.getItem("name"),
        this.currentPage
      );
      this.projects = response.data;
    },
    about() {
      $(".containerAbout").css("display", "flex");
      $(".containerProjects").css("display", "none");
      this.isProject = false
    },
    project() {
      $(".containerAbout").css("display", "none");
      $(".containerProjects").attr("style", "display: flex !important");
      this.isProject = true
    },
    changeData(data) {
      let d1 = data.slice(0, 4);
      let d2 = data.slice(5, 7);
      let d3 = data.slice(8, 10);
      return d3 + "/" + d2 + "/" + d1;
    },
    handleScrolledToBottom({
      target: { scrollTop, clientHeight, scrollHeight }
    }) {
      if (scrollTop + clientHeight >= scrollHeight && this.isProject) {
        this.loader = true;
        setTimeout(() => {
          this.currentPage += 8;
          this.fetch();
          this.loader = false;
        }, 2000);
      }
    },
    getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  }
};
</script>

<style lang="scss" >
@import "index.scss";
</style>