import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PopupForm from './PopUp';

const Layout = ({children}) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <PopupForm />
            {/* Header  */}
            <Header/>
    
        {/* Main Content  */}
         <div className='flex-1 overflow-hidden'>
            {children}
         </div>

          {/* Footer  */}
            <Footer/>
        </div>
    );
}

export default Layout;
