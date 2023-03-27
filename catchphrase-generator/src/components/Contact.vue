<template>
  <h1 class="font-effect-3d"> Contact </h1>
  <form action="https://formspree.io/f/xpzejvrw" method="POST">

    <label for="name">Your Name</label>
    <input type="text" id="name" name="firstname" placeholder="Your name.." required>

    <label for="email">Your Email</label>
    <input type="text" id="email" name="email" placeholder="Your email.." required>

    <label for="subject">Comments</label>
    <textarea id="subject" name="subject" placeholder="Your comments.." required></textarea>

    <input type="submit" value="Submit">

  </form>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>

</style>