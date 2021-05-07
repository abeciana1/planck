import React from 'react';
import styled from 'styled-components'
import PlanckLogo from './Planck-bottom-whitespace.png'

const PaperWrapper = styled.div`
    position: absolute;
    float: left;
    right: 10%;
    left: 10%;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Libertinus';
    background-color: #f8f8f8;
    width: 50%;
    border-radius: 30px;
    padding: 10px;
    box-shadow:  5px 5px 50px #D3D7D9,
`

const PagePaper = (props) => {
    return (
            <PaperWrapper>
                    <img src={PlanckLogo} alt="Planck Footer logo" className="planck-img" style={{ "width": "17%" }} />
                    <div>
                        <p className="planck-title" style={{ "fontSize": "12px", "zIndex": "1" }}>Planck Manuscripts Vol. 1 (2021)</p>
                    </div>
                    <p style={{ "padding": "3em 0 0 0" }}></p>
                <div style={{"marginLeft": "10px", "marginRight": "10px"}}>
                    {props.children}
                </div>
            </PaperWrapper>
    )
}

export default PagePaper