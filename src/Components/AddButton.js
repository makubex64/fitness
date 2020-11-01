import React from 'react'
import './Styles/AddButton.css'
import Button from '../img/add.png'
import {Link} from 'react-router-dom'

const AddButton = (props)=>(
			<Link to="/excercise/new">
				<img src={Button} className="Fitness-Add" />
			</Link>
		)

export default AddButton