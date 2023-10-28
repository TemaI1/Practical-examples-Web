<template>
  <div id="app">
    <HeaderMenuComp />
    <HomePageComp />
    <BlogPageComp />
    <DetailsPageComp />
    <ProjectComp />
    <FooterComp />
  </div>
</template>

<script>
import HeaderMenuComp from './components/HeaderMenuComp.vue'

import HomePageComp from './components/HomePageComp.vue'
import BlogPageComp from './components/BlogPageComp.vue'
import DetailsPageComp from './components/DetailsPageComp.vue'
import ProjectComp from './components/ProjectComp.vue'

import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {
    HeaderMenuComp,
    HomePageComp,
    BlogPageComp,
    DetailsPageComp,
    ProjectComp,
    FooterComp
  }
}
</script>

<style>
@media(max-width: 1300px) {
  .header {
    margin-left: 10px;
    margin-right: 10px;
  }

  .show {
    margin-left: 20px;
    margin-right: 20px;
  }

  .blog_post {
    margin-left: 20px;
    margin-right: 20px;
  }

  .news {
    margin-left: 20px;
    margin-right: 20px;
  }
}

@media(max-width: 1100px) {
  .catalog_content_item_img {
    width: 400px;
  }

  .details_content {
    padding-left: 20px;
    padding-right: 20px;
    gap: 20px;
  }

  .details_content_left {
    width: 500px;
    gap: 10px;
  }
}

@media(max-width: 700px) {
  .header_left_title {
    font-size: 30px;
  }

  .header_left_img {
    width: 20px;
    height: 20px;
  }

  .header_right {
    gap: 10px;
  }

  .catalog {
    margin-left: 20px;
    margin-right: 20px;
  }

  .catalog_content_item_img {
    width: 330px;
  }

  .news {
    margin-left: 20px;
    margin-right: 20px;
  }

  .news_content_item_img {
    width: 300px;
  }

  .footer {
    margin-left: 20px;
    margin-right: 20px;
  }

  .blog_post_content_left_img {
    width: 300px;
    height: 300px;
  }

  .blog_post_content_right {
    max-width: 400px;
  }

  .blog_show_content_title {
    font-size: 30px;
  }

  .details_content {
    padding-left: 5px;
    padding-right: 5px;
    gap: 10px;
    flex-wrap: wrap-reverse;
    margin-top: 40px;
  }

  .details_content_left {
    width: 350px;
    gap: 5px;
  }

  .details_content_left_title {
    font-size: 30px;
  }
}
</style>
