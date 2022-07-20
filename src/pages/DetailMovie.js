import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailMovie(props) {
	let params = useParams();

	return (
		<div>
			<h5>Detail Movie : {params?.movieId}</h5>
		</div>
	);
}

export default DetailMovie;
