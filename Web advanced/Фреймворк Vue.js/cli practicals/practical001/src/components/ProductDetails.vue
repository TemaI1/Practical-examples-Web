<template>
  <div>
    <p>Название: {{ product.name }}</p>
    <p>Цена: {{ formattedPrice }}</p>
    <p v-if="product.available">Доступность: Available</p>
    <p v-else-if="!product.available">Доступность: Out of stock</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: "футболка",
        price: 99,
        available: true,
      },
    }
  },
  computed: {
    formattedPrice: function () {
      return this.product.price + "$"
    }
  }
}
</script>

<style scoped></style>
