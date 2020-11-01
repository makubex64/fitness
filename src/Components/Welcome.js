 import React from 'react'
 import './Styles/Welcome.css'


 const Welcome = ({username})=>(
 				<div className="container">

 					<div className="Fitness-User-Info">
 						<h1>Hello {username} </h1>
 						<p>Let´s go </p> 						
 					</div>
 					
 				</div>
 			)
 	
  export default  Welcome
