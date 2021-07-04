import {hectogramsToPounds} from "./index";

describe('it converts hectograms to pounds', () => {
  it('says a bulbasaur is 15lbs 4oz', () => {
    expect(hectogramsToPounds(69)).toEqual('15 lbs 4 oz');
  });

  it('says a ivysaur is 28lbs 11oz', () => {
    expect(hectogramsToPounds(130)).toEqual('28 lbs 11 oz');
  });

  it('says a venusaur is 220lbs 8oz', () => {
    expect(hectogramsToPounds(1000)).toEqual('220 lbs 8 oz');
  });

  it('says an eternatus is 2094lbs 7oz', () => {
    expect(hectogramsToPounds(9500)).toEqual('2094 lbs 7 oz');
  });

  it('says an eternatus eternamax is 2204lbs 10oz', () => {
    expect(hectogramsToPounds(10000)).toEqual('2204 lbs 10 oz');
  });
});
