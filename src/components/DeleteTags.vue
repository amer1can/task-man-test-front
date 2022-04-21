<template>
  <v-btn
    color="secondary"
    @click.stop="openTagsDialog"
  >
    <v-icon
        size="small"
        icon="mdi-trash-can"
    ></v-icon>
    Редактировать теги
  </v-btn>

  <v-dialog
      v-model="dialog"
      max-width="600"
  >
    <v-card>
      <v-card-title class="text-h5">
        Удалить теги
      </v-card-title>

      <v-card-text class="d-flex flex-wrap">
        <span class="tag-badge mx-1 d-flex align-center"
            v-for="tag in tags"
            :key="tag._id"
        >
          {{ tag.name }}
          <span class="tag-close"
                @click="deleteTagById(tag._id)"
          ></span>
        </span>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="green darken-1"
            text
            @click="closeTags"
        >
          Закрыть
        </v-btn>
        <v-btn
            color="green darken-1"
            text
            @click="clearTags"
        >
          Удалить не используемые
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";
import {mapActions} from 'vuex'

export default {
  name: "DeleteTags",
  data: () => ({
    tags: [],
    dialog: false
  }),
  mounted() {
    this.fetchAllTags()
  },
  methods: {
    ...mapActions([
        "fetchAllTasks"
    ]),
    async fetchAllTags() {
      this.tags = await axios.get('http://localhost:3000/api/tag/all').then(res => res.data)
    },
    async deleteTagById(id) {
      await axios.delete('http://localhost:3000/api/tag/' + id)
      .then(this.fetchAllTags)
      .then(this.fetchAllTasks)
    },
    openTagsDialog() {
      this.fetchAllTags()
      this.dialog = true
    },
    closeTags() {
      this.dialog = false
    },
    clearTags() {
      axios.delete('http://localhost:3000/api/tag/delete/unused')
      .then(this.fetchAllTags)
    }

  },

}
</script>

<style scoped>
.tag-badge {
  padding: 3px 5px;
  margin: 5px 0;
  border-radius: 8px;
  background-color: aqua;
  color: black;
  font-size: 12px;
}
.tag-close {
  width: 10px;
  height: 10px;
  margin-left: 8px;
  border-radius: 50%;
  text-align: center;
  background-color: grey;
  cursor: pointer;
}

.tag-close:hover {
  background-color: red;
}

</style>
