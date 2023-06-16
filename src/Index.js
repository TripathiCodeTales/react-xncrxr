import React from 'react';
import App from './App';
import Dashboard from './Dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { loginContext } from './context/loginContext';
import {useState} from react;

function Index() {
  const {firstName,setFirstname} = useState('')
  const {lastName,setLastname} = useState('')
  const {email,setEmail} = useState('')

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/Dashboard',
      element: <Dashboard />,
    },
  ]);
  return (
    <loginContext.Provider
      value={{ firstName, lastName, setFirstname, setLastname,email,setEmail }}
    >
      <RouterProvider router={router} />
    </loginContext.Provider>
  );
}
export default Index;
