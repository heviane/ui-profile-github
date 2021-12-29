/*
    Dumb component (Generic)
    Responsible: Receive page content and render 
*/
import React from "react";
// import tudo que esta dentro do styled.js e cria um alias para simplificar o código
import * as S from './styled'; 

const Layout = ( {children} ) => {

    return (
        <S.wrapperLayout>
            <header>header</header>
            {children}
        </S.wrapperLayout>
    );
}

export default Layout;