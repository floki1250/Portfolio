<template>
  <Background />
  <main>
    <q-layout view="hHh lpR fFf">
      <q-drawer v-model="leftDrawerOpen" side="left" overlay behavior="desktop">
        <div class="drawer">
          <q-list class="text-white">
            <div class="item row">
              <span></span>
              <div class="row">
                <q-icon name="print" />
                <p style="">Home</p>
              </div>
            </div>
            <div class="item row">
              <span></span>
              <p>Home</p>
            </div>
            <div class="item row">
              <span></span>
              <p>Home</p>
            </div>
            <div class="item row">
              <span></span>
              <p>Home</p>
            </div>
            <div class="item row">
              <span></span>
              <p>Home</p>
            </div>
          </q-list>
        </div>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>

      <q-footer reveal elevated v-model="footer" class="bg-grey-8 text-white">
        <q-toolbar>
          <q-toolbar-title>
            <q-avatar>
              <img
                src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
              />
            </q-avatar>
            <div>Title</div>
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>
    </q-layout>
  </main>
</template>

<script>
import { ref } from "vue";
import Background from "src/components/Background.vue";

export default {
  components: { Background },
  setup() {
    const leftDrawerOpen = ref(true);
    const footer = ref(false);

    return {
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
