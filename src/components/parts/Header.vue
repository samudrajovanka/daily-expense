<template>
  <header className="flex flex-col items-center">
    <h1 class="text-3xl text-center">Diari Jajan Februari 2021</h1>
    <p class="text-xl mb-3 text-center">Pengeluaran Bulan Ini {{ toCurrency(total) }}</p>

    <Button @click="openModal">Tambah Item</Button>

    <ModalAdd :isOpen="isOpenModal" @close="handleClose" />
  </header>
</template>

<script>
import Button from '@/components/elements/Button.vue'
import ModalAdd from '@/components/parts/ModalAdd.vue'
import { toCurrency } from '@/lib/common'

export default {
  name: 'Header',
  data() {
    return {
      isOpenModal: false
    }
  },
  components: {
    Button,
    ModalAdd
  },
  methods: {
    toCurrency,
    openModal() {
      this.isOpenModal = true;
    },
    handleClose() {
      this.isOpenModal = false;
    }
  },
  computed: {
    total() {
      return this.$store.getters.total;
    }
  }
}
</script>
