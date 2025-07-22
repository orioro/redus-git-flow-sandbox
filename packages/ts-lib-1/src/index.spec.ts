import { someFn } from './index'

describe('test', () => {
  test('qualquer_coisa', () => {
    expect(someFn('Hey')).toEqual('Hello Hey Ho')
  })
})
