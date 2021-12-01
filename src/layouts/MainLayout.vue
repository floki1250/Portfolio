<template>
  <main>
    <q-layout view="hHh lpR fFf">
      <q-drawer v-model="leftDrawerOpen" side="left" :width="250">
        <div>
          <q-avatar size="140px" style="margin: 10% 0% 15% 25%">
            <img src="../assets/brand.svg" alt="" />
          </q-avatar>
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
              margin: 50px 10px 10px 10px;
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
                  @click="
                    opentab(
                      'https://drive.google.com/file/d/1B7f8DyVqcVuepq0jaNhclzLonry7tp5c/view'
                    )
                  "
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
      </q-drawer>
      <q-drawer v-model="rightDrawerOpen" side="right" :width="300">
        <Project />
      </q-drawer>
      <q-page-container>
        <q-page>
          <router-view />
        </q-page>
      </q-page-container>
    </q-layout>
  </main>
</template>

<script>
import { ref } from "vue";
import Project from "src/components/Project.vue";

export default {
  components: { Project },
  data() {
    return {};
  },
  methods: {
    opentab(url) {
      window.open(url);
    },
  },
  setup() {
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
