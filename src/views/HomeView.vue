<template>
  <div class="wrapper">
    <div class="menu d-flex align-center justify-sm-space-around">
      <h1 class="text-center my-3 text-pink-accent-1">Task manager</h1>
      <router-link to="/about" class="about-link mx-5"><h3>About</h3></router-link>
    </div>
    <div class="add my-2 d-flex">
      <AddButton />
      <SearchTask />
      <DeleteTags />
    </div>
    <TaskTable />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import TaskTable from "@/components/TaskTable";
import AddButton from "@/components/AddButton";
import DeleteTags from "@/components/DeleteTags";
import SearchTask from "@/components/SearchTask";

export default defineComponent({
  name: 'HomeView',

  components: {
    SearchTask,
    DeleteTags,
    AddButton,
    TaskTable,
  },
});
</script>

<style>
.wrapper {
  margin: 0 auto;
  max-width: 800px;
}
.about-link {
  color: burlywood;
  text-decoration: none;
}
</style>
