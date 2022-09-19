<template>
  <div class="home">
    <div class="content">
      <!--      <router-view />-->
      <router-view v-slot="{ Component, route }">
        <transition :name="fade">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>

    <div class="footer">
      <router-link to="/home/hidden-list">隐患任务</router-link>
      <a>新建</a>
      <router-link to="/home/notice-list" class="">通知</router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
  .content {
    flex: 1;
  }
  .footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    background-color: #fff;
    border-top: 1px solid #eee;
    a {
      color: #333;
    }
  }
}
</style>
