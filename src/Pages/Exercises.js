import React 		from 'react'
import ExerciseList from '../Components/ExerciseList'
import Welcome 		from '../Components/Welcome'
import AddButton    from '../Components/AddButton'
import Loading      from '../Components/Loading'
import FatalError   from './500'

export default class Exercises extends React.Component{

	state    = {
				data:     [],
				loading: true,
				error:   null
	}

	async componentDidMount(){
		await this.fetchExercises()
	}

	fetchExercises = async()=>{
		try {
			let response = await fetch('https://fitnessappi.herokuapp.com/api/exercises') //tutorial link
			let data     = await response.json()
			console.log(data)

			this.setState({
				data,
				loading:false
			})

		}catch (error) {
				this.setState({
				loading:false,
				error
			})

		}
		
	}

		

	render(){
			
			if (this.state.loading == true) return <Loading/>
			if (this.state.err) 			return <FatalError/>

			return(<div>
					<Welcome
						username="Jorge Adarmes"
					/>
					<ExerciseList
						exercise={this.state.data}
					/>

					<AddButton/>


					
				  </div>
		 )
	}

}