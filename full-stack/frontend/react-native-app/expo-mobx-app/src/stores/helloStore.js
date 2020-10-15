import { action, observable } from 'mobx'

class ObservableStore {
    @observable property = "";

    @action setProperty(newProperty) {
        this.property = newProperty
    }
}

const observableStore = new ObservableStore();
export default observableStore;