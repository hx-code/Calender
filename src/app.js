import MyCalendar from './components/Calendar'

;(() => {
  const myCalendar = MyCalendar(handler);
  const oApp = document.querySelector('#app');

  const dateInfo = myCalendar.getDateInfo();

  const init = () => {
    render(...dateInfo);
  }

  function render (...args) {
    oApp.appendChild(myCalendar.render(...args));
  }

  function handler (date) {
    console.log(date);
  }

  init();
})();