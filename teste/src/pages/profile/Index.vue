<template>
  <div class="containerProfile">
    <Toolbar title="Perfil" class="tlbProfile" />
    <div class="containerMain">
      <div class="header">
        <img class="imgback" alt="Vue logo" src="../../assets/profileback.png" />
        <img class="imgbackBig" alt="Vue logo" src="../../assets/profileback2.png" />
        <img class="imgProfileMobile" />
        <div class="containerImgInfos">
          <img class="imgProfile" />

          <div class="containerDeskInfos">
            <h3 id="labelProfile">Julia lopes</h3>
            <div class="containerUserName">
              <img class="ic1" alt="Vue logo" src="../../assets/icon1.png" />
              <p>julianaTeste</p>
            </div>
          </div>

          <div>
            <div class="containerClasses">
              <div class="item">
                <div class="iconNum">
                  <img class="ic2" alt="Vue logo" src="../../assets/icon2.png" />
                  <p>23</p>
                </div>
                <p>Seguindo</p>
              </div>
              <div class="item">
                <div class="iconNum">
                  <img class="ic3" alt="Vue logo" src="../../assets/icon3.png" />
                  <p>23</p>
                </div>
                <p>Projetos</p>
              </div>
              <div class="item">
                <div class="iconNum">
                  <img class="ic4" alt="Vue logo" src="../../assets/icon4.png" />
                  <p>23</p>
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
              <p>23</p>
            </div>
            <p>Seguindo</p>
          </div>
          <div class="item">
            <div class="iconNum">
              <img class="ic3" alt="Vue logo" src="../../assets/icon3.png" />
              <p>23</p>
            </div>
            <p>Projetos</p>
          </div>
          <div class="item">
            <div class="iconNum">
              <img class="ic4" alt="Vue logo" src="../../assets/icon4.png" />
              <p>23</p>
            </div>
            <p>Seguidores</p>
          </div>
        </div>
      </div>

      <div class="containerSubInfos">
        <div class="containerAbProj">
          <div v-on:click="about" class="abProjHalf">
            <h3>Sobre</h3>
          </div>
          <div class="dividerProfile" />
          <div v-on:click="project" class="abProjHalf">
            <h3>Projetos</h3>
          </div>
        </div>

        <div class="containerAbout">
          <div class="containerbioDesc">
            <h3>Bio</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet tincidunt erat ut dapibus. Sed vitae ante et dolor euismod fermentum eu vitae nunc. Sed eget massa ut eros condimentum tincidunt id quis enim. Suspendisse ipsum lectus, ullamcorper et fermentum id, sodales id elit. Nam ligula purus, volutpat at pellentesque vel, congue non purus. Phasellus quis ex dapibus, elementum ipsum ut, scelerisque elit. Duis eget metus eu enim hendrerit euismod. Quisque tortor odio, molestie ut hendrerit non, faucibus quis tortor.</p>
          </div>
          <div class="containerInfos">
            <div class="containerLocation">
              <img class="ic5" alt="Vue logo" src="../../assets/icon5.png" />
              <p>San fracisco</p>
            </div>
            <div class="containerLocation">
              <img class="ic6" alt="Vue logo" src="../../assets/icon6.png" />
              <p>https://fulano.com</p>
            </div>
          </div>
        </div>
        <div class="containerProjects">
          <div class="projectItem">
            <h3>Projeto 01</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla laoreet tincidunt erat ut ...</p>
            <div class="containerTextProject">
              <p>JavaScript</p>
              <p>Atualizado em 20/20/2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toolbar from "../../components/toolbar/Index.vue";
import $ from "jquery";
export default {
  components: {
    Toolbar
  },
  methods: {
    about() {
      $(".containerAbout").css("display", "flex");
      $(".containerProjects").css("display", "none");
    },
    project() {
      $(".containerAbout").css("display", "none");
      $(".containerProjects").attr("style", "display: flex !important");
    }
  }
};
</script>

<style lang="scss" >
@import "index.scss";
</style>