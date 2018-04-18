import { FETCH_CUSTOMERS } from '../constants'
import { createAction } from 'redux-actions'

const customers = [
  {
    'dni': '27777',
    'name': 'Rafaela Pérez',
    'age': 37
  },
  {
    'dni': '3333',
    'name': 'Carlos Pérez',
    'age': 37
  },
  {
    'dni': '4444',
    'name': 'María Pérez',
    'age': 37
  }
]

// export const fetchCustomers = () => ({ type: FETCH_CUSTOMERS, payload: null })

// createAction recibe el type y el payloadCreator como parámetros
export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers)