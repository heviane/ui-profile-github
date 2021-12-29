import Layout from './components/layout';
import Profile from './components/profile';
import ResetCSS from './global/resetCSS.js';

// Warning: <resetCSS /> is using incorrect casing.
// Use PascalCase for React components, or lowercase for HTML elements.

const App = () => {
	return (
		<main>
			<ResetCSS />
			<Layout>
				<Profile />
			</Layout>
			<div>Repositories</div>
        	<div>Starreds</div>			
		</main>
	);
}

export default App;