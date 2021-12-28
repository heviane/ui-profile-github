/*
    Dumb component
    Responsible: Receive page content and render 
*/
import React from "react";

function Layout( {children} ){

    return (
        <section>
            <header>header</header>
            {children}
        </section>

    );
}

export default Layout;