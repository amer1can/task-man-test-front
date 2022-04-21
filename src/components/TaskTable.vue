<template>
  <div v-if="!tasks">
    <h1>Нет ни одной задачи</h1>
  </div>
  <v-table v-else theme="dark">
    <thead>
    <tr>
      <th class="text-left d-flex justify-space-between align-center">
        <h2 class="text-green-accent-3">Задача</h2>
        <v-btn
            rounded="0"
            size="small"
            v-model="sortAsc"
            :icon="sortAsc ? 'mdi-sort-clock-ascending-outline' : 'mdi-sort-clock-descending-outline'"
            @click="sortAsc = !sortAsc"
        ></v-btn>
      </th>
      <th class="text-left">
        <h2 class="text-green-accent-3">Теги</h2>
      </th>
      <th class="text-center">
        <h2 class="text-green-accent-3"></h2>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
        v-for="task in sortArr"
        :key="task._id"
    >
      <td>
        <h3>{{ task.name }}</h3>
        <div class="description d-flex justify-space-between">
          <h5>{{ task.description }}</h5>
          <h6 class="text-yellow-accent-1 font-italic">{{ task.updatedAt.substring(0,10) + ' - ' +  task.createdAt.substring(11,19)}}</h6>
        </div>
      </td>

      <td>
        <v-badge
            v-for="(tag, i) in task.tags"
            :key="i"
            color="info"
            :content="tag"
            inline
        ></v-badge>
      </td>

      <td class="text-right">
        <EditButton
            :data="task"
        />
        <v-btn
            class="mx-1"
            size="x-small"
            icon="mdi-close"
            @click="deleteById(task._id)"
        ></v-btn>
      </td>
    </tr>
    </tbody>
  </v-table>
</template>

<script>

import { mapState, mapActions, mapGetters } from 'vuex'
import EditButton from "@/components/EditButton";

export default {
  name: "TaskTable",
  components: {EditButton},
  props: ['writeText'],
  data: () => ({
    sortAsc: true
  }),
  computed: {
    ...mapState([
        "tasks",
        "searchText"
    ]),
    ...mapGetters([
        "tasksAsc",
        "tasksDesc"
    ]),
    sortArr() {
      //сортировка массива
      const usingArr = this.sortAsc ? this.tasksAsc : this.tasksDesc
      return usingArr.filter(el => el.name.includes(this.searchText ))
    },
  },
  beforeMount() {
    this.fetchAllTasks()
  },
  methods: {
    ...mapActions([
        "fetchAllTasks",
        "deleteTask"
    ]),
    deleteById(id) {
      this.deleteTask(id)
    },
  }

}
</script>

<style scoped>

</style>
