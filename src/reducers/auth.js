// @flow

import { TYPES } from '../actions';

export default function (state = { user: {
  createdAt: '2017-06-29T23:25:24.219Z',
  updatedAt: '2017-06-29T23:25:24.219Z',
  userName: 'tester',
  email: 'test@test.com',
  firstname: 'Mickey',
  lastname: 'Mouse',
  locationPref: true,
  phoneNumbers: [
    {
      phoneNumber: '555-1212',
      phoneType: 'Direct',
    },
  ],
  addresses: [
    {
      locCity: 'San Francisco',
      locCountry: 'United States',
      locState: 'CA',
      locStreet: '1122 Main St.',
      locType: 'Home',
      locZip: '94105',
    },
  ],
} }, action) {
  switch (action.type) {
    case TYPES.AUTH_USER:
      return { ...state, error: '', authenticated: true };
    case TYPES.UNAUTH_USER:
      return { ...state, authenticated: false };
    case TYPES.AUTH_ERROR:
      return { ...state, error: action.payload };
    case TYPES.FETCH_DATA:
      return { ...state, message: action.payload };
    case TYPES.FETCH_JSON:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
