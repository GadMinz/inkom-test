<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
import { computed, onMounted } from "vue";
import { store } from "@/store";
import Card from "@/components/Card.vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
const favorites = computed(() => store.state.favorites.all);
</script>

<template>
  <div class="favorites">
    <Navigation :links="[{ title: 'Избранное', link: `/favorites` }]" />
    <h1>Избранное</h1>
    <div v-if="favorites.length > 0" class="favorites_list">
      <RouterLink
        :to="'/products/' + item.id"
        v-for="item in favorites"
        :key="item.id"
      >
        <Card
          :id="item.id"
          :image="item.image"
          :title="item.title"
          :price="item.price"
        />
      </RouterLink>
    </div>
    <h2 class="favorites_notfound" v-else>
      В списке желаемых покупок нет товаров.
    </h2>
  </div>
</template>
