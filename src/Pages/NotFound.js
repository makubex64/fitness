import React from 'react'
import Error   from '../img/404.png'
import '../Components/Styles/Errors.css'

 const NotFound = ()=>(

 		<div className="text-center">
			<h1 className="Error_Text">Error 404: NotFound</h1> 
			<img 
				src={Error}
				className = "Error_Image"
				 />

		</div>
 	) 

 export default NotFound