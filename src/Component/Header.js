import React from 'react'
import {withRouter} from 'react-router-dom'

const Header = (props) => {
    return (
        <div style={{marginRight:"5px"}}>
            <li onClick={() => {props.history.push('/')}}>MockAPI</li>
            <li onClick={() => {props.history.push('/jsonp')}}>JSON Placeholder</li>
            <li onClick={() => {props.history.push('/foodapi')}}>FoodAPI</li>
        </div>
    )
}

export default withRouter(Header)