<script setup lang="ts">
const title = ref('Jux\'s Personal Page');
const description = ref('Jux\'s awesome little personal page');

useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})
</script>

<template>
  <div>
    <Page/>
  </div>
</template>
