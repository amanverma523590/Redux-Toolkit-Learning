import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { store } from './Redux/store.js';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
