<script>
export default {
  name: "NavBar",
  props: [
      "linkToAllTests"
  ]
}
</script>

<template>
  <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-light">
    <a id="navbar-logo" class="navbar-brand">TestPortal</a>
    <div id="navbar-table" class="collapse navbar-collapse">
      <a :href="linkToAllTests" class="float-right btn btn-outline-primary">All tests</a>
    </div>
  </nav>
</template>

<style scoped>
#navbar-logo {
  justify-self: left;
  margin-left: 30px;
}

#navbar-table {
  display: flex;
  justify-content: flex-end;
}
</style>