import { render } from '@testing-library/react';
import MediaImg from './MediaImg';

describe('@components/MediaImg', () => {
  it("kinewofinweoifnoine", () => {
    //arrange
    const { getByRole } = render(
      <MediaImg alt="PlatziCoolImg" src="http://www.platziversosupercool.com/img" />
    );
    //act
    const MediaImgTest = getByRole('img')
    //assert
    expect(MediaImgTest).toBeInTheDocument();
    expect(MediaImgTest).toHaveAttribute("src", "http://www.platziversosupercool.com/img")
    expect(MediaImgTest).toHaveAttribute("alt", "PlatziCoolImg" )
  })
})