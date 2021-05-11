import React from 'react';
import PagePaper from '../../layouts/PagePaper'


const Home = () => {
    return (
        <React.Fragment>
                <PagePaper>
                    <h1 style={{ "textAlign": "center" }}>
                        <div style={{"width":"80%", "marginLeft":"auto", "marginRight":"auto"}}>
                            Planck sold the first Science NFT for $24k. Here's what we did... and what we're doing next.
                        </div>
                    </h1>
                    <p className="author">
                        April 2021
                    </p>
                    <h4>Abstract</h4>
                        <div style={{"marginLeft":"20px", "marginRight":"20px"}}>
                            <p>
                                <b>Planck is an incentive system for open innovation using non-fungible digital manuscripts on Ethereum.</b>
                                We call these original manuscripts "Glyphs." Original manuscripts of important scientific and innovative works have long been uniquely valuable, and by initiating a novel incentive design around Glyphs we have developed a system to reward thinkers, innovators, and creators.
                                <b>Planck can be thought of as creating an “alt-patent” system;</b> a non-legal framework for attribution and financial rewards for those who do time-consuming, valuable, knowledge work.
                                We believe this is essential in the larger project of improving the knowledge commons, helping us all think and create together better.
                            </p>
                        </div>
                        <br/>
                        <hr class="solid"></hr>
                        <nav class="toc">
                            <h2>Contents</h2>
                                <ol>
                                    <li>
                                        <a href="#current-test">First Alpha: NFTs for Open Innovation</a>
                                        <ol>
                                            <li><a href="#seth-theory">How we tested "Seth's Appetite Theory" the Web3 way</a></li>
                                            <li><a href="#why-seth">Next Steps on Seth's Theory</a></li>
                                        </ol>
                                    </li>
                                    <li><a href="#current-test">Second Alpha: Incentives for Citations and Attribution</a></li>
                                    <li><a href="#conclusion">The Big, Big Picture: Technology Revolutions don't work until they're patched</a></li>
                                </ol>
                        </nav>
                </PagePaper>
        </React.Fragment>
    )
}

export default Home