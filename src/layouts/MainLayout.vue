<template>
  <main v-if="$q.platform.is.desktop">
    <BackgroundAnim />
    <q-layout view="hHh lpR fFf">
      <q-drawer v-model="leftDrawerOpen" side="left" :width="250">
        <div
          class="item flex flex-center"
          style="
            border-radius: 100%;
            width: fit-content;
            height: fit-content;
            margin: 10% 0% 10% 16%;
          "
        >
          <q-btn round flat>
            <q-avatar size="140px">
              <img src="../assets/Logo.svg" alt="" /> </q-avatar
          ></q-btn>
        </div>
        <q-list class="text-white">
          <q-item to="/home" class="item">
            <q-item-section avatar>
              <q-avatar
                ><q-icon
                  color="#F05871"
                  text-color="white"
                  name="eva-home"
                  style="color: #f05871"
              /></q-avatar>
            </q-item-section>
            <q-item-section style="margin-left: -35%">Home</q-item-section>
          </q-item>

          <q-item to="/About" class="item">
            <q-item-section avatar>
              <q-avatar
                ><q-icon
                  color="#FF5DA2"
                  name="eva-alert-circle"
                  style="color: #4376c5"
              /></q-avatar>
            </q-item-section>
            <q-item-section style="margin-left: -35%"> About Me</q-item-section>
          </q-item>
          <q-item class="item" to="/Contact">
            <q-item-section avatar>
              <q-avatar
                ><q-icon
                  color="#FF5DA2"
                  name="eva-email"
                  style="color: #00c795"
              /></q-avatar>
            </q-item-section>
            <q-item-section style="margin-left: -35%"
              >Contact Me</q-item-section
            >
          </q-item>

          <q-separator
            style="
              background: rgba(245, 245, 245, 0.5);
              width: 90%;
              margin: 10px;
            "
          />
          <q-item class="item" style="padding: 0px">
            <q-item-section style="padding-left: 10px">
              <div class="row" style="display: flex; align-items: center">
                <q-btn
                  color="blue"
                  icon="eva-twitter"
                  @click="opentab('https://twitter.com/Adem1250_Dr')"
                  flat
                  round
                  ><q-tooltip class="bg-blue" :offset="[5, 5]">
                    Twitter
                  </q-tooltip></q-btn
                >
                <q-btn
                  color="indigo"
                  icon="eva-linkedin"
                  @click="opentab('https://www.linkedin.com/in/adem-dardour/')"
                  flat
                  round
                  ><q-tooltip class="bg-indigo" :offset="[5, 5]">
                    LinkedIn
                  </q-tooltip></q-btn
                >

                <q-btn
                  color="black"
                  icon="eva-github"
                  @click="opentab('https://github.com/floki1250')"
                  flat
                  round
                  ><q-tooltip class="bg-black" :offset="[5, 5]">
                    Github
                  </q-tooltip></q-btn
                >

                <q-btn
                  color="red"
                  icon="fab fa-reddit"
                  @click="opentab('https://www.reddit.com/user/AdemDR')"
                  flat
                  round
                  ><q-tooltip class="bg-red" :offset="[5, 5]">
                    Reddit
                  </q-tooltip></q-btn
                >

                <q-btn
                  color="indigo-9"
                  icon="eva-facebook"
                  @click="opentab('https://www.facebook.com/adam1250/')"
                  flat
                  round
                  ><q-tooltip class="bg-indigo-9" :offset="[5, 5]">
                    Facebook
                  </q-tooltip></q-btn
                >
              </div>
            </q-item-section>
          </q-item>
          <q-separator
            style="
              background: rgba(245, 245, 245, 0.5);
              width: 90%;
              margin: 10px;
            "
          />
        </q-list>
        <q-item style="position: absolute; bottom: 2%" class="item">
          <q-btn
            :color="$q.dark.isActive ? 'yellow' : 'black'"
            :icon="$q.dark.isActive ? 'eva-sun' : 'eva-moon'"
            @click="$q.dark.toggle()"
            round
            flat
            size="12px"
          />
        </q-item>
      </q-drawer>
      <q-drawer
        v-model="rightDrawerOpen"
        side="right"
        :width="300"
        style="overflow: hidden"
      >
        <div class="title text-center" style="height: fit-content">
          <p class="text-center" style="font-family: buble; font-weight: 100">
            Github Projects
          </p>
        </div>
        <q-separator dark />
        <Project />
      </q-drawer>
      <q-page-container>
        <q-page>
          <transition
            enter-active-class="animated fadeInDown slow"
            leave-active-class="animated fadeOutUp slow"
          >
            <router-view />
          </transition>
        </q-page>
      </q-page-container>
    </q-layout>
  </main>
  <main v-if="$q.platform.is.mobile">
    <q-layout>
      <q-page-container>
        <router-view />
      </q-page-container>

      <q-footer>
        <q-list class="text-white row">
          <q-item to="/home" class="item">
            <q-avatar
              ><q-icon
                color="#F05871"
                text-color="white"
                name="eva-home"
                style="color: #f05871"
            /></q-avatar>
          </q-item>

          <q-item to="/About" class="item">
            <q-avatar
              ><q-icon
                color="#FF5DA2"
                name="eva-alert-circle"
                style="color: #4376c5"
            /></q-avatar>
          </q-item>
          <q-item class="item" to="/Contact">
            <q-avatar
              ><q-icon color="#FF5DA2" name="eva-email" style="color: #00c795"
            /></q-avatar>
          </q-item>
          <q-item class="item" to="/projects">
            <q-avatar
              ><q-icon
                color="#FF5DA2"
                name="eva-briefcase"
                style="color: orange"
            /></q-avatar>
          </q-item>
        </q-list>
      </q-footer>
    </q-layout>
  </main>
</template>

<script>
import { ref } from "vue";
import "animate.css";
import Project from "src/components/Project.vue";
import BackgroundAnim from "src/components/BackgroundAnimation.vue";
import { useQuasar, Platform } from "quasar";
export default {
  components: { Project, BackgroundAnim },
  data() {
    return {
      Platform: true,
    };
  },
  methods: {
    opentab(url) {
      window.open(url);
    },
  },
  setup() {
    const $q = useQuasar();
    const leftDrawerOpen = ref(true);
    const rightDrawerOpen = ref(true);
    const footer = ref(false);

    return {
      rightDrawerOpen,
      leftDrawerOpen,
      footer,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      toggleFooter() {
        footer.value = !footer.value;
      },
    };
  },
};
</script>
