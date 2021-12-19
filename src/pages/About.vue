<template>
  <q-page style="overflow: auto !important">
    <div class="mini-box">
      <p style="font-size: 30px; font-weight: 500">General Info</p>
      <p>
        I’m a Front-End / ERP Developer located in Tunisia. I currently am
        working as a ERP Developer (JD Edwards Developer) at Innotech
        Consulting.I am able to develop modules, reports and do administration,
        I am also a software engineering student. I spend my free time putting
        my creativity in developing tools and designing and I try to learn other
        programming languages and other frameworks step by step.
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
      <p style="font-size: 30px; font-weight: 500">Front End Development</p>
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
      <q-btn icon="check" label="My CV" class="full-width" push />
    </div>
  </q-page>
</template>
