import { defineStore } from "pinia";
import { reactive, ref } from "vue";
let id = 1;
const generateId = () => id++;
export type Item = {
  id: number;
  context: string;
};

// UI 与 逻辑 分离
// 再也不用 vuex 的状态管理模式了
// vue3 !!!
export const useTodoStore = defineStore("todo", () => {
  let val = ref("");
  const items = reactive<Item[]>([]);
  const addItem = () => {
    if (!val.value) return;
    items.push({
      id: generateId(),
      context: val.value,
    });
    val.value = "";
  };
  return {
    addItem,
    val,
    items,
  };
});
