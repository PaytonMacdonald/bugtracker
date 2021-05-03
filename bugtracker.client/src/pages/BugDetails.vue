<!------------------------------------------------------------>

<template>
  <div class="container-fluid m-2 m-md-5">
    <!-- top half of page -->
    <div class="row mx-md-5">
      <div class="col">
        <div class="row bottom-line d-flex flex-column flex-md-row pb-3 pb-md-4">
          <div class="col text-center text-md-left">
            <span class="mobile-gone">Title:</span>
            <h1>
              Bug's Title
            </h1>
            <!-- TODO {{state.activeBug.title}} -->
          </div>
          <div class="col d-flex flex-column flex-md-row justify-content-md-end align-items-md-end">
            <button type="button" class="btn btn-dark btn-lg mobile-gone" data-toggle="modal" data-target="#edit" title="click to resubmit the bug you reported">
              Resubmit Bug
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
                          <input type="text" class="form-control ml-1" placeholder="New Title" required>
                          <!-- TODO v-model="state.newBugEdits.title" -->
                        </div>
                        <div class="col d-flex justify-content-center align-items-end">
                          <span>reported by:<h6 class="ml-2 display-override">
                            Dean Smith of Lothric
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
            <button type="button" class="btn btn-danger btn-lg px-4 my-3 my-md-0 ml-md-3" title="click to set this bug's status to closed">
              Close This Bug
              <!-- TODO @click="deleteBug(???)" -->
            </button>
            <button type="button" class="btn btn-dark btn-sm mb-2 mb-md-0 desktop-gone" data-toggle="modal" data-target="#edit">
              Resubmit Bug
            </button>
          </div>
        </div>
        <div class="row d-flex flex-column flex-md-row pt-2 pb-3 pb-md-4 pt-md-1 bottom-line ">
          <div class="col d-md-flex justify-content-md-start align-items-md-end">
            <span class="mr-1">reported by:</span>
            <h2>
              Dean Smith of Lothric
            <!-- TODO {{user.name}} -->
            </h2>
          </div>
          <div class="col col-md-3 d-md-flex justify-content-md-end align-items-md-end mt-3">
            <span class="mr-1">status:</span>
            <h3 class="text-success">
              Open
            </h3>
            <!-- TODO :class="{{state.activeBug.closed ? 'text-danger' : 'text-success'} -->
            <!-- TODO {{state.activeBug.closed ? "Closed" : "Open"}} -->
          </div>
        </div>
        <div class="row bottom-line py-4 px-2 px-md-4 py-md-4">
          <div class="col p-2 border-line">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, perspiciatis illo reprehenderit placeat voluptate asperiores harum ab, expedita molestias veritatis sunt. Quis rerum repudiandae quos, fuga blanditiis consectetur facilis hic? Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit at nam ratione, commodi officiis accusantium consequatur nihil ullam eligendi voluptatibus impedit dolor, ducimus aliquid accusamus nostrum exercitationem, pariatur reiciendis aliquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias illo iusto cupiditate ipsam nobis fugiat laborum labore, nemo debitis eaque. Provident dolores sed commodi culpa animi corporis nihil necessitatibus dolorum!</p>
          <!-- TODO {{state.activeBug.description}} -->
          </div>
        </div>
      </div>
    </div>
    <!-- bottom half of page -->
    <div class="row mx-2 my-3 mx-md-5 my-md-5">
      <div class="col">
        <div class="row bottom-line py-md-2 d-flex flex-column flex-md-row">
          <div class="col mb-3 mb-md-0 d-flex justify-content-center justify-content-md-start">
            <h2 class="size-override">
              Notes
              <button type="button" class="btn btn-success ml-1 mb-md-3 mobile-gone" data-toggle="modal" data-target="#exampleModal" title="click to add a note to this bug">
                Add Note
              </button>
            </h2>
          </div>
          <div class="col d-flex flex-column">
            <button type="button" class="btn btn-success desktop-gone mb-3" data-toggle="modal" data-target="#exampleModal">
              Add Note
            </button>
          </div>

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
        <div class="row border-line2 py-3 mobile-gone bg-dark text-white">
          <div class="col-2">
            <h4>name</h4>
          </div>
          <div class="col">
            <h4>message</h4>
          </div>
          <div class="col-2 text-right">
            <h4>delete</h4>
          </div>
        </div>
        <NoteComponent /> <!-- TODO v-for="note in state.notes" :key="note.id" :note-prop="note" -->
        <NoteComponent /> <!-- TODO v-for="note in state.notes" :key="note.id" :note-prop="note" -->
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
.display-override{
  display: block;
}
h2{
  font-size: 1.5rem;
}
  .size-override{
    font-size: 1.75rem;
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
@media screen and (max-width: 600px) {
  .mobile-gone {
    display: none;
  }
  h2{
    display: block;
    font-size: 1.15rem;
  }
  h3{
    display: block;
  }
}
@media screen and (min-width: 600px) {
  .desktop-gone {
    display: none;
  }
}

</style>

<!------------------------------------------------------------>
