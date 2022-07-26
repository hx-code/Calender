import {
  getDateInfo
} from './utils';

import {
  update
} from './render';

export default () => {
  const dateInfo = {};
  const _dateInfo = getDateInfo();

  Object.defineProperties(dateInfo, {
    year: {
      get () {
        return _dateInfo[0];
      },
      set (newValue) {
        _dateInfo[0] = newValue;
        update(_dateInfo[0], _dateInfo[1]);
      }
    },
    month: {
      get () {
        return _dateInfo[1];
      },
      set (newValue) {
        _dateInfo[1] = newValue;
        update(_dateInfo[0], _dateInfo[1]);
      }
    }
  });

  return dateInfo;
}