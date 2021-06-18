<template>
  <div>
    <button @click="login()">Login</button>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push({ name: 'movie-list' });
    },
  },
};
</script>

<style scoped></style>
