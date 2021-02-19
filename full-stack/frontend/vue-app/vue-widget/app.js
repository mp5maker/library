const app = Vue.createApp({
  data() {
    return {
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 50,
      showBooks: true,
      x: 0,
      y: 0,
      books: [
        {
          title: "Harry Potter",
          author: "J.K Rowling",
          img: "assets/book-1.jpg",
          isFav: false,
        },
        {
          title: "The way of kings",
          author: "John Doe",
          img: "assets/book-2.jpg",
          isFav: true,
        },
      ],
      url: "https://google.com",
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
