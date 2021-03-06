/*
 *
 * YourRole reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  yourRoles:[
    {
      role: 'General Labour',
      address: '3502, Barry Chicago ld',
      date: 'Oct 21',
      startTime: '5pm',
      endTime: '6pm',
    },    
    {
      role: 'Carpenter II',
      address: '233, street 33, Auston',
      date: 'Feb 2',
      startTime: '2am',
      endTime: '4am',
    },

  ]
});

function yourRoleReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default yourRoleReducer;
