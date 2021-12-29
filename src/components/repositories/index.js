import React from 'react';
// import tudo que esta dentro do styled.js e cria um alias para simplificar o código
import * as S from './styled';

const Repositories = () => {

    return (
        <>
            <S.WrapperTabs
                selectedTabClassName="selected-tab"
                selectedTabPanelClassName="selected-tab">
                <S.WrapperTabList>
                    <S.WrapperTab>Repositories</S.WrapperTab>
                    <S.WrapperTab>Starred</S.WrapperTab>
                </S.WrapperTabList> 
            </S.WrapperTabs>
        </>
    );
}

export default Repositories;