<script setup lang="ts">
import { ref } from "vue";
interface INavProps {
  links: { title: string; link: string }[];
}
const props = defineProps<INavProps>();

const nav = ref([{ title: "Главная", link: "/" }, ...props.links]);
</script>

<template>
  <ul class="navigation">
    <li v-for="item in nav">
      <RouterLink :to="item.link">
        {{ item.title }}
      </RouterLink>
    </li>
  </ul>
</template>
