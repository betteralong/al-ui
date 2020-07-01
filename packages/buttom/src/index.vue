<template>
  <div class="al-btn">
    {{text}}
  </div>
</template>

<script>
export default {
  name: 'alButton',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>