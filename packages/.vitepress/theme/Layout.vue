<!-- .vitepress/theme/MyLayout.vue -->
<script setup>
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-before>
      My custom sidebar top content
    </template>
  </Layout>
</template>
