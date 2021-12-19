<template>
  <q-page class="flex">
    <div class="box">
      <div class="flex flex-left">
        <p class="name">Hey there!</p>
        <p class="name">I'm Adam Dardour</p>
        <p class="func">Web Developer</p>
      </div>
      <div class="flex flex-bottom">
        <div>
          <img
            src="../assets/vue.png"
            alt=""
            srcset=""
            style="width: 70px; height: 70px"
          />
        </div>
        <div>
          <img
            src="../assets/js.png"
            alt=""
            srcset=""
            style="width: 70px; height: 70px"
          />
        </div>
        <div>
          <img
            src="../assets/sass.png"
            alt=""
            srcset=""
            style="width: 70px; height: 70px"
          />
        </div>
        <div>
          <img
            src="../assets/figma.png"
            alt=""
            srcset=""
            style="width: 70px; height: 70px"
          />
        </div>
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
