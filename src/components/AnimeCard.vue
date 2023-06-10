<template>
  <b-card
    :title="anime.title"
    :img-src="anime.imgUrl"
    :img-alt="`${anime.title}-Image`"
    img-top
    style="max-width: 20rem"
    class="mb-2"
  >
    <b-card-text>Number of episodes: {{ anime.episodes }}</b-card-text>
    <b-card-text>Status: {{ anime.status }}</b-card-text>

    <b-button @click="showEditModal = true" variant="outline-primary">Edit</b-button>

    <edit-modal
      :anime="anime"
      :show-modal="showEditModal"
      @save-anime="saveAnime"
    ></edit-modal>
  </b-card>
</template>

<script>
import EditModal from "./EditModal.vue";

export default {
  props: {
    anime: {
      type: Object,
      default: function () {
        return {
          title: "",
          episodes: 0,
          status: null,
          imgUrl: "",
        };
      },
    },
  },
  components: {
    EditModal,
  },
  data() {
    return {
      showEditModal: false,
    };
  },
  methods: {
    saveAnime(editedAnime) {
      this.$emit("save-anime", editedAnime);
      this.showEditModal = false;
    },
  },
};
</script>

<style>
</style>
