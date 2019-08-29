import { ClaimTopic } from './claim';
import { Parser } from './parser';
import { Generator } from './generator';

export interface Handler<Topic extends ClaimTopic> extends Parser<Topic>, Generator<Topic> {}
