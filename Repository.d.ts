import { Axios } from 'react-3layer-axios-observable';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import type { OperatorFunction } from 'rxjs';
import type { Model } from './Model';
export declare class Repository {
    /**
     * Axios interceptor for HTTP Request
     *
     * @type {Axios.RequestInterceptor}
     */
    static requestInterceptor: Axios.RequestInterceptor;
    /**
     * Axios interceptor for HTTP Response
     *
     * @type {Axios.ResponseInterceptor}
     */
    static responseInterceptor: Axios.ResponseInterceptor;
    /**
     * Axios interceptor for HTTP Error
     *
     * @type {Axios.ErrorInterceptor}
     */
    static errorInterceptor: Axios.ErrorInterceptor;
    /**
     * Repository instances
     *
     * @protected
     * @type {Repository[]}
     */
    protected static instances: Repository[];
    /**
     * Axios instance
     *
     * @type {Axios}
     * @protected
     */
    protected http: Axios;
    /**
     * Class constructor
     *
     * @param config - AxiosRequestConfig
     */
    constructor(config?: AxiosRequestConfig);
    /**
     * Repository instances
     *
     * @type {Repository[]}
     */
    static get repositoryInstances(): Repository[];
    get baseURL(): string | undefined;
    set baseURL(baseURL: string | undefined);
    /**
     * Map a http response to list of ModelClass
     *
     * @param ModelClass {typeof Model}
     */
    static responseMapToList<T extends Model>(ModelClass: typeof Model): OperatorFunction<AxiosResponse<T[]>, T[]>;
    /**
     * Map a http response to a ModelClass
     *
     * @param ModelClass {typeof Model}
     */
    static responseMapToModel<T extends Model>(ModelClass: typeof Model): OperatorFunction<AxiosResponse<T>, T>;
    /**
     * Get response data as type T
     */
    static responseDataMapper<T>(): OperatorFunction<AxiosResponse<T>, T>;
    protected static addInstance(instance: Repository): void;
}
