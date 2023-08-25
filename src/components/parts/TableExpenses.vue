<template>
  <div v-for="(detail, date) in expenses" class="col-span-3">
    <Table :expenses="detail" :date="date" />
  </div>
</template>

<script>
import Table from '@/components/elements/Table.vue'

export default {
  name: 'TableExpenses',
  components: {
    Table
  },
  computed: {
    expenses() {
      return this.$store.getters.groupedExpenses;
    }
  }
}
</script>
