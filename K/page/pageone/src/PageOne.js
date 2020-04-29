import React from 'react';
import palette from './lib/styles/palette';
import styled from 'styled-components';
import Button from './Button';

const WhiteBoxBlock = styled.div`
    &,
    & * {
    box-sizing: border-box;
    };
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
    display: flex;
    flex-flow : column nowrap;
    background: ${palette.gray[5]};
    overflow: hidden;
    border-radius: 25px;
   
`;

const PageOneBlock = styled.div`
    background: ${palette.gray[1]};
    padding: 10px 20px;
    min-width: 400px;
    flex: 1;
    h3 {
        color:#B1DB4E;
    };
    h2 {
        color:#4FC9DE;
    };
    p {
        color:#BDBDBD;
    };
    
`;

const PageRowBlock = styled.div`
    display: flex;
    flex-flow : row wrap;
    flex: 1;
`;

const PageTwoBlock = styled.div`
    background: #4FC9DE;
    padding: 10px 20px;
    min-width: 300px;
    flex:1 1 40%;
    h3 {
        color:white;
    };
    h1 {
        color:white;
    };
    p {
        color:white;
    };
    
`;


const PageThreeBlock = styled.div`
    background: #A0D9E2;
    padding: 10px 20px;
    min-width: 300px;
    flex:1 1 40%;
    h3 {
        color:white;
    };
    h1 {
        color:white;
    };
    p {
        color:white;
    };
   
`;

const PageOne = () => {
    return (
        <WhiteBoxBlock>
            <PageOneBlock>
                <h2>Join our Community</h2>
                
                <h3>30-day, hassie-free money back guarantee</h3>

                <p>
                    Gain access to our full library of tutorials along with expert code reviews.
                    <br/>
                    Perfect for any developers who are serious about honing their skills.
                </p>
            </PageOneBlock>
            <PageRowBlock>
                <PageTwoBlock>
                    <h3>Monthly Subscription</h3>
                    <table>
                        <tr>
                            <td>
                                <h1>$29</h1>
                            </td>
                            <td>
                                <p>per month</p>
                            </td>
                        </tr>
                    </table>
                    <p>Full access for less than $1 a day</p>
                    <Button>Sign up</Button> 
                </PageTwoBlock>
                <PageThreeBlock>
                    <h3>Why us</h3>
                    <p>
                        Tutorials by industry experts<br/>
                        Peer & expert code reviewsCoding exercises<br/>
                        Access to our GitHub repos
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </p>
                </PageThreeBlock>
            </PageRowBlock>
        </WhiteBoxBlock>            
    );
};

export default PageOne;