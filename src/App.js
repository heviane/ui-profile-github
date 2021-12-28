import Layout from './components/layout';
import Profile from './components/profile';

function App() {
	return (
		<main>
			<Layout>
				<Profile />
			</Layout>
			<div>Repositories</div>
        	<div>Starreds</div>			
		</main>
	);
}

export default App;