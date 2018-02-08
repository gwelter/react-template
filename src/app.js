import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/app-router';
import ConfigureStore from './store/configure-store';
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.scss';

const store = ConfigureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));