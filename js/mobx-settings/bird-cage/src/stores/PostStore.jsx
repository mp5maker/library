import { configure, action, observable, decorate, runInAction, flow } from 'mobx'

// import { asyncAction } from 'mobx-utils' // version 3
/* Flow cannot be used as decorator */

configure({
    enforceActions: 'observed'
})

class PostStore {
    postData =  []

    loadPosts = () => {
        return fetch('https://heroku-fake-rest-api.herokuapp.com/posts')
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log(responseJSON)
                this.setPosts(responseJSON)
            })
    }

    setPosts = (responseJSON) => {
        return this.postData = responseJSON
    }


    loadPostsInline = () => {
        fetch('https://heroku-fake-rest-api.herokuapp.com/posts')
            .then((response) => { return response.json() })
            .then((responseJSON) => {
                console.log(responseJSON)
                return runInAction(() => this.postData = responseJSON)
            })
    }

    loadPostsAsync = async () => {
        const response = await fetch('https://heroku-fake-rest-api.herokuapp.com/posts')
        const responseJSON = await response.json()
        console.log(responseJSON)
        return runInAction(() => this.postData = responseJSON)
    }

    loadPostsGenerator = flow(function* () {
        const response = yield fetch('https://heroku-fake-rest-api.herokuapp.com/posts')
        const responseJSON = yield response.json()
        console.log(responseJSON)
        return this.postData = responseJSON;
    })
}

decorate(PostStore, {
    postData: observable,
    setPosts: action,
    loadPostsInline: action,
    loadPostsAsync: action,
    loadPostsGenerator: action,
})

export default new PostStore()