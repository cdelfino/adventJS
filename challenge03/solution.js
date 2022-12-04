function distributeGifts(packOfGifts, reindeers) {
  let accReindeers = 0
  let accSanta = 0
    packOfGifts.forEach((gift)=>{
      santaMaxWeight = gift.length
      accSanta = accSanta + santaMaxWeight
    })
    reindeers.forEach((reindeer)=>{
        reindeerMaxWeight = (reindeer.length * 2)
        accReindeers = accReindeers + reindeerMaxWeight
    })
    return Math.floor(accReindeers/accSanta)
  }
