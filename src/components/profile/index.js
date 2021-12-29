import React from 'react';
// import tudo que esta dentro do styled.js e cria um alias para simplificar o código
import * as S from './styled'; 

// S.wrapper é uma DIV

const Profile = () => {
    return (
    <S.wrapper>
        <S.wrapperImage src="https://avatars.githubusercontent.com/u/2830137?v=4" alt="Avatar of user" />
        <S.wrapperInfoUser>
            <div>
                <h1>Heviane Bastos</h1>
                <S.wrapperUserName>
                    <h3>Username:</h3>
                    <a href="https://github.com/heviane" target="_blank" rel="noreferrer" >heviane</a>
                </S.wrapperUserName>
            </div>
            <S.wrapperStatusCount>
                <div>
                    <h4>Followers</h4>
                    <span>5</span>
                </div>
                <div>
                    <h4>Starreds</h4>
                    <span>10</span>
                </div>
                <div>
                    <h4>Followings</h4>
                    <span>7</span>
                </div>
            </S.wrapperStatusCount>
        </S.wrapperInfoUser>
    </S.wrapper>
    );
}

export default Profile;