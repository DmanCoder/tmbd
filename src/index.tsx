import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

// Translations
import i18n from './i18n/i18n';

// Redux Store
import store from './redux/store/store';

// Component
import App from './components/app/app';

// Other
import reportWebVitals from './reportWebVitals';

// Styles
import './styles/main.scss';

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <App />
    </Provider>
  </I18nextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
