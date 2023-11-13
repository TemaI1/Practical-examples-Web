<!-- Создайте компонент "Список пользователей" (UserList), 
который будет отображать список пользователей из переданного массива. 
Каждый пользователь должен быть представлен в виде отдельного компонента "Пользователь" (User), 
принимающего пропсы с данными о 
пользователе (например, имя, фамилия и электронная почта). -->

<template>
  <div>
    <UserComp v-for="user in users" :key="user.id" :user="user" @updateDescription="updateDescription"></UserComp>
  </div>
</template>

<script>
import UserComp from './UserComp.vue'
export default {
  name: 'UserList',
  data() {
    return {
      users: [{ id: 1, firstName: 'Иван', lastName: 'Иванов', email: 'ivan@example.com', description: "Hello Ivan" },
      { id: 2, firstName: 'Петр', lastName: 'Петров', email: 'petr@example.com', description: "Hello Petr" },
      { id: 3, firstName: 'Анна', lastName: 'Сидорова', email: 'anna@example.com', description: "Hello Anna" }
      ]
    }
  },
  components: {
    UserComp
  },
  methods: {
    updateDescription(data) {
      const user = this.users.find(function (currentUser) {
        return currentUser.id === data.id
      })
      if (user) {
        user.description = data.description
      }
    }
  }
}
</script>


<style scoped></style>
