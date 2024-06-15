<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
import { storeToRefs } from 'pinia';
import { useOrderBookStore } from '../stores/orderBook';
import TableComponent from '../components/TableComponent.vue';

const orderBookStore = useOrderBookStore();
const { bids, asks } = storeToRefs(orderBookStore);

onMounted(() => {
  orderBookStore.fetchAndConnectOrderBook();

  setTimeout(() => {
    const asksTable = document.querySelector(
      '.order-book__asks-table .v-table__wrapper',
    );

    if (asksTable) {
      asksTable.scrollTop = asksTable.scrollHeight;
    }
  }, 1000);
});

onBeforeUnmount(() => {
  orderBookStore.connectOrderBookClose();
});
</script>

<template>
  <main class="order-book">
    <v-container style="padding: 0">
      <v-row no-gutters>
        <v-col cols="6">
          <TableComponent theme="red" :tableData="asks" />
        </v-col>
        <v-col cols="6">
          <TableComponent theme="green" :tableData="bids" />
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<style scoped></style>
