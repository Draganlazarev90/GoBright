import * as moment from 'moment';
export function timeframes(spaceAvailabilities, formValue) {
  let timeframes = []
  for (let i = 0; i < 4; i++) {
    let addedTime = moment(formValue.time).add(formValue.duration*i, 'minutes')
    timeframes.push({
      value: addedTime,
      disabled: true
    })
  }
  timeframes.forEach(time => {
    if(spaceAvailabilities) {
      spaceAvailabilities.forEach(spaceTime => { // check if timeframe is in available slots in space
        if(moment(time.value).add(formValue.duration, 'minutes').isSameOrBefore(spaceTime.till) && moment(time.value).isSameOrAfter(spaceTime.from)) time.disabled = false
      })
    }
    time.value = moment(time.value).format('HH:mm')
  })
  return timeframes;
}
