import React      from 'react'
import ImageError from '../img/500.png'
import '../Components/Styles/Errors.css'

const FatalError = () => (
				<div className="text-center">
					<h1 className="Error_Text">Fatal error: 500</h1> 
					<img 
						src={ImageError}
						className = "Error_Image"
						 />

				</div>
			)

	


export default FatalError