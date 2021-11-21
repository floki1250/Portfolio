<template>
  <q-page class="flex">
    <p class="title">Project</p>
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
            <div>{{ i.name }}</div>
            <q-separator  inset   />
            <div>{{ i.description }}</div>
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
