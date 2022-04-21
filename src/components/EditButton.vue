<template>
  <v-btn
      class="mx-1"
      size="small"
      icon="mdi-pencil"
      v-model="dialog"
      @click.stop="dialog = true"
  ></v-btn>

  <v-dialog
      v-model="dialog"
      max-width="600"
  >
    <v-card>
      <v-card-title class="text-h5">
        Добавить новую задачу
      </v-card-title>

      <v-card-text>
        <v-text-field
            label="Название задачи"
            hint="Купить продукты"
            v-model="name"
            variant="outlined"
        ></v-text-field>

        <v-text-field
            label="Описание задачи"
            hint="Купить на утро хлеб и молоко"
            v-model="description"
            variant="outlined"
        ></v-text-field>

        <v-text-field
            label="Теги"
            hint="Список тегов через запятую"
            v-model="tags"
            variant="outlined"
        ></v-text-field>


      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
            color="green darken-1"
            text
            @click="updateTaskById"
        >
          Обновить
        </v-btn>

        <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
        >
          Отменить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: "EditButton",
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    dialog: false,
    name: '',
    description: '',
    tags: ''
  }),
  mounted() {
    this.name = this.data.name
    this.description = this.data.description
    this.tags = this.data.tags.join(',')

  },
  methods: {
    ...mapActions([
        "updateTask"
    ]),
    updateTaskById() {
      const updatedData = {
        name: this.name,
        description: this.description,
        tags: this.tags.split(',')
      }
      this.updateTask({id: this.data._id, updatedData})
      this.dialog = false
    },
  }
}
</script>

<style scoped>

</style>
