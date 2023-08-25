<template>
  <div class="border rounded-sm shadow-md min-h-[300px] h-full pt-3 pb-5 px-2">
    <h3 class="font-bold text-lg">{{ date }}</h3>

    <table class="w-full my-2">
        <tr v-for="expense in expenses" class="border-b first:border-t last:border-b-2 border-slate-300 block p-2 pr-0">
          <td>{{ expense.jam }}</td>
          <td class="w-full px-2">{{ expense.nama }}</td>
          <td>{{ toCurrency(expense.pengeluaraan) }}</td>
        </tr>
    </table>

    <div class="flex gap-5 font-bold justify-end">
      <p>Total</p>
      <p>{{ toCurrency(getTotal) }}</p>
    </div>
  </div>
</template>

<script>
import { toCurrency } from '@/lib/common';

export default {
  name: 'Table',
  props: {
    expenses: {
      type: Array,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  },
  methods: {
    toCurrency,
  },
  computed: {
    getTotal() {
      return this.expenses.reduce((acc, expense) => acc + expense.pengeluaraan, 0);
    }
  }
}
</script>
