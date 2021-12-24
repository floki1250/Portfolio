<template>
  <q-page>
    <q-scroll-area :style="AboutStyle">
      <div class="mini-box">
        <p style="font-size: 30px; font-weight: 500">General Info</p>
        <p>
          I’m a Front-End / ERP Developer located in Tunisia. I currently am
          working as a ERP Developer (JD Edwards Developer) at Innotech
          Consulting.I am able to develop modules, reports and do
          administration, I am also a software engineering student. I spend my
          free time putting my creativity in developing tools and designing and
          I try to learn other programming languages and other frameworks step
          by step.
        </p>
      </div>
      <div class="mini-box">
        <p style="font-size: 30px; font-weight: 500">Front End Development</p>
        <p>
          Front End Development is building out the visual components of a
          website. Using Vue JS,Scss , and Javascript, I build fast, interactive
          websites. This also may include a API's or other integrations. I am
          accepting freelance work, but I'd love to get coffee and get to know
          you, so don’t hesitate to get in touch.
        </p>
      </div>
      <div class="mini-box">
        <!--  <p style="font-size: 30px; font-weight: 500">Front End Development</p> -->
        <div>
          Vue JS
          <q-linear-progress
            stripe
            rounded
            size="10px"
            :value="0.6"
            color="indigo-6"
            style="margin: 10px 10px 10px 0px"
          />
          JD Edwards
          <q-linear-progress
            stripe
            rounded
            size="10px"
            :value="0.75"
            color="orange-6"
            style="margin: 10px 10px 10px 0px"
          />
          Javascript
          <q-linear-progress
            stripe
            rounded
            size="10px"
            :value="0.5"
            color="red"
            style="margin: 10px 10px 10px 0px"
          />
          Design
          <q-linear-progress
            stripe
            rounded
            size="10px"
            :value="0.4"
            color="teal-6"
            style="margin: 10px 10px 10px 0px"
          />
        </div>
        <q-btn
          icon="eva-file"
          label="My CV"
          class="full-width"
          push
          @click="
            opentab(
              'https://drive.google.com/file/d/1B7f8DyVqcVuepq0jaNhclzLonry7tp5c/view'
            )
          "
          color="blue-9"
        />
      </div>
      <div class="mini-box">
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
            @click="opentab('https://www.facebook.com/adam1250/')"
            flat
            round
            ><q-tooltip class="bg-indigo-9" :offset="[5, 5]">
              Facebook
            </q-tooltip></q-btn
          >
        </div>
      </div>
    </q-scroll-area>
    <q-space />
  </q-page>
</template>
<script>
import { useQuasar, Platform } from "quasar";
export default {
  data() {
    return {
      show: true,
      AboutStyle: "width: 100fr;height:100vh;min-height:100%; ",
    };
  },
  mounted() {
    if (Platform.is.desktop) {
      this.AboutStyle = "width: 100fr;height:100vh;min-height:100%; ";
    } else {
      this.AboutStyle = "width: 100fr;height:90vh;min-height:100%; ";
    }
  },
  methods: {
    opentab(url) {
      window.open(url);
    },
  },
};
</script>
