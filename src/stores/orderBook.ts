import { ref } from 'vue';
import { defineStore } from 'pinia';
import { uniqBy } from 'lodash';
import { useSettingsStore } from './settings';

import { type IDepth } from '../utils/types';

export const useOrderBookStore = defineStore('orderBook', () => {
  const settingStore = useSettingsStore();
  const bids = ref<string[][]>([]);
  const asks = ref<string[][]>([]);
  const connectOrderBookCloseHandler = ref<() => void>();

  async function fetchAndConnectOrderBook() {
    await fetchOrderBook();
    connectOrderBookClose();
    connectOrderBookCloseHandler.value = connectOrderBook();
  }

  async function fetchOrderBook() {
    try {
      const { selectedPair, selectedLimit } = settingStore;

      const response = await fetch(
        `https://api.binance.com/api/v3/depth?symbol=${selectedPair}&limit=${selectedLimit}`,
      );
      const data = await response.json();

      asks.value = data.asks.sort(
        (a: string[], b: string[]) => parseFloat(b[0]) - parseFloat(a[0]),
      );
      bids.value = data.bids.sort(
        (a: string[], b: string[]) => parseFloat(b[0]) - parseFloat(a[0]),
      );
    } catch (error) {
      console.error('Failed to fetch orderBook', error);
    }
  }

  function connectOrderBook() {
    const { selectedLimit } = settingStore;

    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${settingStore.selectedPair.toLowerCase()}@depth`,
    );

    ws.onopen = () => {
      console.log('ws connected');
    };
    ws.onclose = () => {
      console.log('ws closed');
    };

    ws.onmessage = (event) => {
      const data: IDepth = JSON.parse(event.data);

      asks.value = uniqBy([...data.a, ...asks.value], (n: string[]) => n[0])
        .filter((n: string[]) => parseFloat(n[1]) !== 0)
        .sort(
          (a: string[], b: string[]) => parseFloat(a[0]) - parseFloat(b[0]),
        );
      bids.value = uniqBy([...data.b, ...bids.value], (n: string[]) => n[0])
        .filter((n: string[]) => parseFloat(n[1]) !== 0)
        .sort(
          (a: string[], b: string[]) => parseFloat(b[0]) - parseFloat(a[0]),
        );

      if (asks.value.length > selectedLimit) {
        asks.value = asks.value.slice(0, selectedLimit);
      }

      if (bids.value.length > selectedLimit) {
        bids.value = bids.value.slice(0, selectedLimit);
      }
    };

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }

  function connectOrderBookClose() {
    connectOrderBookCloseHandler.value && connectOrderBookCloseHandler.value();
  }

  return {
    bids,
    asks,
    fetchAndConnectOrderBook,
    fetchOrderBook,
    connectOrderBook,
    connectOrderBookClose,
  };
});
