import { getImageURL } from "./functions";

export const PokemonImage: React.FC<{
  sprites: { [key: string]: string | null };
  alt: string;
}> = ({ sprites, alt }) => {
  const { frontUrl, backUrl } = getImageURL(sprites);
  return (
    <>
      {frontUrl && <img src={frontUrl} alt={`${alt} front`} />}
      {backUrl && <img src={backUrl} alt={`${alt} back`} />}
    </>
  );
};
