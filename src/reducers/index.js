// @flow

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import auth from './auth';
import page from './page';

const app = combineReducers({
  auth,
  form,
  page,
});

export default app;
