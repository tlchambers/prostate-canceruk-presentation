import './App.css';
import Introduction from './components/Introduction';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Swot from './components/Swot';

function App() {
	return (
		<div>
			<Navbar />
			<Introduction />
			<Hero />
			<About />
			<Swot />
		</div>
	);
}

export default App;
