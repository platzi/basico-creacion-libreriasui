import { render } from "@testing-library/react";
import ContainerFlex from "./ContainerFlex";

describe('@componets/ContainerFlex', () => {
  it('onmwedoifnwonf', () => {
    //arrange
    const { getByRole } = render(
      <ContainerFlex role="banner" />
    )
    //act
    const ContainerFlexTest = getByRole("banner")
    //assert
    expect(ContainerFlexTest).toBeDefined();
  });
});