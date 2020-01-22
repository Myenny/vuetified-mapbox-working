<template>
  <div class="column">
    <div class="columns is-multiline is-mobile">
      <div class="column is-full">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title is-size-3-desktop is-centered">Events PAGE</p>
          </header>
          <div class="card-content">
            <div class="content has-text-centered">
              <p class="subtitle has-text-weight-bold">This Page Is Still Under Construction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import EventBus from '@/event-bus';
export default {
  name: "Events",
  components: {},
  props: {},
  watch: {},
  computed: {},
  mounted() {},
  beforeDestroy() {},
  data() {
    return {
      activeCandidates: []
    };
  },
  methods: {
    confirmSave() {
      this.alert("Save");
    }
  }
};
</script>
<style lang="scss" scoped>
</style>