<script setup lang="ts">
import Card from "@/components/Card.vue";
import { computed, ComputedRef, onMounted } from "vue";
import { store } from "@/store";
import { IProduct } from "@/types";
import Loader from "@/components/Loader.vue";

onMounted(() => {
  store.dispatch("products/getProducts");
});
const products: ComputedRef<IProduct[]> = computed(
  () => store.state.products.all
);
const loading = computed(() => store.state.products.loading);
</script>

<template>
  <div class="catalog">
    <Loader v-if="loading" />
    <RouterLink
      v-else
      :to="'/products/' + product.id"
      v-for="product in products"
      :key="product.id"
    >
      <Card
        :id="product.id"
        :image="product.image"
        :title="product.title"
        :price="product.price"
      />
    </RouterLink>
  </div>
</template>
