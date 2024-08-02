import { linkedList } from "./linked-list.js";

// example uses class syntax - adjust as necessary
const list = new linkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(`
    ---size()---
    ${list.size()}
    ---head()---
    ${list.listHead().getValue()}
    ---tail()---
    ${list.tail().getValue()}
    ---at(0)---
    ${list.at(0).getValue()}
    ---at(10)---
    ${list.at(10)}
    ---pop()---
    
    ---contains('snake')---
    ${list.contains('snake')}
    ---contains('apple')---
    ${list.contains('apple')}
    ---find('dog')---
    ${list.find('dog')}
    ---find('apple')---
    ${list.find('apple')}
    ---toString()---
    ${list.toString()}
    `)

