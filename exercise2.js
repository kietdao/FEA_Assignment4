// Viết function tìm ra phần tử xuất hiện không phải nhiều nhất cũng không phải ít nhất trong mảng
// Ex: [1,2,3,1,2,1,1] => return [2]
// Ex: [1,2,3,1,2, 7, 7, 1,1, 4,5] => return [2, 7]
const elements = [1,2,3,1,2,1,1]

function countTimesElementsAppear(arr) {
    return arr.map((item) => {
        return arr.filter((value) => {
            return item === value;
        }).length
    })
}

function findMiddleAppearanceElements(arr, countFunction) {
    const counter = countFunction
    const itemObj = arr.reduce((acc, curr, ind) => {
           return acc[curr] = counter[ind], acc
    }, {})

    const countMaxValue = Math.max(...Object.values(itemObj))
    const countMinValue = 1
    const result = []
    const keysObj = Object.keys(itemObj)

    for(let key in itemObj) {
        if(countMinValue < itemObj[key] && itemObj[key] < countMaxValue) {
            result.push(Number(key))
        }
    }

    return result
}


console.log(findMiddleAppearanceElements(elements, countTimesElementsAppear(elements)))