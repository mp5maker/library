const app = Vue.createApp({
  data() {
    return {
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 50,
      showBooks: true,
      x: 0,
      y: 0,
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    hideShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvents({ $event, type }) {
      console.log("🚀 ~ file: app.js ~ line 19 ~ handleEvents ~ event", $event);
      console.log("🚀 ~ file: app.js ~ line 21 ~ handleEvents ~ type", type);
    },
    handleMouseMove($event) {
      this.x = $event.offsetX;
      this.y = $event.offsetY;
    },
  },
});

app.mount("#app");
