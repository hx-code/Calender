export function getFirstWeekDay (year, month) { // 7
  const date = new Date(year, month - 1, 1);
  return date.getDay();
}

export function getMonthDayCount (year, month) {
  const date = new Date(year, month, 0);
  return date.getDate();
}

export function getLastMonthRestDays (year, month) {
  const days = getFirstWeekDay(year, month);
  let lastDate = getMonthDayCount(year, month - 1);
  const restDays = [];

  while (restDays.length < days) {
    restDays.push(lastDate --);
  }

  return restDays.reverse();
}

export function getNextMonthRestDays (year, month) {
  const lastMonthRestDayCount = getFirstWeekDay(year, month);
  const currentMonthDayCount = getMonthDayCount(year, month);
  const nextMonthRestDayCount = 42 - (lastMonthRestDayCount + currentMonthDayCount);
  let restDays = [];

  for (let i = 1; i <= nextMonthRestDayCount; i ++) {
    restDays.push(i);
  }

  return restDays;
}

export function getDateInfo (timeStamp) {
  var date = timeStamp ? new Date(timeStamp) : new Date();

  return [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate()
  ]
}

export function getFormatDate (year, month, date) {
  const dateArr = [ year, month, date ];

  for (let i = 1; i < dateArr.length; i ++) {
    dateArr[i] < 10 && (dateArr[i] = '0' + dateArr[i]);
  }

  return dateArr.join('-');
}