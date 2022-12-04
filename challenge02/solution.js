function countHours(year, holidays) {
    extraHours = 0
    holidays.forEach((holiday) => {
        let date = new Date(`${year}/${holiday}`).getDay()
        if ((date > 0) && (date < 6)){
            extraHours++;
        }
    })
      return extraHours*2
  }
  
