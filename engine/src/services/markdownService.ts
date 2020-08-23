import Showdown, { Converter } from 'showdown';
import DOMPurify from 'dompurify';

export default class MarkdownService {
  mdConverter: Converter;

  constructor(){
    this.mdConverter = new Converter();
  }

  parse(input: string): string {
    let result = this.mdConverter.makeHtml(input);
    let cleanResult = DOMPurify.sanitize(result);
    return cleanResult;
  }
}