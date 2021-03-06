import React from 'react';
import palette from './lib/styles/palette';
import styled from 'styled-components';

const PageTemplateBlock = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: ${palette.gray[4]};
    /* flex로 내부 내용 중앙 정렬 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const PageTemplate = ({children}) => {
    return (
        <PageTemplateBlock>
            {children}
        </PageTemplateBlock>
    );
};

export default PageTemplate;
