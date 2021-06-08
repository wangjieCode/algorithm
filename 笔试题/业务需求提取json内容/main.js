const { writeFileSync } = require('fs')

const flatObj = (data, result = [], prevShow = '', keyName = 'id') => {
    if (data instanceof Object === false) return;
    for (const key in data) {
        let path = prevShow;
        const ele = data[key];
        const attr = ele.Attributes;
        if (!(attr instanceof Object)) continue
        const id = attr[keyName]
        if (id && id < 8000) {
            result.push({
                name: id,
                nickName: path + attr.show
            })
            path += attr.show + '_';
        }
        if (key !== "Attributes") flatObj(data[key], result, path)
    }
}

/**
 * @param {*} fileName 
 * @param {*} targetFileName 
 * @returns 
 */
const dataTransfromToFile = (fileName, targetFileName) => {
    const data = require(fileName)
    const res = []
    flatObj(data, res)
    console.log(res)
    writeFileSync(targetFileName, JSON.stringify(res))
}

dataTransfromToFile('./params.json', "./test.json")