<!-- Создайте компонент "Список пользователей" (UserList), 
который будет отображать список пользователей из переданного массива. 
Каждый пользователь должен быть представлен в виде отдельного компонента "Пользователь" (User), 
принимающего пропсы с данными о 
пользователе (например, имя, фамилия и электронная почта). -->

<template>
  <div>
    <div>имя:{{ user.firstName }}</div>
    <div>фамилия:{{ user.lastName }}</div>
    <div>почта:{{ user.email }}</div>
    <button @click="showInfo = !showInfo">Hello</button>
    <input v-if="showInfo" v-model="description" @input="updateDescription">
    <div>{{ user.description }}</div>
    <br><br><br>
  </div>
</template>

<script>
export default {
  name: 'UserComp',
  data() {
    return {
      showInfo: false,
      description: ""
    }
  },
  props: ['user'],
  created: function () {
    this.description = this.user.description
  },
  methods: {
    updateDescription() {
      const updateData = {
        id: this.user.id,
        description: this.description
      }
      this.$emit("updateDescription", updateData)
    }
  }
}
</script>


<style scoped></style>
