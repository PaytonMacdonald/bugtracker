<!------------------------------------------------------------>

<template>
  <div class="container-fluid m-2 m-md-5">
    <!-- TITLE section -->
    <div class="row mt-3 mt-md-0">
      <div class="col">
        <div class="row pb-2 pb-md-3 bottom-line d-flex flex-column flex-md-row">
          <div class="col d-flex flex-column flex-md-row justify-content-center justify-content-md-start">
            <h1 class="text-center text-mdd-left mr-md-5">
              Current Bugs
            </h1>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary mx-3 mx-md-0 mt-3 mb-3 mb-md-0 mt-md-2" data-toggle="modal" data-target="#exampleModal" title="click to report a bug">
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
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" title="close modal">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form @submit.prevent="createBug">
                      <!-- TODO @submit.prevent="createBug" -->
                      <div class="row mb-4">
                        <div class="col">
                          <input type="text" class="form-control ml-1" placeholder="Enter Bug Title" required v-model="state.newBug.title">
                        </div>
                        <div class="col d-flex justify-content-center align-items-end">
                          <p class="">
                            reported by: <b>{{ state.user.name }}</b>
                          </p>
                        </div>
                      </div>
                      <div class="form-group mx-1">
                        <label for="exampleFormControlTextarea1">Describe the Bug in Detail</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required v-model="state.newBug.description"></textarea>
                      </div>
                      <div class="modal-footer">
                        <button type="submit" class="btn btn-primary mr-2" title="submit bug">
                          Report
                        </button>
                        <!-- TODO <router-link :to="{name: 'BugDetails', params: {id: state.activeBug.id}}"></router-link> -->
                        <button type="button" class="btn btn-dark" data-dismiss="modal" title="cancel report and close modal">
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col d-flex justify-content-end align-items-end mt-2">
            <span>
              hide closed bugs
              <input type="checkbox" class="ml-2 pointer" title="click to hide all closed bugs">
              <!-- TODO non-server function @click="hideClosed" -->
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- SECTION BUG LIST section -->
    <div class="row d-flex flex-column flex-md-row mt-4 m-md-5">
      <div class="col">
        <div class="row border-line text-white bg-dark mobile-gone">
          <div class="col-3">
            <h6 class="small-size">
              Title
            </h6>
          </div>
          <div class="col-3 text-center">
            <h6>Reported By</h6>
          </div>
          <div class="col-3 text-center">
            <h6>Status</h6>
            <!--TODO nonServer-function @click="reorderByStatus" -->
          </div>
          <div class="col-3 text-right">
            <h6>Last Modified</h6>
            <!--TODO nonServer-function @click="reorderByDate" -->
          </div>
        </div>
        <!-- TODO filter in this tag <div :class="{{checkbox ? 'hide-thing' : ''}}"></div> -->
        <BugComponent v-for="bug in state.bugs" :key="bug.id" :bug-prop="bug" />
        <div class="row border-line bg-dark"></div>
      </div>
    </div>
  </div>
</template>

<!------------------------------------------------------------>

<script>
import BugComponent from '../components/BugComponent'
import { reactive, computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { bugsService } from '../services/BugsService'
import Notification from '../utils/Notification'
import $ from 'jquery'
// import { logger } from '../utils/Logger'

export default {
  name: 'Home',

  setup() {
    const state = reactive({
      bugs: computed(() => AppState.bugs),
      activeBug: computed(() => AppState.activeBug),
      user: computed(() => AppState.user),
      newBug: {}
      // checkbox: true // NOTE this is for the hide closed function
    })
    onMounted(async() => {
      try {
        await bugsService.getAllBugs()
      } catch (error) {
        Notification.toast('Error:' + error, 'error')
      }
    })
    return {
      state,

      // TODO
      async createBug() {
        try {
          // await bugsService.getBugById()
          await bugsService.createBug(state.newBug)
          state.newBug = {}
          $('#exampleModal').modal('hide')
          await bugsService.getAllBugs()
          Notification.toast('New Bug Reported', 'success')
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      }

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
.display-override{
  display: block;
}
@media screen and (max-width: 600px) {
  .mobile-gone {
    display: none;
  }
}
</style>

<!------------------------------------------------------------>
