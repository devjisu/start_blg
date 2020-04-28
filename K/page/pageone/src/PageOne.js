import React from 'react';
import palette from './lib/styles/palette';
import styled from 'styled-components';
import Button from './Button';

const WhiteBoxBlock = styled.div`
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
    padding: 2rem;
    width: 650px;
    height: 800px;
    background: ${palette.gray[4]};
    position:relative;
`;

const PageOneBlock = styled.div`
    position: absolute;
    background: ${palette.gray[1]};
    top:10%;
    width: 550px; 
    margin: 10px; 
    padding: 10px 20px;
    align-items: center;
`;

const PageTwoBlock = styled.div`
    position: absolute;
    background: ${palette.teal[6]};
    top:38%;
    width: 254px;
    height: 250px;
    margin: 10px; 
    padding: 10px 20px;
    float:left;
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
    position: absolute;
    background: ${palette.teal[3]};
    top:38%;
    left:46%;
    width: 254px;
    height: 250px;
    margin: 10px; 
    padding: 10px 20px;
    float:left;
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
                    어렵다아아아아
                </p>
            </PageThreeBlock>
        </WhiteBoxBlock>            
    );
};

export default PageOne;