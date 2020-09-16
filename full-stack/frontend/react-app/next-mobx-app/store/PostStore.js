import { observable, action } from "mobx";

class PostStore {
    @observable post = null;

    endpoint = "post";

    constructor(initialData = {}) {
        this.post = initialData.post;
    }

    async fetch(id) {
        const response = { id, title: 'Photon Khan'};
        this.setPost(response);
    }

    @action setPost(post) {
        this.post = post;
    }
}

export default PostStore;
