import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
	const [movieDetail, setMovieDetail] = useState(null);

	return (
		<MovieContext.Provider value={{ movieDetail, setMovieDetail }}>
			{children}
		</MovieContext.Provider>
	);
};
