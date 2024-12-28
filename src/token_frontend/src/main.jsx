import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.scss';
// import { AuthClient } from '@dfinity/auth-client';



// const authClient = await AuthClient.create()
// if (await authClient.isAuthenticated()){
//   handleAuthentication(authClient)
// }else{
//   await authClient.login({
//     identityProvider: "https://identity.ic0.app/#authorize",
//     onSuccess:()=>{
//       handleAuthentication(authClient)
//         }
//   })
// }

// async function handleAuthentication(authClient){
//   // ReactDOM.createRoot(document.getElementById('root')).render(
//   //   <React.StrictMode>
//   //     <App />
//   //   </React.StrictMode>,
//   // );

// }
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);