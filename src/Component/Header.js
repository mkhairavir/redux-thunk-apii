import React from 'react'
import {withRouter} from 'react-router-dom'

const Header = (props) => {
    return (
        <div>
            <span onClick={() => {props.history.push('/')}}>MockAPI</span> ||||
            <span onClick={() => {props.history.push('/jsonp')}}>JSON Placeholder</span>
            <span onClick={() => {props.history.push('/foodapi')}}>FoodAPI</span>
        </div>
    )
}

export default withRouter(Header)