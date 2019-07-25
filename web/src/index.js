import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import List from './ui/list/cnt-list'
import configureStore from './store/configure-store'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.css'

const store = configureStore();

render(
  <Provider store={store}>
    <List/>
  </Provider>,
  document.getElementById('root')
);