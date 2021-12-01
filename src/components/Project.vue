<template>
  <q-page class="flex">
    <div class="title">
      <q-separator
        style="
          background: rgba(245, 245, 245, 0.5);
          width: 300px;
          margin-top: 10px;
        "
      />
      <p>Github Projects</p>
      <q-separator style="background: rgba(245, 245, 245, 0.5); width: 300px" />
    </div>
    <q-scroll-area style="width: 400px; height: 500px">
      <q-list class="text-white">
        <div v-for="i in this.data" :key="i">
          <div
            class="item row"
            style="height: 100px"
            @click="
              {
                openLink(i.html_url);
              }
            "
          >
            <div
              style="
                background-color: #e2e5de8f;
                width: 100%;
                border-radius: 5px;
              "
            >
              {{ i.name }}
            </div>
            <q-separator inset />
            <div style="width: 100%; border-radius: 5px">
              {{ i.description }}
            </div>
          </div>
        </div>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { api } from "boot/axios";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  data() {
    return {
      data: null,
    };
  },
  methods: {
    openLink(link) {
      window.open(link);
    },
  },
  mounted() {
    api
      .get("")
      .then((response) => {
        this.data = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.error(e);
      });
  },
});
</script>
