

import { BrowserRouter as Router, Switch, Route, } from "react-router-dom"
import Tv from './Routes/Tv';
import Search from './Routes/Search';
import Home from './Routes/Home';
import Header from './Components/Header';



function App() {
	return (
		<Router>
			<Header />
			<Switch>

				<Route path="/tv">
					<Search />
				</Route>
				<Route path="/search">
					<Tv />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
