import React from 'react';
import PagePaper from '../../layouts/PagePaper'

class Shoulders extends React.Component {

    state = {
        attribution: "",
        idKey: ""
    }

    attributionHandler = (e) => {
        this.setState({
            attribution: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log("submit")
        this.attributionKeyCreator()
        this.sendAttributionToApi(this.state.attribution)
    }

    attributionKeyCreator = () => {
        let result = [];
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < 10; i++ ) {
            result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
        }
        let idKey = result.join('')
        this.setState({
            idKey: idKey
        })
        return idKey
    }

    // sendAttributionToApi = (formData) => {

    // }

    render() {
        console.log(this.state.attribution.length)
        return (
            <PagePaper>
                <div className="abstract">
                    <h4>You got an Attribution Grant!</h4>
                    <p>
                        You created something someone else used. When that someone received funds, they decided you should have some
                        too.
                        The funds you just got are a <i>portion of what they got</i>, yours because you helped make their work possible.
                        It's probably a small amount.<sup>1</sup>
                        <br/>
                        <br />
                        <div></div>
                        <form onSubmit={this.submitHandler}>
                        {"You created something great: "}
                            <input
                            placeholder = "Type your attribution"
                            type="text"
                            style={{"border":"none", "backgroundColor": "transparent"}}
                            value={this.state.attribution}
                            onChange={this.attributionHandler}
                            />
                            {". And when someone else used it and received funds, they thought you should have some too."}
                            <br />
                            <br />
                            {this.state.attribution.length > 0 ?
                            <>
                                <input
                                    type="submit"
                                    className="note"
                                    style={{"border":"1px solid #f8f8f8"}}
                                />
                            </>
                                :
                            null
                            }
                        </form>
                        {this.state.idKey.length > 0 ? 
                        <>
                        <h4>Your link is here: <a href={"https://www.p1anck.com/shoulders/" + this.state.idKey} target="_blank" rel="noopener">https://www.p1anck.com/shoulders/${this.state.idKey}</a></h4>
                        </>
                        : null}
                        {/* <button id="btn-lookup" className="note" style={{"border": "1px solid #f8f8f8"}}>Lookup Your Key</button> */}
                    </p>
                </div>
            </PagePaper>
        )
    }
}


// const sendAttributionToApi = (formData) => {
        //! random id_key generation
        // let result = [];
        // let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        // let charactersLength = characters.length;

        // for (let i = 0; i < 10; i++ ) {
        //     result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
        // }
        // let idKey = result.join('')

        // let formDiv = document.querySelector(".form")
        // formDiv.innerHTML = `<h4>Your link is here: <a href="https://www.p1anck.com/shoulders/${idKey}" target="_blank" rel="noopener">https://www.p1anck.com/shoulders/${idKey}</a></h4>`

    //     let body = {
    //         attribution: {
    //             idKey: idKey,
    //             attrMessage: formData
    //         }
    //     }

    //     fetch(apiUrl, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json',
    //         },
    //         body: JSON.stringify(body)
    //     })
    //     .then(response => response.json())
    // }

export default Shoulders