import { handleActions } from 'redux-actions'
import { FETCH_CUSTOMERS } from '../constants';

// handleActions recibe las acciones y su estado inicial
export const customers = handleActions({
  [FETCH_CUSTOMERS]: (state, action) => [...action.payload]
}, [])