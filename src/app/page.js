import Header from './components/Header';
import SideNavBar from './components/SideBar/SideNavBar';

export default function Home() {
	return (
		<>
			<main style={{ display: 'flex', }}>
				<Header />
				{/* <main style={{ background: 'gray', height: '100vh' }}>
				</main> */}
					<SideNavBar />
			</main>
		</>
	);
}
