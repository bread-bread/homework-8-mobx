import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './components/AppRouter';
import { Provider } from '../node_modules/mobx-react/dist/mobx-react';
import { BrowserRouter } from 'react-router-dom';
import CatalogStore from './store';
import { configure } from '../node_modules/mobx/lib/mobx';

const store = new CatalogStore();

configure({ enforceActions: 'observed' });

ReactDOM.render(
    <BrowserRouter>
        <Provider appStore={store}>
            <AppRouter />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);