<template>
  <div style="margin: 50px">
    <q-input
      standout="bg-white"
      v-model="name"
      label="Name"
      style="margin: 15px"
      dark
    />
    <q-input
      standout="bg-white"
      v-model="subject"
      label="Subject"
      style="margin: 15px"
      dark
    />
    <q-input
      standout="bg-white"
      v-model="message"
      label="Messsage"
      style="margin: 15px; max-height: 200px"
      type="textarea"
      dark
    />
    <a :href="mail">
      <q-btn
        color="transparent"
        icon="eva-email"
        label="Send"
        style="margin: 15px; width: 150px"
        @click="generate"
      ></q-btn
    ></a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",

      subject: "",
      message: "",
      mail: "",
    };
  },
  methods: {
    generate() {
      this.mail =
        "mailto:d.adem1250@gmail.com?subject=" +
        this.subject +
        "&body=" +
        this.message;
      console.log(this.mail);
    },
  },
};
</script>
