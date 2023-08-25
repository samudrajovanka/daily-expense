<template>
  <div v-if="isOpen" class="grid place-content-center bg-neutral-900/70 fixed inset-0 z-50">
    <div class="bg-white w-[400px] p-5">
      <p class="text-xl mb-3 font-semibold">Tambah Entri</p>

      <form class="flex flex-col gap-4" @submit="handleSubmit">
        <div class="input-group">
          <label for="name">Nama</label>
          <input
            type="text"
            required
            id="name"
            v-model="name"
            class="input"
            placeholder="Masukan nama pengeluaran"
          >
        </div>

        <div class="input-group">
          <label for="expense">Harga</label>
          <input
            type="number"
            min="1"
            required
            id="expense"
            v-model="expense"
            class="input"
            placeholder="Masukan harga pengeluaran"
          >
        </div>

        <div class="flex gap-3 justify-end">
          <Button @click="handleClose" variant="secondary">Batal</Button>
          <Button type="submit">Tambah</Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Button from '@/components/elements/Button.vue'

export default {
  name: 'ModalAdd',
  components: {
    Button
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data() {
    return {
      name: '',
      expense: 0
    }
  },
  emits: ['close'],
  methods: {
    clearForm() {
      this.name = '';
      this.expense = 0;
    },
    handleSubmit() {
      this.$store.commit('addExpense', {
        name: this.name,
        expense: this.expense
      });

      this.$emit('close');
      this.clearForm();
    },
    handleClose() {
      this.$emit('close');
      this.clearForm();
    }
  }
}
</script>
