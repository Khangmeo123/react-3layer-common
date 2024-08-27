import type { OrderType } from './OrderType';
import { Field } from 'react-3layer-decorators/Field';

export class Pagination {
  @Field(Number)
  skip?: number;

  @Field(Number)
  take?: number;

  @Field(String)
  orderBy?: string;

  @Field(String)
  orderType?: OrderType;
}
