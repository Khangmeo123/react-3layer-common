import { Model } from './Model';
import type { Pagination } from './Pagination';
import { OrderType } from './OrderType';
import { Enum, Field } from 'react-3layer-decorators';

export class ModelFilter extends Model implements Pagination {
  @Field(String)
  public orderBy?: string;

  @Enum(OrderType)
  public orderType?: OrderType;

  @Field(Number)
  public pageIndex?: number;

  @Field(Number)
  public pageSize?: number;

  @Field(String)
  public search?: string;
}
