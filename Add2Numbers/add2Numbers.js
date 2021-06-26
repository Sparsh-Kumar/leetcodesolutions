

class Node {

    constructor (cargo = undefined, next = undefined) {
        this.cargo = cargo;
        this.next = next;
    }

}

const addTwoNumbers = (l1, l2) => {
    let node = undefined;
    let carry = 0;
    if (!l1 || !l2) {
        return;
    } else {
        while (l1 || l2 || carry) {
            let firstCargo = l1 ? l1.cargo : 0;
            let secondCargo = l2 ? l2.cargo : 0;
            let total = firstCargo + secondCargo + carry;
            carry = 0;
            let node_elem = undefined;
            if (total >= 10) {
                node_elem = total - 10;
                carry++;
            } else {
                node_elem = total;
            }
            let new_node = new Node (node_elem);
            if (!node) {
                node = new_node;
            } else {
                let start = node;
                while (start.next) {
                    start = start.next;
                }
                start.next = new_node;
            }

            l1 = l1 && l1.next ? l1.next: 0;
            l2 = l2 && l2.next ? l2.next: 0;    
        }
    }
    return node;
}

const displayList = (listHead) => {
    while (listHead) {
        console.log (listHead.cargo);
        listHead = listHead.next;
    }
}

const main = () => {
    
    let n1 = new Node (9);
    let n2 = new Node (9);
    let n3 = new Node (9);
    let n4 = new Node (9);
    let n5 = new Node (9);
    let n6 = new Node (9);
    let n7 = new Node (9);

    n1.next = n2;
    n2.next = n3;
    n3.next = n4;
    n4.next = n5;
    n5.next = n6;
    n6.next = n7;

    let n8 = new Node (9);
    let n9 = new Node (9);
    let n10 = new Node (9);
    let n11 = new Node (9);

    n8.next = n9;
    n9.next = n10;
    n10.next = n11;

    // displayList (n1);
    // displayList (n4);

    let node = addTwoNumbers (n1, n8);
    displayList (node);

}

main ()
