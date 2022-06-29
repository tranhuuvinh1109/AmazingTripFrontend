import { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privateRoutes } from './router';
import { DefaultLayout } from './components/Layouts';
import userApi from './api/userApi';

function App() {
  // const [userList, setUserList] = useState([]);

  // useEffect(() => {
  //   const fectchUserList = async () => {
  //     try {
  //       const response = await userApi.getAll();
  //       console.log(response);
  //     } catch (error) {
  //       console.log('Toang meo chay roi loi cc: ', error);
  //     }

  //   }

  //   fectchUserList();
  // }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          { privateRoutes.map((route, index) => {
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;
            const Provider = route.provider || Fragment;
            return (
              <Route 
                key={index} 
                path={route.path} 
                element={
                  <Provider>
                    <Layout>
                      <Page />
                    </Layout>
                  </Provider>
                } 
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
