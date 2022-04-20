// Viết function tìm ra phần tử xuất hiện nhiều nhất trong mảng
// Ex: [1,2,3,1,2,1,1] => return [1]
// Ex: [1,2,3,1,2,1,1, 2, 2] => return [1, 2]

const elements = [1,2,3,1,2,1,1, 2, 2]

function countTimesElementsAppear(arr) {
    return arr.map((item) => {
        return arr.filter((value) => {
            return item === value;
        }).length
    })
}

function findMostAppearanceElements(arr, countFunction) {
    const counter = countFunction
    const itemObj = arr.reduce((acc, curr, ind) => {
           return acc[curr] = counter[ind], acc
    }, {})

    const countMaxValue = Math.max(...Object.values(itemObj))
    const result = []
    const keysObj = Object.keys(itemObj)

    for(let key in itemObj) {
        if(itemObj[key] === countMaxValue) {
            result.push(Number(key))
        }
    }

    return result
}


console.log(findMostAppearanceElements(elements, countTimesElementsAppear(elements)))

