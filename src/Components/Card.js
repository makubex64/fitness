import React 	   from 'react'
import CircleImage from '../img/circles.png'
import fitness1    from './../img/exercise.png'
import ImageEmpty  from '../img/empty.png'
import './Styles/Card.css'

export default class Card extends React.Component {


	render(){

		// destructuring
		const { title, img, description, leftColor, rightColor } = this.props

		return(
				<div className="card mx-auto Fitness-Card"
					style={{
						backgroundImage: `url(${CircleImage}), linear-gradient(to right, ${leftColor || 'red'}, ${rightColor || 'pink'} )`

					}}
					>
					<div className="card-body">
						<div className ="row center">

							<div className="col-6">
								<img src={img || ImageEmpty}  className="float-right" />
							</div>

							<div className="col-6 Fitness-Card-Info">
								<h1>{title}</h1>
								<p>{description}</p>
							</div>

						</div>
					</div>
				</div>
			)
	}
}