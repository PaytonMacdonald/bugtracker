<template>
  <div class="row border-line py-2">
    <div class="col-2 ml-3 d-flex align-items-center">
      <h4>Donnie Marvo</h4>
    </div>
    <div class="col border-line2 p-3 m-3">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia saepe nesciunt quo enim rerum fugiat, voluptatibus asperiores at, laboriosam ad sit facilis minus, explicabo quod repudiandae? Expedita, aliquid suscipit.</p>
    </div>
    <div class="col-1 d-flex justify-content-end align-items-center">
      <button type="button" class="btn btn-danger btn-sm px-3 py-2" title="delete this note">
        x
      </button>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

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
</style>
