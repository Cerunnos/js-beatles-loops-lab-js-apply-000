function theBeatlesPlay(musicians,instruments){
  let emptyArray1=[]
  for(let i=0;i<musicians.length;i++){
    emptyArray1.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return emptyArray1
}
function johnLennonFacts(facts){
  let alteredFacts=[]
  let i=0
  while(i<facts.length){
    alteredFacts.push(`${facts[i]}+!!!`)
  }
  return alteredFacts
}
