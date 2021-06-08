/**
 * 查找链表最后一个元素
 * @param { ListNode } root 
 * @returns 
 */
export const findLinkEnd = (root) => {
    if (root.next == null) return root;
    return findLinkEnd(root.next)
}


/**
 * 通过类数组索引找到当前元素
 * @param {*} root 
 * @param {*} index 
 * @returns 
 */
export const findLinkItemByIndex = (root, index) => {
    let i = 0;
    while (root != null) {
        if (i == index) {
            return root
        }
        i++
        root = root.next
    }
    return null
}
/**
 * 遍历
 * @param {*} root 
 */
export const bianli = (root) => {
    while (root !== null) {
        console.log(root.val)
        root = root.next
    }
}
/**
 * 判断链表是否有换
 * @param {*} root 
 * @returns 
 */
export const isCircularLinkList = (root) => {
    let low = root;
    let quick = root;
    while(quick !== null ){
        if(quick == low) {
            return true
        }
        low = low.next
        quick = quick.next.next
    }
    return false
}

/** 迭代法
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function (l1, l2) {
    let res = new ListNode();
    let root = res
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            root.next = l1;
            l1 = l1.next;
        } else {
            root.next = l2
            l2 = l2.next;
        }
        root = root.next
    }
    if (l1 != null) {
        root.next = l1;
    }

    if (l2 != null) {
        root.next = l2;
    }
    return res.next
};

/**转化数组法
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists2 = function (l1, l2) {
    if (l1 == null && l2 == null) return l1
    const l1res = bianli(l1)
    const l2res = bianli(l2)
    const resData = [...l1res, ...l2res].sort((a, b) => a - b)
    let root = new ListNode(resData[0]);
    let res = root;
    for (let i = 1; i < resData.length; i++) {
        res.next = new ListNode(resData[i])
        res = res.next;
    }
    return root
};


/**递归
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists3 = function (l1, l2) {
    if (l1 == null) {
        return l2;
    } else if (l2 == null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};