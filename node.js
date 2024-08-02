export class node {

    constructor(value) {
        this.value = value || null;
        this.nextNode = null;
    }

    getValue() {
        return this.value;
    }

    getNextNode() {
        return this.nextNode;
    }

    setValue(value) {
        this.value = value;
    }

    setNextNode(nextNode) {
        if (nextNode instanceof node) {
            this.nextNode = nextNode;
        }
    }
}