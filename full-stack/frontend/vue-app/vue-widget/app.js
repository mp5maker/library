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
          id: 1,
          title: "Harry Potter",
          author: "J.K Rowling",
          img: "assets/book-1.jpg",
          isFav: false,
        },
        {
          id: 2,
          title: "The way of kings",
          author: "John Doe",
          img: "assets/book-2.jpg",
          isFav: true,
        },
      ],
      url: "https://google.com",
      search: "",
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
    makeItFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => {
        const bookTitle = book.title.toLowerCase();
        const bookAuthor = book.author.toLowerCase();
        const searchString = this.search.toLowerCase().trim();

        if (searchString == "") return true;
        if (
          bookTitle.indexOf(searchString) > -1 ||
          bookAuthor.indexOf(searchString) > -1
        ) {
          return true;
        }
        return false;
      });
    },
  },
});

app.mount("#app");
