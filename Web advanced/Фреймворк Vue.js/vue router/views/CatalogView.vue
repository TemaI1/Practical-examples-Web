<template>
  <div>
    <div v-for="product in productPage" :key="product.id">
      {{ product }}
    </div>
    <router-link v-for="page in totalPages" :key="`p${page}`" :to="`/catalog/${page}`">{{ page }} | </router-link>
  </div>
</template>

<script>
export default {
  name: 'CatalogView',

  data () {
    return {
      perPage: 6,
      products: [
        {
          id: 1,
          name: 'товар 1',
          price: 100
        },
        {
          id: 2,
          name: 'товар 2',
          price: 100
        },
        {
          id: 3,
          name: 'товар 3',
          price: 100
        },
        {
          id: 4,
          name: 'товар 4',
          price: 100
        },
        {
          id: 5,
          name: 'товар 5',
          price: 100
        },
        {
          id: 6,
          name: 'товар 6',
          price: 100
        },
        {
          id: 7,
          name: 'товар 7',
          price: 100
        },
        {
          id: 8,
          name: 'товар 8',
          price: 100
        },
        {
          id: 9,
          name: 'товар 9',
          price: 100
        },
        {
          id: 10,
          name: 'товар 10',
          price: 100
        },
        {
          id: 11,
          name: 'товар 11',
          price: 100
        },
        {
          id: 12,
          name: 'товар 12',
          price: 100
        },
        {
          id: 13,
          name: 'товар 13',
          price: 100
        },
        {
          id: 14,
          name: 'товар 14',
          price: 100
        },
        {
          id: 15,
          name: 'товар 15',
          price: 100
        }
      ]
    }
  },

  mounted () {

  },

  methods: {

  },
  computed: {
    totalPages () {
      return Math.ceil(this.products.length / this.perPage)
    },
    currentPage () {
      return this.$route.params.page || 1
    },
    productPage () {
      const pageNumber = this.currentPage
      const startIndex = (pageNumber - 1) * this.perPage
      const endIndex = startIndex + this.perPage
      return this.products.slice(startIndex, endIndex)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
