import React, { useState, useContext, useEffect, useCallback } from "react";
import btc from "../../assets/btc.png";
import { Web3Context } from "../../context/context";
import CmcTableHeader from "../cmc-table/CmcTableHeader";

const CmcTable = () => {
	let getTopTenCoins = useContext(Web3Context);
	let [coinData, setCoinData] = useState(null);
	useEffect(() => {
		setData();
	}, []);

	const setData = useCallback(async () => {
		try {
			let apiResponse = await getTopTenCoins();
			let filteredResponse = [];

			for (let i = 0; i < apiResponse.length; i++) {
				const element = apiResponse[i];
				if (element.cmc_rank <= 10) filteredResponse.push(element);
			}

			setCoinData(filteredResponse);
		} catch (e) {
			console.log(e.message);
		}
	}, [getTopTenCoins]);
	return (
		<div className="text-white font-bold">
			<div className="mx-auto max-w-screen-2xl">
				<table className="w-full">
					<CmcTableHeader />

					{coinData && coinData ? (
						coinData.map((coin, index) => {
							return (
								<div>
									<CMCtableRow
										key={index}
										starNum={coin.cmc_rank}
										coinName={coin.name}
										coinSymbol={coin.symbol}
										coinIcon={btc}
										showBuy={true}
										hRate={coin.quote.USD.percent_change_24h}
										dRate={coin.quote.USD.percent_change_7d}
										hRateIsIncrement={true}
										price={coin.quote.USD.price}
										marketCapValue={coin.quote.USD.market_cap}
										volumeCryptoValue={coin.quote.USD.volume_24h}
										volumeValue={coin.total_supply}
										circulatingSupply={coin.circulating_supply}
									/>
								</div>
							);
						})
					) : (
						<></>
					)}
				</table>
			</div>
		</div>
	);
};

export default CmcTable;
