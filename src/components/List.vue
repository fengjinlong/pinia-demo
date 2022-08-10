<template>
  <li class="list-group-item">{{ item.context }}</li>
</template>
<script setup lang="ts">
import { Item } from "../stores";
defineProps<{ item: Item }>();
</script>

<style scoped></style>
