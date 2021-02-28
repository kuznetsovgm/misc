var maxProfit = function (prices) {
    let profix = 0;  
    let localMin = prices[0], localMax = null;
 
    for (var i = 0; i < prices.length; i++) {
        if (!localMax && localMin >= prices[i]) {
            localMin = prices[i];
        } else {
            if (localMax < prices[i]) {
                localMax = prices[i];
            } else {
                profix += localMax - localMin;
                localMin = prices[i];
                localMax = null;
            }
        }
    }

    if (!!localMax) {
        profix += localMax - localMin;
    }
    return profix;
}  

// console.log(maxProfit([71,11,51,31,61,41]));
// console.log(maxProfit([13,24,35,46,57]));
// console.log(maxProfit([700,612,445,343,10]));

module.exports = maxProfit;