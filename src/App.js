import './App.css';
import Introduction from './components/Introduction';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Introduction />
			<About />
		</div>
	);
}

export default App;
