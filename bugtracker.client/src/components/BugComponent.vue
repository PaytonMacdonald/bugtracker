<template>
  <div>
    <!-- SECTION Desktop List -->
    <div class="row side-lines bottom-line2 py-2 mobile-gone">
      <div class="col-3">
        <router-link :class="bugProp.closed ? 'text-danger' :'text-success'" :to="{ name: 'BugDetails', params: { id: bugProp.id }}" title="click to read this bug's details page">
          <strong>{{ bugProp.title }}</strong>
        </router-link>
      </div>
      <div class="col-3 text-center">
        <span>{{ bugProp.creator.name }}</span>
      <!-- TODO {{ bugProp.creator.name }} find with creator id???-->
      </div>
      <div class="col-3 text-center">
        <span :class="bugProp.closed ? 'text-danger' :'text-success'">{{ bugProp.closed ? 'Closed' : 'Open' }}</span>
      <!-- TODO {{ bugProp.status ? <span class="text-success">Open</span> : <span class="text-danger">Closed</span> }} -->
      </div>
      <div class="col-3 text-right">
        <span>{{ bugProp.updatedAt.split('T')[0] }}</span>
      <!-- TODO {{ bugProp.updatedAt }} not just the created date??? updates when createBug editBug or deleteBug runs?-->
      </div>
    </div>
    <!-- SECTION Mobile List -->
    <div class="row mb-4 desktop-gone">
      <div class="col">
        <router-link class="" :to="{ name: 'BugDetails', params: {id: bugProp.id}}" title="click to read this bug's details page">
          <div class="card text-dark">
            <div class="card-header">
              <h5 class="card-title">
                <!-- TODO <router-link :to="{name: 'BugDetails', params: {id: bugProp.id}}"></router-link> -->
                <span>This is the bug</span>
              <!-- TODO {{ bugProp.title }} -->
              </h5>
            </div>
            <div class="card-body">
              <p class="card-subtitle mb-2 text-muted">
                <span>Reported by: </span><b>Dean Smith</b>
              <!-- TODO {{ user.name }} find with creator id???-->
              </p>
              <p class="card-text">
                Status: <span :class="bugProp.closed ? 'text-danger' :'text-success'"><b>{{ bugProp.closed ? 'Closed' : 'Open' }}</b></span>
                <!-- <span class="text-success"><b>Open</b></span> -->
              <!-- TODO {{ bugProp.status ? `<span class="text-success"><b>Open</b></span>` : `<span class="text-danger"><b>Closed</b></span>` }} -->
              </p>
              <p class="card-text">
                <span>Last updated: </span><b>04/25/2021</b>
                <!-- TODO {{ bugProp.closedDate }} not just the created date??? updates when createBug editBug or deleteBug runs?-->
              </p>
            </div>
          </div>
        </router-link>
      </div>
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
  },
  setup(props) {
    return {}
  },
  components: {}
}
</script>

<style scoped>
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
@media screen and (max-width: 600px) {
  .mobile-gone {
    display: none;
  }
}
@media screen and (min-width: 600px) {
  .desktop-gone {
    display: none;
  }
}
</style>
