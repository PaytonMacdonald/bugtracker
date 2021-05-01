<template>
  <div class="row side-lines bottom-line2 py-2">
    <div class="col-3">
      <span>This is the bug</span>
    </div>
    <div class="col-3">
      <span>Dean Smith</span>
    </div>
    <div class="col-3">
      <span class="text-success">Open</span>
    </div>
    <div class="col-3">
      <span>04/25/2021</span>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
// import { bugsService } from '../services/BugsService'

export default {
  name: 'Bug',
  // props: {
  //   bugProp: {
  //     type: Object,
  //     required: true
  //   }
  // },
  setup(props) {
    const state = reactive({
      // newBug: {}
    })
    // onMounted(async() => {
    //   try {
    //     await bugsService.getAllBug(props.bugProp.id)
    //   } catch (error) {
    //     Notification.toast('Error:' + error, 'error')
    //   }
    // })
    return {
      state
      // async createBug() {
      //   try {
      //     state.newBug.taskId = props.taskProp.id
      //     await bugsService.createBug(state.newBug)
      //     state.newBug = {}
      //     await bugsService.getAllBug(props.bugProp.id)
      //     Notification.toast('Bug Reported!', 'success')
      //   } catch (error) {
      //     Notification.toast('Error: ' + error, 'error')
      //   }
      // }
      // async deleteBug(id) {
      //   try {

      // },
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
