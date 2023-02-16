<script setup lang="ts">
import { useRoute } from "vue-router";
import { store } from "@/store";
import { computed, ComputedRef, onMounted } from "vue";
import { IProduct } from "@/types";
import Loader from "@/components/Loader.vue";
import Navigation from "@/components/Navigation.vue";

const route = useRoute();
onMounted(() => {
  store.dispatch("products/getProduct", route.params.id);
  window.scrollTo(0, 0);
});
const product: ComputedRef<IProduct | null> = computed(
  () => store.state.products.current
);
const loading = computed(() => store.state.products.loading);

const favorites = computed(() => store.state.favorites.all);
const isExistInFavorites = computed(() =>
  favorites.value.some((p) => p.id === product.value?.id)
);
const addFavorite = () => {
  if (!product.value) {
    return;
  }
  const { id, image, title, price } = product.value;
  store.dispatch("favorites/toggleFavoriteProduct", {
    id,
    image,
    title,
    price,
  });
};
</script>

<template>
  <div class="product_wrapper">
    <Loader v-if="loading" />
    <div v-else-if="product !== null">
      <Navigation
        :links="[{ title: product.title, link: `/products/${product.id}` }]"
      />
      <div class="product">
        <div class="product_image">
          <img :src="product.image" alt="photo" />
        </div>
        <div class="product_info">
          <h1 class="product_info_title">
            {{ product.title }}
          </h1>
          <p class="product_info_desc p1">{{ product.description }}</p>
          <div class="product_info_price">
            {{ Math.ceil(product.price * 74) }} руб.
          </div>
          <button class="btn" @click="addFavorite">
            <svg
                class="icon"
              :class="{ active: isExistInFavorites }"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.13926 3.19003C9.31923 3.49426 9.64644 3.68087 9.99991 3.68088C10.3534 3.68089 10.6806 3.49429 10.8606 3.19008C11.6462 1.86222 13.0338 1 14.599 1C16.9939 1 19 3.02817 19 5.61134C19 7.00965 18.4046 8.2522 17.4745 9.09515C17.4576 9.11043 17.4413 9.12627 17.4255 9.14266L9.99994 16.8579L2.57434 9.14266C2.55857 9.12628 2.54224 9.11043 2.52539 9.09516C1.59535 8.25224 1 7.00968 1 5.61134C1 3.028 3.00555 1 5.40032 1C6.96563 1 8.35385 1.86236 9.13926 3.19003Z"
                stroke="#0A1E32"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Избранное
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
