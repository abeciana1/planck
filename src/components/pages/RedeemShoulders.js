import React from 'react'
import PagePaper from '../../layouts/PagePaper'

class RedeemShoulders extends React.Component {

    render() {
        console.log(this.props.location.pathname.split('/')[1])
        return (
            <PagePaper>
                <h1>redeem</h1>
            </PagePaper>
        )
    }
}

export default RedeemShoulders