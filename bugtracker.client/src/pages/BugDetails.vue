<!------------------------------------------------------------>

<template>
  <div class="container-fluid m-5">
    <!-- top half of page -->
    <div class="row mx-5">
      <div class="col">
        <div class="row py-2 bottom-line">
          <div class="col">
            <span>Title:</span>
            <h1>Bug's Title</h1>
            <!-- TODO {{state.activeBug.title}} -->
          </div>
          <div class="col d-flex justify-content-end align-items-end">
            <button type="button" class="btn btn-dark btn-lg" data-toggle="modal" data-target="#edit">
              Resubmit
            </button>
            <!-- Modal -->
            <div class="modal fade"
                 id="edit"
                 tabindex="-1"
                 role="dialog"
                 aria-labelledby="editLabel"
                 aria-hidden="true"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="editLabel">
                      Resubmit Bug Information
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <!-- TODO @submit.prevent="editBug(???)" -->
                      <div class="row mb-4">
                        <div class="col">
                          <input type="text" class="form-control ml-1" placeholder="New Title for Bug" required>
                          <!-- TODO v-model="state.newBugEdits.title" -->
                        </div>
                        <div class="col d-flex justify-content-center align-items-end">
                          <span>reported by:<h6 class="ml-2">
                            Insert Name
                            <!-- TODO {{user.name}} -->
                          </h6></span>
                        </div>
                      </div>
                      <div class="form-group mx-1">
                        <label for="exampleFormControlTextarea1">Write a New Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                        <!-- TODO v-model="state.newBugEdits.description" -->
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">
                      Resubmit
                    </button>
                    <button type="button" class="btn btn-dark" data-dismiss="modal">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" class="btn btn-danger btn-lg px-4 ml-3">
              Close This Bug
              <!-- TODO @click="deleteBug(???)" -->
            </button>
          </div>
        </div>
        <div class="row pb-4 pt-3 bottom-line ">
          <div class="col">
            <span class="mr-2">reported by:</span> <h2>Dean Smith</h2>
            <!-- TODO {{user.name}} -->
          </div>
          <div class="col d-flex justify-content-end align-items-end">
            <span>status:</span>
            <h3 class="text-success mx-2">
              Open
            </h3>
            <!-- TODO :class="{{state.activeBug.closed ? 'text-danger' : 'text-success'} -->
            <!-- TODO {{state.activeBug.closed ? "Closed" : "Open"}} -->
          </div>
        </div>
        <div class="row bottom-line  p-4 ">
          <div class="col p-2 border-line">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, perspiciatis illo reprehenderit placeat voluptate asperiores harum ab, expedita molestias veritatis sunt. Quis rerum repudiandae quos, fuga blanditiis consectetur facilis hic? Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit at nam ratione, commodi officiis accusantium consequatur nihil ullam eligendi voluptatibus impedit dolor, ducimus aliquid accusamus nostrum exercitationem, pariatur reiciendis aliquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias illo iusto cupiditate ipsam nobis fugiat laborum labore, nemo debitis eaque. Provident dolores sed commodi culpa animi corporis nihil necessitatibus dolorum!</p>
          <!-- TODO {{state.activeBug.description}} -->
          </div>
        </div>
      </div>
    </div>
    <!-- bottom half of page -->
    <div class="row m-5">
      <div class="col">
        <div class="row bottom-line py-2">
          <div class="col">
            <h2>
              Notes
              <button type="button" class="btn btn-success ml-1" data-toggle="modal" data-target="#exampleModal">
                Add Note
              </button>
            </h2>

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
                      Add a Note
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <!-- TODO @submit.prevent="createNote" -->
                      <div class="row mb-4">
                        <div class="col d-flex align-items-end">
                          <span>name:<h6 class="ml-2">
                            Insert Name
                            <!-- TODO {{user.name}} -->
                          </h6></span>
                        </div>
                      </div>
                      <div class="form-group mx-1">
                        <label class="sr-only" for="exampleFormControlTextarea1">Write a Note</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="What would you like to say?" required></textarea>
                        <!-- TODO v-model="state.newNote.body" -->
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                    <button type="button" class="btn btn-dark" data-dismiss="modal">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row border-line2 py-3">
          <div class="col-2">
            <h4>name</h4>
          </div>
          <div class="col">
            <h4>message</h4>
          </div>
          <div class="col-1 text-right">
            <h4>delete</h4>
          </div>
        </div>
        <NoteComponent /> <!-- TODO v-for="note in state.notes" :key="note.id" :note-prop="note" -->
        <div class="row bg-dark border-line"></div>
      </div>
    </div>
  </div>
</template>

<!------------------------------------------------------------>

<script>
import NoteComponent from '../components/NoteComponent'
// import { reactive, computed, onMounted } from 'vue'
// import { AppState } from '../AppState'
// import { notesService } from '../services/notesService'
// import { bugsService } from '../services/BugsService'
// import { useRoute } from 'vue-router'
// import Notification from '../utils/Notification'

export default {
  name: 'BugDetails',

  // setup() {
  //   const route = useRoute()
  //   const state = reactive({
  //     activeBug: computed(() => AppState.activeBug),
  //     lists: computed(() => AppState.notes),
  //     newNote: {},
  //     newBugEdits: {}
  //   })

  //   onMounted(async() => {
  //     try {
  //       await bugsService.getBugById(route.params.id)
  //       await notesService.getAllNotes(route.params.id)
  //     } catch (error) {
  //       Notification.toast('Error:' + error, 'error')
  //     }
  //   })
  //   return {
  //     state,
  //     user: computed(() => AppState.user)

  // TODO
  // async createNote() {
  //   try {
  //     state.newNote.boardId = route.params.id
  //     await notesService.createNote(state.newNote)
  //     state.newNote = {}
  //     await notesService.getAllNotes(route.params.id)
  //     Notification.toast('Note Created!', 'success')
  //   } catch (error) {
  //     Notification.toast('Error: ' + error, 'error')
  //   }
  // },

  // TODO
  // async editBug() {
  //   try {
  //     await boardsService.editBug(state.newBugEdits, route.params.id)
  //     state.newBugEdits = {}
  //     Notification.toast('All Done!', 'success')
  //   } catch (error) {
  //     Notification.toast('Error: ' + error, 'error')
  //   }
  // },

  // TODO
  // async deleteBug(id) {
  //   try {
  //     if (await Notification.confirmAction('You are about to set the status to Closed, this action is irreversible. Are you ready to close this bug?')) {
  //       await bugsService.deleteBug(id)
  //       Notification.toast('Bug Closed!', 'success')
  //     }
  //   } catch (error) {
  //     Notification.toast('Error: ' + error, 'error')
  //   }
  // }

  //     }
  //   },
  components: {
    NoteComponent
  }
}
</script>

<!------------------------------------------------------------>

<style scoped>
h2, h3, h4, h5, h6{
  display: inline;
  margin: 0;
  padding: 0;
}
.bottom-line{
  border-bottom: solid;
  border-bottom-color: rgb(167, 167, 167);
  border-bottom-width: 0.1rem;
}
.border-line{
  border: solid;
  border-color: rgb(211, 211, 211);
  border-width: 0.1rem;
}
.border-line2{
  border: solid;
  border-color: rgb(167, 167, 167);
  border-width: 0.1rem;
}

</style>

<!------------------------------------------------------------>
