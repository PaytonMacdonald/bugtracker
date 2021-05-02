<!------------------------------------------------------------>

<template>
  <!-- <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <img src="https://bcw.blob.core.windows.net/public/img/8600856373152463" alt="CodeWorks Logo">
    <h1 class="my-5 bg-dark text-light p-3 rounded d-flex align-items-center">
      <span class="mx-2 text-white">Vue 3 Starter</span>
    </h1>
  </div> -->
  <div class="container-fluid m-5">
    <!-- TITLE section -->
    <div class="row">
      <div class="col">
        <div class="row pb-2 bottom-line">
          <div class="col">
            <h1 class="mr-5">
              Current Bugs
            </h1> <button type="btn" class="btn btn-primary mb-2">
              Report a Bug
            </button>
          </div>
          <div class="col d-flex justify-content-end align-items-end">
            <span>hide closed bugs <input type="checkbox" class="ml-2"></span>
          </div>
        </div>
      </div>
    </div>
    <!-- BUG LIST section -->
    <div class="row m-5">
      <div class="col">
        <div class="row border-line text-white bg-dark">
          <div class="col-3">
            <h6>Title</h6>
          </div>
          <div class="col-3">
            <h6>Reported By</h6>
          </div>
          <div class="col-3">
            <h6>Status</h6>
          </div>
          <div class="col-3">
            <h6>Last Modified</h6>
          </div>
        </div>
        <BugComponent /> <!-- v-for="bug in state.bugs" :key="bug.id" :bug-prop="bug" -->
        <div class="row border-line bg-dark"></div>
      </div>
    </div>
  </div>
</template>

<!------------------------------------------------------------>

<script>
import { reactive } from 'vue' // , computed, onMounted
// import { AppState } from '../AppState'
// import { bugsService } from '../services/BugsService'
import BugComponent from '../components/BugComponent'
// import Notification from '../utils/Notification'

export default {
  name: 'Home',

  setup() {
    const state = reactive({
      // bugs: computed(() => AppState.bugs),
      // newBug: {}
    })
    // onMounted(async() => {
    //   try {
    //     await bugsService.getAllBugs()
    //   } catch (error) {
    //     Notification.toast('Error:' + error, 'error')
    //   }
    // })
    return {
      state
      // async createBug() {
      //   try {
      //     await bugsService.createBug(state.newBug)
      //     state.newBug = {}
      //     await bugsService.getAllBugs()
      //     Notification.toast('New Bug Reported', 'success')
      //   } catch (error) {
      //     Notification.toast('Error: ' + error, 'error')
      //   }
      // }
    }
  },
  components: {
    BugComponent
  }
}
</script>

<!------------------------------------------------------------>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
h1, h6{
  margin: 0;
  padding: 0;
  display: inline;
}
.bottom-line{
  border-bottom: solid;
  border-bottom-color: black;
  border-bottom-width: 0.1rem;
}
.border-line{
  border: solid;
  border-color: black;
  border-width: 0.1rem;
}
</style>

<!------------------------------------------------------------>
