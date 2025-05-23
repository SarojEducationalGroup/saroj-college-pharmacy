import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsConditions';

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<HomePage/>}/>

    <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
    <Route path='/terms-and-conditions' element={<TermsAndConditions/>}/>
   </Routes>
  );
}

export default App;
