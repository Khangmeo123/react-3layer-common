/**
 * Model namespace
 */
export declare namespace Model {
    /**
     * Model errors
     *
     * @param T {Model}
     */
    type Errors<T extends Model> = Record<Exclude<keyof T, 'errors'>, string>;
}
/**
 * @package [react3l-common](https://www.npmjs.com/package/react3l-common)
 * @description Auto mapper model
 */
export declare class Model {
    errors?: Model.Errors<Model>;
    [key: string]: any;
    /**
     * Create an instance of this class with its prototype
     */
    static create<T = Model>(): T;
    /**
     * Used for circular relationship only.
     *
     * @param Parent
     * @param Child
     * @param field
     */
    static hasMany<T1 extends Model, T2 extends Model>(Parent: new () => T1, Child: new () => T2, field: keyof T1): void;
    /**
     * Used for circular relationship only.
     *
     * @param Child
     * @param Parent
     * @param field
     */
    static belongsTo<T1 extends Model, T2 extends Model>(Child: new () => T1, Parent: new () => T2, field: keyof T1): void;
    /**
     * Serialize this model to JSON string
     *
     * @return {string}
     */
    toString(): string;
}
