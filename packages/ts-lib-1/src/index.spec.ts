import { someFn } from './index'

describe('test', () => {
  test('qualquer_outra_coisa', () => {
    expect(someFn('Hey')).toEqual('Hello Hey Ho')
  })
})
