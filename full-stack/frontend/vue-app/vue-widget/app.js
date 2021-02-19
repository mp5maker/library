const app = Vue.createApp({
  data() {
    return {
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 50,
      showBooks: true,
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    hideShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount("#app");
