<template>
  <div class="item" style="margin: 50px">
    <q-input
      rounded
      borderless
      label-color="orange"
      color="blue-10"
      v-model="name"
      label="Name"
      style="margin: 15px"
    />
    <q-input
      rounded
      borderless
      label-color="orange"
      color="blue-10"
      v-model="subject"
      label="Subject"
      style="margin: 15px"
    />
    <q-input
      rounded
      borderless
      label-color="orange"
      color="blue-10"
      v-model="message"
      label="Messsage"
      style="margin: 15px; max-height: 200px"
      type="textarea"
    />

    <a :href="mail">
      <q-btn
        color="blue-9"
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
