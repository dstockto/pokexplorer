import {genderRateToIcons} from "./index";

describe('the genderRateToIcons conversion works as expected', () => {
  it('converts -1 to Genderless', () => {
    expect(genderRateToIcons(-1)).toEqual('Genderless');
  });

  it('should convert 1 to male / female', () => {
    expect(genderRateToIcons(1)).toEqual('Male / Female');
  });
})
