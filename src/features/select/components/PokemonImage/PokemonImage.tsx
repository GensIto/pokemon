export const PokemonImage: React.FC<{
  frontUrl: string | null;
  backUrl: string | null;
  alt: string;
}> = ({ frontUrl, backUrl, alt }) => {
  return (
    <>
      {frontUrl && <img src={frontUrl} alt={`${alt} front`} />}
      {backUrl && <img src={backUrl} alt={`${alt} back`} />}
    </>
  );
};
