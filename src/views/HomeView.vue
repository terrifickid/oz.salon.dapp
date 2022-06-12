<template>
  <div>
    <GlobalHeader />
    <div class="container-fluid mx-auto p-10">
      <div class="grid grid-cols-12">
        <div class="col-span-4">
          <ul>
            <li class="mb-2"><a href="/#/about">About Salon</a></li>
            <li class="mb-2"><a href="/#/collection">Collection</a></li>
            <li class="mb-2"><a href="/#/members">Members</a></li>
          </ul>
        </div>
        <div class="col-span-8">
          <h1 class="mb-4">Home</h1>
          <p class="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalHeader from "@/components/GlobalHeader.vue";
export default {
  name: "HomeView",
  components: { GlobalHeader },
};
</script>
