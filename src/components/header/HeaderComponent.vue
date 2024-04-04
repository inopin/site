<template>
  <div class="wrapper">
    <MainPhotoView></MainPhotoView>
    <article-component :item="item"></article-component>
  </div>
</template>

<script setup>
  import MainPhotoView from '@/views/MainPhotoView.vue'
  import ArticleComponent from '@/components/article/ArticleComponent.vue'
  import store from '@/store'

  const item = store.state.about
  

</script>

<style lang="scss" scoped>
  @import 'style.scss'
</style>