
/*
create a "sorting" function
split the incomming string into an array of single characters
create 3 placeholder varibles to contain 's', 'm', 'l', respecively
run a loop through the split-array, writing 's', 'm', and 'l' into each of the placeholder variblies once when each unique character is found
take the placeholder arrays and join them together into a single string in order of 's', 'm', 'l'.
return the new sorted array.
*/

const sortSizes = (str) => {
    const splitStr = str.split('')
    let smallCount = []
    let mediumCount = []
    let largeCount = []
    let totalCount = []
    for (i = 0; i < splitStr.length; i++){
        if(splitStr[i] === 's'){
            smallCount.push('s')
        } else if (splitStr[i] === 'm'){
            mediumCount.push('m')
        } else if (splitStr[i] === 'l'){
            largeCount.push('l')
        }
    }
    // let allS = smallCount.join('')
    // let allM = mediumCount.join('')
    // let allL =largeCount.join('')
    // totalCount.push(allS)
    // totalCount.push(allM)
    // totalCount.push(allL)

    //Found a better way to do the above code!
    totalCount = smallCount.concat(mediumCount, largeCount)
    let finalTotal = totalCount.join('')
    return finalTotal
}

let sampleArr = "slsmsllsmmslllslmmmlls"
console.log(sortSizes(sampleArr))