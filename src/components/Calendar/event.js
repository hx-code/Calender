let target = null;

export default (container, handler, dateInfo) => {
  container.addEventListener('click', handleClick.bind(null, handler, dateInfo), false);
}

function handleClick (...args) {
  const [ handler, dateInfo, e ] = args;
  const tar = e.target;
  const className = tar.className;

  if (className.includes('current-day')) {
    dateClick(tar, handler);
    return;
  }

  controlClick(className, dateInfo);
}

function dateClick (tar, handler) {
  if (target) {
    target.className = target.className.replace(' selected', '');
  }
  target = tar;
  tar.className += ' selected';
  handler && handler(tar.dataset.date);
}

function controlClick (className, dateInfo) {
  switch (className) {
    case 'control-btn btn-year-lt':
      dateInfo.year-= 1;
      break;
    case 'control-btn btn-month-lt':
      dateInfo.month -= 1;
      break;
    case 'control-btn btn-year-gt':
      dateInfo.year += 1;
      break;
    case 'control-btn btn-month-gt':
      dateInfo.month += 1;
      break;
    default:
      break;
  }
}