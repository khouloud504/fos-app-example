<template>
    <div class="container">
      <h1 class="title py-4">Add a new Anime</h1>
      <anime-form></anime-form>
    </div>
  </template>
  
  <script>
  import AnimeForm from "@/components/AnimeForm.vue";
  export default {
    components: { AnimeForm },
  };
  </script>
  
  <style>
  .title {
    text-decoration: underline;
  }
  </style>