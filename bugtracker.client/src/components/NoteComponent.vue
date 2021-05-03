<!------------------------------------------------------------>

<template>
  <div class="">
    <div class="row border-line py-2 mobile-gone">
      <div class="col-2 ml-3 d-flex align-items-center">
        <h4>Donnie Marvo</h4>
      <!-- TODO {{ user.name }} how do I grab another user's name??? profile model???}} -->
      </div>
      <div class="col border-line2 p-3 m-3">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia saepe nesciunt quo enim rerum fugiat, voluptatibus asperiores at, laboriosam ad sit facilis minus, explicabo quod repudiandae? Expedita, aliquid suscipit.</p>
        <!-- TODO {{ noteProp.body }} -->
      </div>
      <div class="col-1 d-flex justify-content-end align-items-center">
        <button type="button" class="btn btn-danger btn-sm px-3 py-2" title="delete this note">
          <!-- TODO @click="deleteNote(noteProp.id)" -->
          x
        </button>
      </div>
    </div>
    <!-- SECTION Mobile List -->
    <div class="row desktop-gone">
      <div class="card my-4 dektop-gone">
        <div class="card-header">
          <h6>Donnie Marvo</h6>
          <!-- TODO {{ user.name }} how do I grab another user's name??? profile model???}} -->
        </div>
        <div class="card-body">
          <p class="card-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia saepe nesciunt quo enim rerum fugiat, voluptatibus asperiores at, laboriosam ad sit facilis minus, explicabo quod t.
          </p>
          <div class="col d-flex justify-content-end">
            <button type="button" class="btn btn-danger btn-sm px-3 mt-2" title="delete this note">
              <!-- TODO @click="deleteNote(noteProp.id)" disable if it's not you logged in-->
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!------------------------------------------------------------>

<script>
// import { reactive, computed, onMounted } from 'vue'
// import { AppState } from '../AppState'
// import Notification from '../utils/Notification'
// import { notesService } from '../services/NotesService'

export default {
  name: 'Note',
  props: {
    noteProp: {
      type: Object,
      required: true
    }
  }
  // setup(props) {
  //   const state = reactive({
  //     notes: computed(() => AppState.notes)
  //   })
  //   onMounted(async() => {
  //     try {
  //       await notesService.getAllNotes(props.noteProp.bug)
  //     } catch (error) {
  //       Notification.toast('Error:' + error, 'error')
  //     }
  //   })
  //   return {
  //     state,

  // TODO
  //     async deleteNote(id) {
  //       try {
  //         if (await Notification.confirmAction('Are you sure you want to delete this note?')) {
  //           await notesService.deleteNote(id)
  //           await notesService.getAllNotes(props.noteProp.bug)
  //           Notification.toast('Note Deleted', 'success')
  //         }
  //       } catch (error) {
  //         Notification.toast('Error: ' + error, 'error')
  //       }
  //     }

  //   }
  // }
}
</script>

<!------------------------------------------------------------>

<style>
.side-lines{
  border-right: solid;
  border-right-color: rgb(167, 167, 167);
  border-right-width: 0.1rem;
  border-left: solid;
  border-left-color: rgb(167, 167, 167);
  border-left-width: 0.1rem;
}
.bottom-line{
  border-bottom: solid;
  border-bottom-color: rgb(167, 167, 167);
  border-bottom-width: 0.05rem;
}
.border-line{
  border: solid;
  border-color: rgb(167, 167, 167);
  border-width: 0.1rem;
}
.border-line2{
  border: solid;
  border-color: rgb(211, 211, 211);
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
