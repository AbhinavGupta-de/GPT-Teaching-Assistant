import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="flex justify-between w-full p-5 text-white">
			<div>GPT Teaching Assistance</div>
			<nav>
				<ul className="flex gap-2">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
