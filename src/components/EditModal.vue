import { mapActions } from 'vuex';
<template>
    <b-modal v-model="modalVisible" title="Edit Anime">
      <b-form @submit="saveChanges">
        <b-form-group label="title" label-for="edit-title">
          <b-form-input id="edit-title" v-model="editedAnime.title" type="text" required></b-form-input>
        </b-form-group>
  
        <b-form-group label="Number of Episodes" label-for="edit-episodes">
          <b-form-input id="edit-episodes" v-model="editedAnime.episodes" type="number" min="0"></b-form-input>
        </b-form-group>
  
        <b-form-group label="Status" label-for="edit-status">
          <b-form-select id="edit-status" v-model="editedAnime.status" :options="statusOptions" required></b-form-select>
        </b-form-group>
  
        <b-form-group label="Image URL" label-for="edit-img-url">
          <b-form-input id="edit-img-url" v-model="editedAnime.imgUrl" type="url"></b-form-input>
        </b-form-group>
  
        <b-button type="submit" variant="primary">Save Changes</b-button>
      
        <b-button variant="outline-secondary" @click="modalVisible = false">Cancel</b-button>
      </b-form>
    </b-modal>
  </template>
  
  <script>
  export default {
    props: {
      anime: {
        type: Object,
        default: function () {
          return {title: "",
          episodes: 0,
          status: null,
          imgUrl: "",
        }
          
        },
      },
      showModal: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        modalVisible: false,
        editedAnime: { ...this.anime },
        statusOptions: ["OnGoing", "Finished"],
      };
    },
    watch: {
    showModal(newValue) {
        this.modalVisible = newValue;
        if (!newValue) {
          this.editedAnime = { ...this.anime }; 
        }
      },
    },
    methods: {
      saveChanges() {
        // Emit a "save-anime" event with the edited anime data
        this.$emit("save-anime", this.editedAnime);
        console.log(this.editedAnime);
        // Close the modal
        this.modalVisible = false;
      },
    },
  };
  </script>
  
  <style>
  </style>
 