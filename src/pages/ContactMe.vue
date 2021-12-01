<template>
  <div style="margin: 50px">
    <q-input
      standout="bg-blue-10 text-white"
      v-model="name"
      label="Name"
      bg-color="white"
      style="margin: 15px"
    />
    <q-input
      standout="bg-blue-10 text-white"
      v-model="subject"
      label="Subject"
      bg-color="white"
      style="margin: 15px"
    />
    <q-input
      standout="bg-blue-10 text-white"
      v-model="message"
      label="Messsage"
      bg-color="white"
      style="margin: 15px; max-height: 200px"
      type="textarea"
    />
    <a :href="mail">
      <q-btn
        color="blue-10"
        icon="eva-paper-plane"
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
