import { List, CastItem, Img } from 'components/CastList/CastList.styled';

export const CastList = ({ cast }) => {
  return (
    <List>
      {cast.map(({ id, profile_path, name, character }) => (
        <CastItem key={id}>
                
          <Img src={`https://image.tmdb.org/t/p/w300/${profile_path}`} alt={name} />
                            
          <p>{name}</p>
          <p>Character: {character}</p>
        </CastItem>
      ))}
    </List>
  )
};