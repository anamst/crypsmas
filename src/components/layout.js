import * as React from 'react';
import Header from './header.js';
import Footer from './footer.js';

const Layout = ({ children }) => {
    return ( 
        <>
         <Header> </Header> 
          <main className="w-full">{children}</main>
         <Footer> </Footer> 
        </>
    );
};

export default Layout;