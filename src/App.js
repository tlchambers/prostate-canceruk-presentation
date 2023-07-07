import './App.css';
import Introduction from './components/Introduction';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Timeline from './components/Timeline';

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Introduction />
			<Timeline />
		</div>
	);
}

export default App;
