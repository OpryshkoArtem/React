import React from "react";
import Greeting from "./Greeting.jsx";

const App = () => {
	return(
		<Greeting
			firstName = "Jonh"
			secondName = "Doe"
			birthDate = {new Date('2001-01-01T11:11:11.819Z')}
		/>
	)
};

export default App;