function EvalDecision (status, decision) {
  if (status === 'target' && decision === 'confirm') {
    return 1
  } else if (status === 'stop' && decision === 'reject') {
    return 1
  } else {
    return 0
  }
}

function AnalystsList (Allsignals, Alldecisions) {
  const list = []
  for (let i = 0; i < Object.keys(Alldecisions).length; i++) {
    // Finding the signal in Allsignals collection
    const signal = Allsignals.find(x => x.signal_number === Alldecisions[i].signal)

    // find if the desicion is true(1) or not(0)
    const Decision = EvalDecision(signal.status, Alldecisions[i].analyst_decision)

    // find if the analyst is already in the list
    if (list.find(x => x.analyst === Alldecisions[i].analyst) !== undefined) {
      const index = list.findIndex(x => x.analyst === Alldecisions[i].analyst)
      list[index].correct_decisions += Decision
      list[index].total_decisions += 1
    } else {
      list.push({ analyst: Alldecisions[i].analyst, correct_decisions: Decision, total_decisions: 1 })
    }
  }
  return list.sort((a, b) => { return b.correct_decisions - a.correct_decisions })
}

module.exports = AnalystsList
