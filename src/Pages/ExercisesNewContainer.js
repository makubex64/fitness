import React         from 'react'
import FatalError    from './500'
import ExcerciseNew  from './ExcerciseNew'

export default class ExercisesNewContainer extends React.Component{

	state = {
		form: {
			title:      '',
			img:        '',
			description:'', 
			leftColor:  '', 
			rightColor: ''
		},
		error:   null,
		loading: false
	}

	handleChange = event =>{
		this.setState({

			form:{
				...this.state.form,
				[event.target.name]: event.target.value
			}
		})
	}

	handleSubmit = async event =>{

		this.setState({
			loading: true,
			error: null
		})

		event.preventDefault()
		try{
			let config = {
				method : 'POST',
				headers: {
						 'Accept'      : 'application/json',
						 'Content-Type': 'application/json'
						},
				body: JSON.stringify(this.state.form)
			}
			let response = await fetch('https://fitnessappi.herokuapp.com/api/exercises', config)
			let dataJson = await response.json()

			this.setState({
				loading:false
			})
			this.props.history.push('/excercise')

		}catch(error){
			this.setState({
				loading:false,
				error:  null
			})

		}
	}
	

	render(){

		if(this.state.FatalError) return <FatalError/>


		return <ExcerciseNew
				form    ={this.state.form}
				onSubmit={this.handleSubmit}
				onChange={this.handleChange}
				/>

	}
}