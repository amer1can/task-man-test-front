<template>
  <v-text-field
      class="mx-1"
      density="compact"
      label="Поиск"
      variant="outlined"
      :clearable="true"
      v-model="search"
      @click:clear="clearInput"
      @input="this.updateSearchString(search)"
  ></v-text-field>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: "SearchTask",
  data: () => ({
    search: ''
  }),
  methods: {
    ...mapMutations([
        "updateSearchString"
    ]),
    clearInput() {
      this.search = ''
      this.updateSearchString(this.search)
    }
  }
}
</script>

<style scoped>

</style>
