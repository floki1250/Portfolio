<template>
  <div class="main">
    <div class="head"></div>
    <div class="body"></div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Background",
});
</script>
<style lang="scss" scoped>
.desktop {
  background-color: rgba(0, 0, 0, 0.185);
}
@mixin dots($count) {
  $text-shadow: ();
  @for $i from 0 through $count {
    $text-shadow: $text-shadow,
      (-0.5+ (random()) * 3) +
        em
        (-0.5+ (random()) * 3) +
        em
        7px
        hsla(random() * 360, 100%, 50%, 0.9);
  }
  text-shadow: $text-shadow;
}

.main {
  font: 5vmin/1.3 Serif;
  overflow: hidden;
  background: red;
}

.body,
.head {
  display: block;
  font-size: 52px;
  color: rgba($color: #e41111, $alpha: 1);
}

.head::before,
.head::after,
.body::before,
.body::after {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 3em;
  height: 3em;
  content: ".";
  mix-blend-mode: screen;
  animation: 44s -27s move infinite ease-in-out alternate;
}

.body::before {
  @include dots(40);
  animation-duration: 44s;
  animation-delay: -27s;
}

.body::after {
  @include dots(40);
  animation-duration: 43s;
  animation-delay: -32s;
}

.head::before {
  @include dots(40);
  animation-duration: 42s;
  animation-delay: -23s;
}

.head::after {
  @include dots(40);
  animation-duration: 41s;
  animation-delay: -19s;
}

div:first-line {
  font-size: 300%;
  font-style: italic;
  letter-spacing: 0;
  color: rgb(221, 0, 0);
}

@keyframes move {
  from {
    transform: rotate(0deg) scale(12) translateX(-20px);
  }
  to {
    transform: rotate(360deg) scale(18) translateX(20px);
  }
}
</style>
