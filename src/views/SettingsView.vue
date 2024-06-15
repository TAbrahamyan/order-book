<script setup>
import { watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useSettingsStore } from '../stores/settings';
import { PAIRS, LIMITS } from '../utils/consts';

const settingStore = useSettingsStore();
const { selectedPair, selectedLimit, history } = storeToRefs(settingStore);

watch(selectedLimit, (newValue) => settingStore.onChangeLimit(newValue));
watch(selectedPair, (newValue, oldValue) =>
  settingStore.onChangePair(newValue, oldValue),
);
</script>

<template>
  <div class="settings">
    <v-select label="Pair" v-model="selectedPair" :items="PAIRS" />
    <v-select label="Limit" v-model="selectedLimit" :items="LIMITS"></v-select>
    <h1>History</h1>
    <v-list lines="two">
      <v-list-item
        v-for="h in history"
        :key="h.id"
        :title="`${h.fromPair} -> ${h.toPair}`"
        :subtitle="`${new Intl.DateTimeFormat('default', {
          dateStyle: 'full',
          timeStyle: 'long',
        }).format(h.lastUpdateTime)}`"
        class="item"
      />
    </v-list>
  </div>
</template>

<style scoped>
.settings {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 32px;
  max-width: 800px;
  width: 100%;
}

.history-item {
  padding-inline: 0 !important;
}
</style>
