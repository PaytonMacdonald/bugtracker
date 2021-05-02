<template>
  <div class="row side-lines bottom-line2 py-2">
    <div class="col-3">
      <!-- TODO <router-link :to="{name: 'BugDetails', params: {id: bugProp.id}}"></router-link> -->
      <span>This is the bug</span>
      <!-- TODO {{ bugProp.title }} -->
    </div>
    <div class="col-3">
      <span>Dean Smith</span>
      <!-- TODO {{ user.name }} find with creator id???-->
    </div>
    <div class="col-3">
      <span class="text-success">Open</span>
    </div>
    <div class="col-3">
      <span>04/25/2021</span>
      <!-- TODO {{ bugProp.closedDate }} not just the created date??? updates when createBug editBug or deleteBug runs?-->
    </div>
  </div>
</template>

<script>

export default {
  name: 'Bug',
  props: {
    bugProp: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.side-lines{
  border-right: solid;
  border-right-color: black;
  border-right-width: 0.1rem;
  border-left: solid;
  border-left-color: black;
  border-left-width: 0.1rem;
}
.bottom-line2{
  border-bottom: solid;
  border-bottom-color: gray(121, 121, 121);
  border-bottom-width: 0.05rem;
}
</style>
