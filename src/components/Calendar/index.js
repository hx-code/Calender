import {
  getDateInfo
} from './utils';

import { 
  render,
  update 
} from './render';

import reactive from './reactive';

import './index.scss';
import event from './event';

export default (handler) => {

  const oContainer = document.createElement('div');
  const dateInfo = reactive();
  oContainer.className = 'my-calendar';
  
  event(oContainer, handler, dateInfo);

  return {
    render: render(oContainer),
    update,
    getDateInfo
  }
}