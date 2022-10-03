<template>
  <div id="links">
    <ul class="mb-10">
      <li><router-link to="/manage/start">Start</router-link></li>
      <li><router-link to="/manage/treasury">Treasury</router-link></li>
      <li><router-link to="/manage/proposals">Proposals</router-link></li>
    </ul>
    <ul class="mb-10">
      <li><router-link to="/manage/profile">Profile</router-link></li>
      <li><router-link to="/manage/members">Members</router-link></li>
    </ul>
  </div>
</template>
<style scoped>
#links a {
  @apply opacity-50;
}
#links a.router-link-active {
  @apply opacity-100 relative;
}
</style>
