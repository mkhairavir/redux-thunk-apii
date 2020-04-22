import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getListApi} from '../Redux/Action/apiAction'

const JsonP = (props) => {
    useEffect(() => {
        props.getApi()
    }, [])

    console.log("props komponen 2",props)
    return(
        <div>
        <h1>JSON Placeholder</h1>
        
        {props.api.map((item,index) => (
            <li key={index}>{item.title}</li>
        ))}
        </div>

        
    )
}

const mapStateToProps = (props) => {
    console.log("props mapState", props)
    return {
        api: props.apiReducer.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getApi: () => {dispatch(getListApi())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(JsonP);