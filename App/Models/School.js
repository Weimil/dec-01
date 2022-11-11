export default class School {
    constructor(name, city, manager){
        this.name = name;
        this.city = city;
        this.manager = manager;
        this.instalation = null;
        this.mantainer = null;
    }

    static genId() {
        return "sch-" + Math.floor(Math.random() * 999999999);
    }
}
