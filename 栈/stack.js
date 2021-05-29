export const Stack = (function() {
    const items = new WeakMap();
    class Stack {
        constructor() {
            items.set(this, []);
        }
        getItems() {
            let s = items.get(this);
            return s;
        }
        push(element) {
            this.getItems().push(element);
        }
        pop() {
            return this.getItems().pop();
        }
        peek() {
            return this.getItems()[this.getItems.length - 1];
        }
        isEmpty() {
            return this.getItems().length == 0;
        }
        size() {
            return this.getItems().length;
        }
        clear() {
            this.getItems() = [];
        }
    }
    return Stack;
})();
