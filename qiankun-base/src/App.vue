<template>
  <div>
    <div class="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/vue">Vue应用</router-link> |
      <router-link to="/react">React应用</router-link>|
      <router-link to="/angular">angular应用</router-link>
    </div>
    <router-view></router-view>
    <div id="vue"></div>
    <div id="react"></div>
    <div id="angular"></div>
  </div>
</template>
