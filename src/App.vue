<template>
  <Header />

  <main class="mt-12 grid grid-cols-12 gap-5">
    <p v-if="isFetching">Loading...</p>
    <TableExpenses v-if="!isFetching"/>
  </main>
</template>

<script>
import Header from '@/components/parts/Header.vue'
import TableExpenses from '@/components/parts/TableExpenses.vue'

export default {
  name: 'App',
  data() {
    return {
      isFetching: true
    }
  },
  components: {
    Header,
    TableExpenses
  },
  created()  {
    this.$store.dispatch('fetchExpenses');
    this.isFetching = false;
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  width: calc(100vw - 32px);
  max-width: 1280px;
  margin-inline: auto;
}
</style>
