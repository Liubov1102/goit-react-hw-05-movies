import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getMovieCast } from 'services/api';
import { CastList } from 'components/CastList/CastList';

const Cast = () => {
	const { movieId } = useParams();
	const [cast, setCast] = useState([]);

	useEffect(() => {
		getMovieCast(movieId).then(setCast)
	}, [movieId])
	return (
	    
			<CastList cast={cast}/>      
		
	);
};

export default Cast;


