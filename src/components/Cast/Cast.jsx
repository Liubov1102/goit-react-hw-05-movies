import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getMovieCast } from 'services/api';
import { Img, CastList, CastItem } from './Cast.styled';

const Cast = () => {
	const { movieId } = useParams();
	const [cast, setCast] = useState([]);

	useEffect(() => {
		getMovieCast(movieId).then(setCast).catch()
	}, [movieId])
	return (
		<>
      
			<CastList>
				{cast.map(({ id, profile_path, name, character }) => (
					<CastItem key={id}>
                
						<Img src={`https://image.tmdb.org/t/p/w300/${profile_path}`} alt={name} />
                            
						<p>{name}</p>
						<p>Character: {character}</p>
					</CastItem>
				))}
			</CastList>
      
		</>
	);
};

export default Cast;


