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
          <div class="item row">
            <div></div>
            <p>Home</p>
          </div>
          <div class="item row">
            <div></div>
            <p>Home</p>
          </div>
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
