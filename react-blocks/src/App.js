import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import SubComponent from "./components/SubContents";
import Advertisement from "./components/Advertisement";

function App() {
	return (
		<div className="container mt-5 p-3" style={{ backgroundColor: "#dddddd" }}>
			<Header />
			<div className="d-flex gap-3 mt-3">
				<Navigation />
				<Main>
					<div className="row mb-3">
						<SubComponent />
						<SubComponent />
						<SubComponent />
					</div>
					<Advertisement />
				</Main>
			</div>
		</div>
	);
}

export default App;
