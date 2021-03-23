<template>
  <div class="about">
    <transition
      name="fade"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      appear
    >
      <h1 v-if="showTitle">About</h1>
    </transition>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam
      officia possimus delectus inventore quod quisquam culpa voluptas iusto,
      quae maiores quo dolorum, corporis laboriosam a dolore consequatur
      assumenda nam!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam
      officia possimus delectus inventore quod quisquam culpa voluptas iusto,
      quae maiores quo dolorum, corporis laboriosam a dolore consequatur
      assumenda nam!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam
      officia possimus delectus inventore quod quisquam culpa voluptas iusto,
      quae maiores quo dolorum, corporis laboriosam a dolore consequatur
      assumenda nam!
    </p>
  </div>
</template>

<script>
import { ref } from "vue";
import gsap from "gsap";

export default {
  setup() {
    const showTitle = ref(true);
    const beforeEnter = (el) => {
      console.log("beforeEnter");
      console.log(el);
      el.style.transform = "translateY(-60px)";
      el.style.opacity = 0;
    };
    const enter = (el, done) => {
      console.log(el);
      gsap.to(el, {
        duration: 3,
        y: 0,
        opacity: 1,
        ease: "bounce.out",
        onComplete: done
      });
    };
    const afterEnter = (el) => {
      console.log(el);
      // setTimeout(() => (showTitle.value = false), 2000);
    };

    const beforeLeave = (el) => {
      console.log(el);
    };
    const leave = (el) => {
      console.log(el);
    };
    const afterLeave = (el) => {
      console.log(el);
    };

    return {
      enter,
      beforeEnter,
      afterEnter,
      showTitle,
      beforeLeave,
      leave,
      afterLeave,
    };
  },
};
</script>

<style>
.about {
  max-width: 600px;
  margin: 20px auto;
}
/* .fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 3s ease;
}
.fade-leave-active {
  transition: opacity 3s ease;
} */
</style>