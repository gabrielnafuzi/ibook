<template>
  <BookDetailsTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
  async asyncData({ params }) {
    await books.show({ id: Number(params.bookId) })
  }
})
</script>

<style lang="scss" scoped></style>
