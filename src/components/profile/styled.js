import styled from 'styled-components';

export const wrapper = styled.div`
    display: flex;
    align-items: flex-start;

`;

export const wrapperImage = styled.img`
    border-radius: 50%;
    width: 200px;
    margin: 8px;
`;

export const wrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between; 
    height: auto;
    margin-left: 8px;
`;

export const wrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
`;

export const wrapperUserName = styled.div`
    display: flex;
    align-items: center;
    h3 {
        margin-right: 8px;
    }
`;