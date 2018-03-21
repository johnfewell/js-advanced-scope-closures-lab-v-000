function produceDrivingRange(blockRange){
  return function(startBlock, endBlock){
    let parseStart = parseInt(startBlock)
    let parseEnd = parseInt(endBlock)
    let blockSum = Math.abs(parseStart - parseEnd)
    if (blockSum > blockRange){
       return `${blockSum-blockRange} blocks out of range`
     } else {
       return `within range by ${blockRange-blockSum}`
     }
  }
}

function produceTipCalculator(tipPercent){
  return function(checkTotal){
    return checkTotal * tipPercent
  }
}
