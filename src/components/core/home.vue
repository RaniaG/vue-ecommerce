<template>
  <div>
    this is
    <h1>{{$store.state.user.username}}</h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
div {
  color: $primary-color;
}
</style>