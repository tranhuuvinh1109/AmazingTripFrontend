import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/GlobalStyles';
import { AuthProvider } from './context/AuthProvider';
import { CreateNewGroupProvider } from './pages/BlogAddress/CreateNewGroupContext';
import { AuthFireBaseContextProvider } from './context/AuthFireBaseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthFireBaseContextProvider>
      <CreateNewGroupProvider>
        <AuthProvider>
          <GlobalStyles>
            <App />
          </GlobalStyles>
        </AuthProvider>
      </CreateNewGroupProvider>
    </AuthFireBaseContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
