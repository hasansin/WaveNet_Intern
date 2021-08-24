import { ReversePipe } from './reverse.pipe';
describe('UserComponent', () => {
  fit('user component create', () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });
});
