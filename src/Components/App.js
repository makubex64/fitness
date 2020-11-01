import React                    from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Exercises                from '../Pages/Exercises'
import ExercisesNewContainer             from '../Pages/ExercisesNewContainer'
import NotFound                 from '../Pages/NotFound'


 const App = ()=>(

		<BrowserRouter>
			<Switch>
				<Route exact path="/excercise" component={Exercises} />
				<Route exact path="/excercise/new" component={ExercisesNewContainer} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>


		)


export default App