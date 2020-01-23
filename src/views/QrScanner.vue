<template>
  <div>
    <p class="decode-result">
      Last result:
      <b>{{ result }}</b>
    </p>

    <qrcode-stream :camera="camera" @decode="onDecode" @init="onInit">
      <div v-if="validationSuccess" class="validation-success">This is a URL</div>

      <div v-if="validationFailure" class="validation-failure">This is NOT a URL!</div>

      <div v-if="validationPending" class="validation-pending">Long validation in progress...</div>
    </qrcode-stream>
  </div>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";
export default {
  components: { QrcodeStream },
  data() {
    return {
      result: "",
      isValid: undefined,
      camera: "auto",
      error: ""
    };
  },
  computed: {
    validationPending() {
      return this.isValid === undefined && this.camera === "off";
    },
    validationSuccess() {
      return this.isValid === true;
    },
    validationFailure() {
      return this.isValid === false;
    }
  },
  methods: {
    onInit(promise) {
      promise.catch(console.error).then(this.resetValidationState);
    },
    resetValidationState() {
      this.isValid = undefined;
    },
    async onDecode(content) {
      this.result = content;
      this.turnCameraOff();
      // pretend it's taking really long
      await this.timeout(3000);
      this.isValid = content.startsWith("http");
      // some more delay, so users have time to read the message
      await this.timeout(2000);
      this.turnCameraOn();
    },
    turnCameraOn() {
      this.camera = "auto";
    },
    turnCameraOff() {
      this.camera = "off";
    },
    timeout(ms) {
      return new Promise(resolve => {
        window.setTimeout(resolve, ms);
      });
    }
  }
};
</script>

<style scoped>
.error {
  font-weight: bold;
  color: red;
}
</style>