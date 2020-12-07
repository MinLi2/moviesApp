class PeopleStubAPI {
    constructor() {
        this.favoritePeoples = [];
    }

    add(people) {
        this.favoritePeoples.push(people);
    }

    getAll() {
        return this.favoritePeoples;
    }
}

export default new PeopleStubAPI();