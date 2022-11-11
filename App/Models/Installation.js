export default class Installation {
    constructor(type, size, cost) {
        this.type = type;
        this.size = size;
        this.cost = cost;
    }

    static genId() {
        return "ins-" + Math.floor(Math.random() * 999999999);
    }
}
