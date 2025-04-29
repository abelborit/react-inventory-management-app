import {
  LoaderWrapper,
  LoaderContainer,
  LoaderSquare,
  LoadingText,
} from "./index.styles";

export const LoaderComponent = () => {
  return (
    <LoaderWrapper>
      <LoaderContainer>
        <LoaderSquare />
        <LoaderSquare />
        <LoaderSquare />
        <LoaderSquare />
        <LoaderSquare />
        <LoaderSquare />
        <LoaderSquare />
      </LoaderContainer>

      <LoadingText>-- Loading --</LoadingText>
    </LoaderWrapper>
  );
};
