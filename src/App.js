import Layout from './components/layout';

function App() {
	return (
		<main>
			<Layout>
				{/* https://api.github.com/users */}
				<div>
					<img source="https://avatars.githubusercontent.com/u/2830137?v=4" alt="Avatar of user" />
					<h1>Heviane Bastos</h1>
					<h3>Username:</h3>
					<span>heviane</span>
					<div>
						<div>
							<h4>Followers</h4>
							<span>5</span>
						</div>
						<div>
							<h4>Starreds</h4>
							<span>10</span>
						</div>
						<div>
							<h4>Followings</h4>
							<span>7</span>
						</div>
					</div>
				</div>

				<div>Repositories</div>
				<div>Starreds</div>

			</Layout>
		</main>
	);
}

export default App;