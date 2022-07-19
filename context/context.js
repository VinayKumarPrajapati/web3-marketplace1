import { createContext, useState, useEffect } from "react";

export const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
	const getTopTenCoins = async () => {
		try {
			const res = await fetch("/api/getTopTen");
			const data = await res.json();
			return data.data.data;
		} catch (e) {
			console.log(e.message);
		}
	};

	return (
		<Web3Context.Provider
			value={{
				getTopTenCoins,
			}}>
			{children}
		</Web3Context.Provider>
	);
};
