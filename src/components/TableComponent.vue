<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { HEADER_HEIGHT } from '../utils/consts';

const { smAndDown: IsMobile } = useDisplay();
const { tableData, theme } = defineProps(['tableData', 'theme']);
</script>

<template>
  <main>
    <v-table fixed-header :height="`calc(100vh - ${HEADER_HEIGHT})`">
      <thead>
        <tr>
          <th>Price</th>
          <th v-if="!IsMobile">Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData" :key="index">
          <td :class="'table__price-section-' + theme">{{ item[0] }}</td>
          <td v-if="!IsMobile">{{ item[1] }}</td>
          <td>{{ item[0] * item[1] }}</td>
        </tr>
      </tbody>
    </v-table>
  </main>
</template>

<style scoped>
.table__price-section-red {
  color: red;
}

.table__price-section-green {
  color: green;
}
</style>
