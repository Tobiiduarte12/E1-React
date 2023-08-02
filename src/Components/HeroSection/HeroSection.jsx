import { HeroStyled, TitleContainerStyled } from "./HeroSectionStyled";

const HeroSection = () => {
  return (
    <HeroStyled>
      <TitleContainerStyled>
        <h1>Bienvenidos!🧉</h1>
        <p>
          Disfruta del mate sin límites, ni preocupaciones, gracias a nuestras
          materas herméticas. Hechas para ser tu fiel compañero, nuestras
          materas combinan funcionalidad y estilo, asegurando que cada mate que
          compartas sea una experiencia genuina y placentera.
        </p>
      </TitleContainerStyled>
    </HeroStyled>
  );
};

export default HeroSection;
