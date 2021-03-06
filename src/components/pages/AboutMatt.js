import React from 'react'
import PagePaper from '../../layouts/PagePaper'
import MattProfile from './matt-profile.jpeg'


const AboutMatt = () => {
    return (
        <PagePaper>
            <div>
                <span className="sidenote">
                        <img className="profile-pic" src={MattProfile} alt="Matthew Stephenson" style={{"borderRadius": "100px", "height": "200px"}} />
                </span>
            </div>
            <h1 style={{"marginLeft": "20px"}}>About Matt</h1>
        <div style={{"padding": "20px"}}>
            <p>
                We challenged Matt Stephenson to do one simple thing: leave out all his many failures and instead just provide a list of
                things to try and make him sound awesome:
                <br/>
                <br/>
                Academic Stuff:
                <ul>
                    <li>Fulbright Scholar</li>
                    <li>PhD(c) Behavioral Economics and Strategy, Columbia</li>
                    <li>MSc Economics Warwick (Awarded Best Thesis)</li>
                    <li>Publications include: Journal of Economics Behavior and Organization, Strategic Management Journal, Harvard Economic</li>
                    <li>Review, Encyclopedia of Behavioral Economics</li>
                    <li>Consulting includes Unilever, NY Federal Reserve</li>
                </ul>
                Crypto Stuff:
                <ul>
                    <li>2011 MSc Econometrics Thesis on Bitcoin</li>
                    <li>Helped solve a $12m Ponzi on Ethereum</li>
                    <li>Consulting for Dapper Labs</li>
                    <li>2018 essay on NFTs for Science was honored in a16z’s “NFT Canon”</li>
                    <li>Created and sold first the Science NFT</li>
                    <li>Gave Keynote at Ethereum’s first NFT Summit in 2018</li>
                    <li>OGNFT 2021 Talk on Behavioral Economics and NFTs</li>
                </ul>
            </p>
        </div>
        </PagePaper>
    )
}

export default AboutMatt