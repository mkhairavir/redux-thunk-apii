import React from 'react'
import {withRouter} from 'react-router-dom'

const Header = (props) => {
    console.log("props header",props)
    return (
        <div>
            <span onClick={() => {props.history.push('/')}}>MockAPI</span> ||||
            <span onClick={() => {props.history.push('/jsonp')}}>JSON Placeholder</span>
        </div>
    )
}

export default withRouter(Header)