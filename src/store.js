import { observable } from "mobx";
import { action, runInAction } from "../node_modules/mobx/lib/mobx";
import { search, show } from "./api";

class CatalogStore {
    @observable show = {};

    @observable searchResult = [];

    @observable isLoading = false;

    @action
    searchSeries = (query) => {
        this.isLoading = true;

        search(query).then(result => {
            runInAction(() => {
                this.searchResult = result;
                this.isLoading = false;
            })
        })
    }

    @action
    getShow = (showId) => {
        this.isLoading = true;

        show(showId).then(result => {
            runInAction(() => {
                this.show = result;
                this.isLoading = false;
            })
        })
    }
}

export default CatalogStore;
