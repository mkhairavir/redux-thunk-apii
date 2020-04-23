import {useSelector, useDispatch, connect} from 'react-redux'
import React, {useEffect, useState} from 'react'
import {getDataFood, postDataFood, deleteDataFood, editDataFood} from '../Redux/Action/foodAction'

const FoodApi = () => {
    const foodState = useSelector((state) => state.foodReducer.data)
    const foodDispatch = useDispatch()
    
    const [food,setFood] = useState("")

    useEffect(() => {
        foodDispatch(getDataFood());
    }, [])

    console.log("foodState",foodState)

    const handleChange = (event) => {
        setFood(event.target.value)
        console.log("isiFood", food)
    }

    const handleAdd = (event) => {
        event.preventDefault()

        let newFood = {
            id: foodState[foodState.length -1 ].id +1,
            food: food
        }
        foodDispatch(postDataFood(newFood))
    }

    const handleDelete = (id) => {
        foodDispatch(deleteDataFood(id))
    }

    const handleEdit = (id) => {
        console.log("handleEdit", id)
        const name = prompt("masukkan nama makanan")
        let newData = {
            id: id,
            food: name
        }
        foodDispatch(editDataFood(id, newData))
    }
    return(
        <div>
            <h1>Data Food (Harusnya)</h1>

            <form onSubmit={handleAdd}>
                <label>Nama:  <input type="text" id="male" value={food} onChange={handleChange}/></label>
            </form>

            {foodState.map((item, index)=>(
                <div key={index}>
                <li>{item.food}</li>
                <button onClick={() => {handleDelete(item.id)}}>Delete</button>
                <button onClick={() => {handleEdit(item.id)}} >Edit</button>
                </div>
            ))}
        </div>
    )
}



export default FoodApi