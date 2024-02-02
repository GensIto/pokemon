export const PokemonImage: React.FC<{
  frontUrl: string | null;
  alt: string;
}> = ({ frontUrl, alt }) => {
  return <>{frontUrl && <img src={frontUrl} alt={`${alt} front`} />}</>;
};
