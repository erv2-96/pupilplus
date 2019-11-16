import React from "react";
import styled from "styled-components";

import skills from '../../images/skills.jpg';
import nutrition from '../../images/nutrition.jpg';
import learning from '../../images/enhanced-learning.jpg';
import experiances from '../../images/experiances.jpg';


const BenefitsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 5%;

    div {
        max-width: 24%;
        flex-basis: 24%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    

    p {
        text-transform: uppercase;
        font-size: 25px;
        text-align: center;
        max-width: 80%;
        line-height: 1.5;
        font-weight: 500;
        color: #067B8D;
        font-weight: 500;
        letter-spacing: 1px;
    }

    img {
        width: 100%;
    }

    @media (max-width: 500px){
        div {
            max-width: 100%;
            flex-basis: 100%;
        }
    }
`


const Benefits = () => {
	return (
			<BenefitsWrapper>
					<div>
                        <img src={learning} />
                    </div>
                    <div>
                        <p>Nutritous food</p>
                        </div>
                    <div>
                    <img src={experiances} />
                        </div>
                    <div>
                        <p>New skills</p>
                        </div>
                    <div>
                        <p>Enhanced learning</p>
                        </div>
                    <div>
                    <img src={nutrition} />
                        </div>
                    <div>
                        <p>New experiances</p>
                        </div>
                    <div>
                    <img src={skills} />
                        </div>
			</BenefitsWrapper>
	);
};

export default Benefits;