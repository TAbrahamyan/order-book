import { ref } from 'vue';
import { defineStore } from 'pinia';
import { Pairs, type HistoryType } from '../utils/types';
import { PAIRS, LIMITS } from '../utils/consts';

export const useSettingsStore = defineStore('settings', () => {
  const selectedPair = ref<Pairs>(PAIRS[0]);
  const selectedLimit = ref<number>(LIMITS[0]);
  const history = ref<HistoryType[]>([]);

  async function onChangePair(newValue: Pairs, oldValue: Pairs) {
    selectedPair.value = newValue;

    onChangeHistory(newValue, oldValue);
  }

  function onChangeLimit(newValue: number) {
    selectedLimit.value = newValue;
  }

  function onChangeHistory(newValue: Pairs, oldValue: Pairs) {
    history.value.push({
      id: Date.now(),
      toPair: newValue,
      fromPair: oldValue,
      lastUpdateTime: new Date(),
    });
  }

  return {
    selectedPair,
    selectedLimit,
    history,
    onChangePair,
    onChangeLimit,
    onChangeHistory,
  };
});
