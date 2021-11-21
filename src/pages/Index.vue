<template>
  <q-page class="flex">
    <div class="box ">
      <div>
        <p class="name">Hello , I'm Adem</p>
        <p class="func">Web Developer</p>
      </div>
    </div>
    <div class="text-box row">
      <div class="col mini-box">
        <h5>General Info</h5>
        <p>
          I’m a Front-End / ERP Developer located in Tunisia. I currently am
          working as a ERP Developer (JD Edwards Developer) at Innotech
          Consulting. I am also working on a few side projects including E1 Page
          Generator (a simple tool to Create pages for JD Edwards Pages).
        </p>
      </div>
    
      <div class="col mini-box">
        <h5>FRONT END DEVELOPMENT</h5>
        <p>
          Front End Development is building out the visual components of a
          website. Using Vue JS,Scss , and Javascript, I build fast, interactive
          websites. This also may include a API's or other integrations. I am
          accepting freelance work, but I'd love to get coffee and get to know
          you, so don’t hesitate to get in touch.
        </p>
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
