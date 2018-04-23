import { UPDATE_CUSTOMER } from '../constants'
import { createAction } from 'redux-actions'
import { apiPut } from '../api'
import { urlCustomers } from '../api/urls'

// export const fetchCustomers = () => ({ type: UPDATE_CUSTOMER, payload: null })

// createAction recibe el type y el payloadCreator como parámetros
export const updateCustomer = createAction(UPDATE_CUSTOMER, 
  (id, customer) => apiPut(urlCustomers, id, customer)())