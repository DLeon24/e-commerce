import { InvalidArgument } from '../errors/invalid-arg'
import { Url } from '../protocols/protocols-http'

describe('Protocols Http and Querys', () => {
  test('Url login', () => {
    const parseUrl = Url.parse('http://localhost:8080/login')
    expect(parseUrl.href).toBe('http://localhost:8080/login')
    expect(parseUrl.port).toBe('8080')
  })

  test('Response Query login', () => {
    const parseUrl = Url.parse(
      'http://localhost:8080/login?user=user&password=password'
    )
    const expectAuth = {
      user: 'user',
      password: 'password'
    }
    expect(parseUrl.query).toEqual(expectAuth)
  })

  test('Url user', () => {
    const parseUrl = Url.parse('http://localhost:3000/user')
    expect(parseUrl.href).toBe('http://localhost:3000/user')
    expect(parseUrl.hostname).toBe('localhost')
  })

  test('Response Query user', () => {
    const parseUrl = Url.parse(
      'http://localhost:3000/login?user=user&password=password&name=name'
    )
    const expectAuth = {
      user: 'user',
      password: 'password',
      name: 'name'
    }
    expect(parseUrl.query).toEqual(expectAuth)
  })

  test('Invalid Url', () => {
    function expectError (): void {
      Url.parse('')
    }
    expect(expectError).toThrowError(new InvalidArgument(''))
  })
})
