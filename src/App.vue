<template>
  <div class="row" style="margin-bottom: 30px">
    <input v-model="todoStore.val" class="form-control col" type="text" />
    <button class="btn btn-primary col" @click="todoStore.addItem">add</button>
    <div>{{ todoStore.val }}</div>
    <button @click="fun">fun</button>
  </div>

  <div>
    <ul class="list-group">
      <List v-for="item in todoStore.items" :key="item.id" :item="item" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import List from "./components/List.vue";

import { useTodoStore } from "./stores";

const todoStore = useTodoStore();

// 异步函数写法
const fun = async () => {
  let a = await todoStore.fun();
  console.log("async", a);
};

// 导出变量响应式丢失
// vue3 用toRefs 解决
// pinia 用 storeToRefs 解决
// import {storeToRefs} from 'pinia'
// const {a} = storeToRefs(todoStore)
</script>
<style scoped></style>
