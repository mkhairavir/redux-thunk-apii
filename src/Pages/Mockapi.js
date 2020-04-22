import React,{useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {getDataGame, postDataGame} from '../Redux/Action/mockAction'

const Mockapi = (props) => {
    const [gameNameState, setGameNameState] = useState("")  
    const [idGame, setidGame] = useState(3)

    useEffect(() => {
        props.getDataGame();
    }, [])

    

    console.log("useeffect", props.gameName)
    const handleChange = (event) => {
        setGameNameState(event.target.value)
    }

    const handlePost= (event) => {
        event.preventDefault()

        let newGame = {
            id: idGame,
            name: gameNameState
        }
        props.postDataGame(newGame)
        setidGame(idGame +1);
        setGameNameState('')

    }

    return(
        <div>

        <h1>MockAPI</h1>
        
        <form onSubmit={handlePost}>
            <label>
                Game:
                <input
                    type="text"
                    name="gameName"
                    value={gameNameState}
                    onChange={handleChange}
                />
            </label>
        </form>

        {props.gameName.data.map((item, index) => (
            <li key={index}>{item.name}</li>
        ))}

        </div>
    )
}

const mapStateToProps = (props) => {
    console.log("mapsstate",props.mockReducer.data)
    return {
        gameName: props.mockReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDataGame: () => dispatch(getDataGame()),
        postDataGame: (obj) => dispatch(postDataGame(obj))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Mockapi) ;