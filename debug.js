export function iplPointsTable(matches) {
  if (!Array.isArray(matches) || matches.length === 0) {
    return []
  }

  const pointsTable = []
  

  for (const e of matches) {
    const team1 = e.team1
    const team2 = e.team2
    const result = e.result
    const winner = e.winner

console.log(team1);




  }

  return pointsTable
}

