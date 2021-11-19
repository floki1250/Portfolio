<template>
  <main>
    <q-layout view="hHh lpR fFf" @mousemove="">
      <q-drawer
        v-model="leftDrawerOpen"
        side="left"
        overlay
        behavior="desktop"
        :width="250"
      >
        <q-list class="text-white">
          <div class="item row">
            <div class="row">
              <q-icon name="print" />
              <p style="">Home</p>
            </div>
          </div>
          <div class="item row">
            <div></div>
            <p>Home</p>
          </div>
          <div class="item row">
            <div></div>
            <p>Home</p>
          </div>
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
      <q-drawer
        show-if-above
        v-model="rightDrawerOpen"
        side="right"
        :width="300"
      >
        <Project />
      </q-drawer>
      <q-page-container>
        <q-page padding>
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
