import './App.css';
import Introduction from './components/Introduction';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Introduction />
		</div>
	);
}

export default App;
