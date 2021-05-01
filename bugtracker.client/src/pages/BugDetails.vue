<template>
  <div class="container-fluid m-5">
    <!-- top half of page -->
    <div class="row mx-5">
      <div class="col">
        <div class="row py-2 bottom-line">
          <div class="col">
            <span>Title:</span>
            <h1>Bug's Title</h1>
          </div>
          <div class="col d-flex justify-content-end align-items-end">
            <button type="button" class="btn btn-danger btn-lg px-5">
              Close
            </button>
          </div>
        </div>
        <div class="row py-2 bottom-line">
          <div class="col">
            <span>reported by:</span> <h2>Dean Smith</h2>
          </div>
          <div class="col d-flex justify-content-end align-items-end">
            <span>status:</span><h3 class="text-success mx-2">
              Open
            </h3>
          </div>
        </div>
        <div class="row bottom-line  p-4 ">
          <div class="col p-2 border-line">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, perspiciatis illo reprehenderit placeat voluptate asperiores harum ab, expedita molestias veritatis sunt. Quis rerum repudiandae quos, fuga blanditiis consectetur facilis hic? Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit at nam ratione, commodi officiis accusantium consequatur nihil ullam eligendi voluptatibus impedit dolor, ducimus aliquid accusamus nostrum exercitationem, pariatur reiciendis aliquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias illo iusto cupiditate ipsam nobis fugiat laborum labore, nemo debitis eaque. Provident dolores sed commodi culpa animi corporis nihil necessitatibus dolorum!</p>
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
              Notes <button type="button" class="btn btn-success ml-1">
                Add Note
              </button>
            </h2>
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
        <NoteComponent />
        <NoteComponent />
        <NoteComponent />
        <div class="row bg-dark border-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import NoteComponent from '../components/NoteComponent'

export default {
  name: 'BugDetails',

  components: {
    NoteComponent
  }
}
</script>

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
