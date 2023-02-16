<script setup lang="ts">
import noPhoto from "@/assets/img/no-photo.svg";
const props = defineProps({
  id: { type: Number, required: true },
  image: { type: String, default: noPhoto },
  title: { type: String, required: true },
  price: { type: Number, required: true },
});
const isExistInFavorites = false;
</script>

<template>
  <div class="card">
    <span class="card_favorite">
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
    </span>
    <div class="card_image">
      <img :src="image" alt="photo" />
    </div>
    <div class="card_title p1">
      {{ title }}
    </div>
    <div class="card_price">{{ Math.ceil(price * 74) }} руб.</div>
  </div>
</template>
