const callbackFindWin = function(element, index, record) {
  return (element.result === 'W') // || record[-1].result === 'N/A')
}

function superbowlWin(record) {
  let firstWin
  firstWin = record.find(callbackFindWin)
  return (firstWin.result === 'W') ? firstWin.year : firstWin.result
}


