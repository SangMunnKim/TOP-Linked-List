import { node } from './node.js';

class linkedList {

    constructor() {
        this.head = null;
    }

    append(value) {
        if (this.head === null) {
            this.prepend(value);
        } else {
            let tmp = this.head;

            while(tmp.getNextNode() != null) {
                tmp = tmp.getNextNode();
            }
            const newNode = new node(value)
            tmp.setNextNode(newNode);
        }
    }

    prepend(value) {
        const newNode = new node(value);
        newNode.setNextNode(this.head);
        this.head = newNode;
    }

    size() {
        let count = 0;
        let tmp = this.head;

        while(tmp !== null) {
            count++;
            tmp = tmp.getNextNode();
        }
        return count;
    }

    listHead() {
        return this.head;
    }

    tail() {
        let tmp = this.head;
        while(tmp.getNextNode() != null) {
            tmp = tmp.getNextNode();
        }
        return tmp;
    }

    at(index){

        if (index >= this.size()) {
            return null;
        }

        let tmp = this.head;

        for (let i = 0; i < index; i++) {
            tmp = tmp.getNextNode();
        }

        return tmp;
    }

    pop() {
        if (this.head === null) return null; //empty list

        if (this.head.getNextNode() === null) this.head = null; //single-node list

        let tmp = this.head;
        while (tmp.getNextNode().getNextNode() !== null) {
            tmp = tmp.getNextNode();
        }
        tmp.setNextNode(null);
    }

    contains(value) {
        let tmp = this.head;

        while(tmp != null) {
            if (tmp.getValue() === value) {
                return true;
            }
            else {
                tmp = tmp.getNextNode();
            }
        }

        return false;
    }

    find(value) {
        let tmp = this.head;
        let index = 0;

        while(tmp != null) {
            if (tmp.getValue() === value) {
                return index;
            }
            tmp = tmp.getNextNode();
            index++;
        }

        return null;
    }

    toString() {
        let string = ''
        let tmp = this.head;
        while(tmp != null) {
            string += `( ${tmp.getValue()} ) -> `;
            tmp = tmp.getNextNode();
        }
        string += `null`

        return string;
    }
}

export { linkedList };