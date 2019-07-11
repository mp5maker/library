import { observable, action, computed } from 'mobx'

class BirdStore {
    @observable birds = []

    @action addBird = (bird) => {
        this.birds.push(bird)
    }

    @computed get birdCount() {
        return this.birds.length
    }

}

/* Only one instance of the birdstore, we do not want many copies of the same store */
const store = new BirdStore();
export default store