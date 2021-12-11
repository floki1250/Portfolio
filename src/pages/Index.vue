<template>
  <q-page class="flex">
    <div class="box">
      <div>
        <p class="name">Hello , I'm Adem</p>
        <p class="func">Web Developer</p>
      </div>
    </div>
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
