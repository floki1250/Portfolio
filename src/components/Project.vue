<template>
  <q-page style="height: fit-content">
    <q-scroll-area
      style="
      width: 100fr;
       height:90vh;
       min-height:100%
       overflow:hidden;
      "
    >
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
      data: [],
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
        console.log(this.data);
      })
      .catch((e) => {});
  },
});
</script>
