import { Model } from './Model';
import type { Pagination } from './Pagination';
import { OrderType } from './OrderType';
export declare class ModelFilter extends Model implements Pagination {
    orderBy?: string;
    orderType?: OrderType;
    pageIndex?: number;
    pageSize?: number;
    search?: string;
}
