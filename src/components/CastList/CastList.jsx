import { List, CastItem, Img } from 'components/CastList/CastList.styled';

export const CastList = ({ cast }) => {
  return (
    <List>
      {cast.map(({ id, profile_path, name, character }) => (
        <CastItem key={id}>
                
          {profile_path && (
            <Img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} />
          )}
          {!profile_path && (
            <Img src={`https://upload.wikimedia.org/wikipedia/en/b/b1/Portrait_placeholder.png`} alt={name} />
          )}
                            
          <p>{name}</p>
          <p>Character: {character}</p>
        </CastItem>
      ))}
    </List>
  )
};
