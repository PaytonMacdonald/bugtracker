<!------------------------------------------------------------>

<template>
  <div class="container-fluid m-1 m-md-5">
    <!-- top half of page -->
    <div class="row mx-md-5">
      <div class="col">
        <div class="row bottom-line d-flex flex-column flex-md-row pb-3 pb-md-4">
          <div class="col text-center text-md-left">
            <span class="mobile-gone">Title:</span>
            <h1>
              {{ state.activeBug.title }}
            </h1>
          </div>
          <div class="col d-flex flex-column flex-md-row justify-content-md-end align-items-md-end">
            <div v-if="state.activeBug.creator && state.activeBug.creator.email === state.user.email">
              <!-- state.activeBug.closed == true || state.activeBug.creatorId != state.user.id -->
              <button type="button"
                      class="btn btn-dark btn mobile-gone"
                      data-toggle="modal"
                      data-target="#edit"
                      title="click to resubmit the bug you reported"
              >
                Resubmit
              </button>
            </div>
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
                    <form @submit.prevent="editBug">
                      <!-- TODO @submit.prevent="editBug(???)" -->
                      <div class="row mb-4">
                        <div class="col">
                          <input type="text" class="form-control ml-1" placeholder="New Title" required v-model="state.newBugEdits.title">
                          <!-- TODO v-model="state.newBugEdits.title" -->
                        </div>
                        <div class="col d-flex justify-content-center  align-items-end">
                          <span>reported by:<h6 class="ml-2 display-override">
                            {{ state.user.name }}
                            <!-- TODO {{user.name}} -->
                          </h6></span>
                        </div>
                      </div>
                      <div class="form-group mx-1">
                        <label for="exampleFormControlTextarea1">Write a New Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required v-model="state.newBugEdits.description"></textarea>
                        <!-- TODO v-model="state.newBugEdits.description" -->
                      </div>
                      <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">
                          Resubmit
                        </button>
                        <button type="button" class="btn btn-dark" data-dismiss="modal">
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" class="btn btn-danger btn px-4 my-3 my-md-0 ml-md-3" title="click to set this bug's status to closed" @click="deleteBug(state.activeBug.id)" :disabled="state.activeBug.closed == true">
              Close This Bug
            <!-- TODO @click="deleteBug(???)" -->
            </button>
            <div v-if="state.activeBug.creator && state.activeBug.creator.email === state.user.email">
              <button type="button" class="btn btn-dark btn-sm mb-2 mb-md-0 desktop-gone" data-toggle="modal" data-target="#edit">
                Resubmit
              </button>
            </div>
          </div>
        </div>
        <div class="row d-flex flex-column flex-md-row pt-2 pb-3 pb-md-4 pt-md-1 bottom-line ">
          <div class="col d-md-flex justify-content-md-start align-items-md-end">
            <span class="mr-1">reported by:</span>
            <h2 v-if="state.activeBug.creator">
              {{ state.activeBug.creator.name }}
              <!-- TODO {{ state.activeBug.creator.name }} Match it with creator id but how???-->
            </h2>
          </div>
          <div class="col col-md-3 d-md-flex justify-content-md-end align-items-md-end mt-3">
            <span class="mr-1">status:</span>
            <h3 class="text-success">
              <span :class="state.activeBug.closed ? 'text-danger' :'text-success'">{{ state.activeBug.closed ? 'Closed' : 'Open' }}</span>
            </h3>
            <!-- TODO :class="{{state.activeBug.closed ? 'text-danger' : 'text-success'} -->
            <!-- TODO {{state.activeBug.closed ? "Closed" : "Open"}} -->
          </div>
        </div>
        <div class="row bottom-line py-4 px-2 px-md-4 py-md-4">
          <div class="col p-2 p-md-3 border-line">
            <p>{{ state.activeBug.description }}</p>
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
                  <form @submit.prevent="createNote">
                    <!-- TODO @submit.prevent="createNote" -->
                    <div class="row mb-4">
                      <div class="col d-flex align-items-end">
                        <span>name:<h6 class="ml-2">
                          {{ state.user.name }}
                        </h6></span>
                      </div>
                    </div>
                    <div class="form-group mx-1">
                      <label class="sr-only" for="exampleFormControlTextarea1">Write a Note</label>
                      <textarea class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="What would you like to say?"
                                required
                                v-model="state.newNote.body"
                      ></textarea>
                      <!-- TODO v-model="state.newNote.body" -->
                    </div>
                    <div class="modal-footer">
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                      <button type="button" class="btn btn-dark" data-dismiss="modal">
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row border-line2 py-3 mobile-gone bg-dark text-white">
          <div class="col-3">
            <h4>name</h4>
          </div>
          <div class="col">
            <h4>message</h4>
          </div>
          <div class="col-2 text-right">
            <div v-if="state.activeBug.creator && state.activeBug.creator.email === state.user.email">
              <h4>delete</h4>
            </div>
          </div>
        </div>
        <NoteComponent v-for="note in state.notes" :key="note.id" :note-prop="note" /> <!-- TODO v-for="note in state.notes" :key="note.id" :note-prop="note" -->
        <div class="row bg-dark border-line"></div>
      </div>
    </div>
  </div>
</template>

<!------------------------------------------------------------>

<script>
import NoteComponent from '../components/NoteComponent'
import { reactive, computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { notesService } from '../services/NotesService'
import { bugsService } from '../services/BugsService'
import { useRoute } from 'vue-router'
import Notification from '../utils/Notification'
import $ from 'jquery'

export default {
  name: 'BugDetails',

  setup() {
    const route = useRoute()
    const state = reactive({
      activeBug: computed(() => AppState.activeBug),
      notes: computed(() => AppState.notes),
      user: computed(() => AppState.user),
      newNote: {},
      newBugEdits: {}
    })

    onMounted(async() => {
      try {
        await bugsService.getBugById(route.params.id)
        await notesService.getAllNotes(state.activeBug.id)
      } catch (error) {
        Notification.toast('Error:' + error, 'error')
      }
    })
    return {
      state,

      // TODO
      async createNote() {
        try {
          state.newNote.bug = route.params.id
          await notesService.createNote(state.newNote)
          state.newNote = {}
          $('#exampleModal').modal('hide')
          await notesService.getAllNotes(state.activeBug.id)
          Notification.toast('Note Created!', 'success')
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      },

      // TODO
      async editBug() {
        try {
          await bugsService.editBug(state.newBugEdits, route.params.id)
          state.newBugEdits = {}
          $('#edit').modal('hide')
          Notification.toast('All Done!', 'success')
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      },

      // TODO >>> make sure closedDate get's stamped and sent with this one
      async deleteBug(id, date) {
        try {
          if (await Notification.confirmAction('You are about to set the status to Closed, Are you ready to close this bug?', 'this action is irreversible', 'warning', 'Yes, close it', 'No, not yet')) {
            await bugsService.deleteBug(id)
            Notification.toast('Bug Closed!', 'success')
          }
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      }

    }
  },
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
p {
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
