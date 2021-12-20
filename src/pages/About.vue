<template>
  <q-page>
    <q-scroll-area style="width: 100fr; height: 600px; margin: 10px">
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
            :value="0.5"
            color="indigo-6"
            style="margin: 10px 10px 10px 0px"
          />
          JD Edwards
          <q-linear-progress
            stripe
            rounded
            size="10px"
            :value="0.5"
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
            :value="0.5"
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
        />
      </div>
    </q-scroll-area>
  </q-page>
</template>
<script>
export default {
  methods: {
    opentab(url) {
      window.open(url);
    },
  },
};
</script>
