<!------------------------------------------------------------>

<template>
  <div class="container-fluid m-5">
    <!-- TITLE section -->
    <div class="row">
      <div class="col">
        <div class="row pb-2 bottom-line">
          <div class="col">
            <h1 class="mr-5">
              Current Bugs
            </h1>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary mb-2" data-toggle="modal" data-target="#exampleModal">
              Report a Bug
            </button>
            <!-- Modal -->
            <div class="modal fade"
                 id="exampleModal"
                 tabindex="-1"
                 role="dialog"
                 aria-labelledby="exampleModalLabel"
                 aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Report a Bug
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <!-- TODO @submit.prevent="createBug(???)" -->
                      <div class="row mb-4">
                        <div class="col">
                          <input type="text" class="form-control ml-1" placeholder="Enter Bug Title" required>
                        </div>
                        <div class="col d-flex justify-content-center align-items-end">
                          <span>reported by:<h6 class="ml-2">
                            Insert Name
                            <!-- TODO {{user.name}} -->
                          </h6></span>
                        </div>
                      </div>
                      <div class="form-group mx-1">
                        <label for="exampleFormControlTextarea1">Describe the Bug in Detail</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">
                      Report
                    </button>
                    <!-- <router-link :to="{name: 'BugDetails', params: {id: state.activeBug.id}}"></router-link> -->
                    <button type="button" class="btn btn-dark" data-dismiss="modal">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col d-flex justify-content-end align-items-end">
            <span>
              hide closed bugs
              <input type="checkbox" class="ml-2">
              <!-- TODO non-server function @click="hideClosed" -->
            </span>
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
            <!--TODO nonServer-function @click="reorderByStatus" -->
          </div>
          <div class="col-3">
            <h6>Last Modified</h6>
            <!--TODO nonServer-function @click="reorderByDate" -->
          </div>
        </div>
        <!-- TODO filter in this tag <div :class="{{checkbox ? 'hide-thing' : ''}}"></div> -->
        <BugComponent /> <!-- TODO v-for="bug in state.bugs" :key="bug.id" :bug-prop="bug" -->
        <div class="row border-line bg-dark"></div>
      </div>
    </div>
  </div>
</template>

<!------------------------------------------------------------>

<script>
import BugComponent from '../components/BugComponent'
// import { reactive } from 'vue' // , computed, onMounted
// import { AppState } from '../AppState'
// import { bugsService } from '../services/BugsService'
// import Notification from '../utils/Notification'

export default {
  name: 'Home',

  // setup() {
  //   const state = reactive({
  //     bugs: computed(() => AppState.bugs),
  //     activeBug: computed(() => AppState.activeBug),
  //     newBug: {},
  //     checkbox: true // NOTE this is for the hide closed function
  //   })
  //   onMounted(async() => {
  //     try {
  //       await bugsService.getAllBugs()
  //     } catch (error) {
  //       Notification.toast('Error:' + error, 'error')
  //     }
  //   })
  //   return {
  //     state,
  //     user: computed(() => AppState.user),

  // TODO
  //     async createBug() {
  //       try {
  //         await bugsService.createBug(state.newBug)
  //         state.newBug = {}
  //         await bugsService.getAllBugs()
  //         Notification.toast('New Bug Reported', 'success')
  //       } catch (error) {
  //         Notification.toast('Error: ' + error, 'error')
  //       }
  //     }
  //   }
  // },

  // TODO // non server function
  // hideClosed(){
  // if(checkbox == false){
  //   checkbox = true
  // }
  // else{checkbox = false}
  // }

  // TODO // non server function
  // reorderByStatus(){}
  // reorderByDate(){}

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
h1, h6, p{
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
.hide-thing{
  display: none;
}
</style>

<!------------------------------------------------------------>
