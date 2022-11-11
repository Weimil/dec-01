export default class Company {
    constructor(name, manager) {
        this.name = name;
        this.manager = manager;
    }

    static genId() {
        return "com-" + Math.floor(Math.random() * 999999999);
    }
}
