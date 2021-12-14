import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';
function App() {
	const [punkListData, setPunkListData] = useState([]);
	const [selectedPunk, setSelectedPunk] = useState(0);

	useEffect(() => {
		const getMyNfts = async () => {
			const openSeaData = await axios.get(
				'https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x83A164Ad6947ddDc64Fe959e50625760b51946bB'
			);
			console.log(openSeaData.data.assets);
			setPunkListData(openSeaData.data.assets);
		};
		getMyNfts();
	}, []);

	return (
		<div className="app">
			<Header />
			{punkListData.length > 0 && (
				<>
					<Main punkListData={punkListData} selectedPunk={selectedPunk} />
					<PunkList
						punkListData={punkListData}
						setSelectedPunk={setSelectedPunk}
					/>
				</>
			)}
		</div>
	);
}

export default App;
