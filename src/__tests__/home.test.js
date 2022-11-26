import Countries, { Data } from '../redux/home/home';

describe('Action Creator test from redux store', () => {
  it('test the action creator', () => {
    expect(Data('string')).toEqual({ payload: 'string', type: 'ADDDATA' });
  });
  it('test the reducer', () => {
    expect(Countries(0, Data([10, 20]))).toEqual([10, 20]);
  });
});
