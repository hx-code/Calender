import { WEEK_DAYS } from './config';
import { 
  getLastMonthRestDays, 
  getMonthDayCount, 
  getNextMonthRestDays,
  getDateInfo,
  getFormatDate
} from './utils';

export function createWeekDaysNode () {
  const oTr = document.createElement('tr');
  oTr.className = 'week-day';

  oTr.innerHTML = WEEK_DAYS.map(item => (
    `<th>${ item }</th>`
  )).join('');

  return oTr;
}

export function createDateNode (year, month) {
  const lastMonthRestDays = getLastMonthRestDays(year, month);
  const currentMonthDayCount = getMonthDayCount(year, month);
  const nextMonthRestDays = getNextMonthRestDays(year, month);
  const dateTrArr = createDateTrs(6);

  const lastMonthRestDaysTD = createRestDaysTD(lastMonthRestDays);
  const currentMonthDaysTD = createCurrentDaysTD(currentMonthDayCount, year, month);
  const nextMonthRestDaysTD = createRestDaysTD(nextMonthRestDays);

  const tdArr = [
    ...lastMonthRestDaysTD,
    ...currentMonthDaysTD,
    ...nextMonthRestDaysTD
  ];

  let index = 0;

  dateTrArr.forEach(tr => {
    for (var i = 0; i < 7; i ++) {
      tr.appendChild(tdArr[index]);
      index ++;
    }
  });

  return dateTrArr;
}

export function createDateTrs (count) {
  const trArr = [];

  for (var i = 0; i < count; i ++) {
    const oTr = document.createElement('tr');
    trArr.push(oTr);
  }

  return trArr;
}

function createRestDaysTD (restDays) {
  return restDays.map(item => {
    const oTd = document.createElement('td');
    oTd.className = 'day rest-day';
    oTd.innerText = item;

    return oTd;
  })
}

function createCurrentDaysTD (currentDayCount, year, month) {
  let tdArr = [];

  const [
    currentYear,
    currentMonth,
    currentDate
  ] = getDateInfo();

  for (let i = 1; i <= currentDayCount; i ++) {
    const oTd = document.createElement('td');

    if (currentYear === year && currentMonth === month && currentDate === i) {
      oTd.className = 'day current-day current';
    } else {
      oTd.className = 'day current-day';
    }

    oTd.innerText = i;
    oTd.setAttribute('data-date', getFormatDate(year, month, i));
    tdArr.push(oTd);
  }

  return tdArr;
}

export function createControlArea (year, month) {
  const oArea = document.createElement('div');
  oArea.className = 'control-area';

  oArea.innerHTML = `
    <span class="control-btn btn-year-lt">&lt;&lt;</span>
    <span class="control-btn btn-month-lt">&lt;</span>
    <span class="control-show">
      <span class="control-title">
        <span class="title-year">${ year }</span>年
      </span>
      <span class="control-title">
        <span class="title-month">${ month }</span>月
      </span>
    </span>
    <span class="control-btn btn-month-gt">&gt;</span>
    <span class="control-btn btn-year-gt">&gt;&gt;</span>
  `;

  return oArea;
}