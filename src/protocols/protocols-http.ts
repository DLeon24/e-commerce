import { UrlWithParsedQuery, parse } from 'url'
import { InvalidArgument } from '../errors/invalid-arg'

export class Url {
  public static parse (url: string): UrlWithParsedQuery {
    if (!url) {
      throw new InvalidArgument(url)
    }
    return parse(url, true)
  }
}
