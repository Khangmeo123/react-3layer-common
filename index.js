require('reflect-metadata');
var React = require('react');
var rxjs = require('rxjs');
var react3layerDecorators = require('react-3layer-decorators');
var react3layerAxiosObservable = require('react-3layer-axios-observable');
var operators = require('rxjs/operators');

function booleanReducer(state, action) {
    switch (action) {
        case 'false':
            return false;
        case 'true':
            return true;
        case 'toggle':
            return !state;
        default:
            return state;
    }
}

exports.CountingReducerActionType = void 0;
(function (CountingReducerActionType) {
    CountingReducerActionType[CountingReducerActionType["INCREASE"] = 0] = "INCREASE";
    CountingReducerActionType[CountingReducerActionType["DECREASE"] = 1] = "DECREASE";
    CountingReducerActionType[CountingReducerActionType["SET"] = 2] = "SET";
    CountingReducerActionType[CountingReducerActionType["RESET"] = 3] = "RESET";
})(exports.CountingReducerActionType || (exports.CountingReducerActionType = {}));
function countingReducer(state, action) {
    switch (action.type) {
        case exports.CountingReducerActionType.DECREASE:
            return state - 1;
        case exports.CountingReducerActionType.INCREASE:
            return state + 1;
        case exports.CountingReducerActionType.RESET:
            return 0;
        case exports.CountingReducerActionType.SET:
            return action.value;
        default:
            return state;
    }
}

exports.ListReducerActionType = void 0;
(function (ListReducerActionType) {
    ListReducerActionType[ListReducerActionType["ADD"] = 0] = "ADD";
    ListReducerActionType[ListReducerActionType["UPDATE"] = 1] = "UPDATE";
    ListReducerActionType[ListReducerActionType["DELETE"] = 2] = "DELETE";
    ListReducerActionType[ListReducerActionType["RESET"] = 3] = "RESET";
    ListReducerActionType[ListReducerActionType["REVERSE"] = 4] = "REVERSE";
})(exports.ListReducerActionType || (exports.ListReducerActionType = {}));
function listReducer(state, action) {
    switch (action.type) {
        case exports.ListReducerActionType.ADD:
            return [...state, action.element];
        case exports.ListReducerActionType.DELETE:
            state.splice(action.index, 1);
            return [...state];
        case exports.ListReducerActionType.RESET:
            return [];
        case exports.ListReducerActionType.REVERSE:
            return state.reverse();
        case exports.ListReducerActionType.UPDATE:
            return action.list;
        default:
            return state;
    }
}

/**
 * Boolean state hook
 *
 * @param initialState {boolean} - initial state
 *
 * @return {BooleanState}
 */
function useBoolean(initialState) {
    const [state, dispatch] = React.useReducer(booleanReducer, initialState);
    const handleToggle = React.useCallback(() => {
        dispatch('toggle');
    }, []);
    const handleTrue = React.useCallback(() => {
        dispatch('true');
    }, []);
    const handleFalse = React.useCallback(() => {
        dispatch('false');
    }, []);
    return [state, handleToggle, handleTrue, handleFalse];
}

/**
 * Common effect subscription
 *
 * @param subscriber {() => Subscription} - RxJS subscriber
 */
function useEffectSubscription(subscriber) {
    React.useEffect(() => {
        const subscription = subscriber();
        return function cleanup() {
            subscription.unsubscribe();
        };
    }, [subscriber]);
}

/**
 * Use interval in component
 *
 * @param fn {() => void | Promise<void>} - callback function
 * @param time {number} - timeout
 */
function useInterval(fn, time) {
    React.useEffect(() => {
        const timeout = setInterval(fn, time);
        return function cleanup() {
            clearInterval(timeout);
        };
    }, [fn, time]);
}

function useSubscription() {
    const subscription = React.useRef(new rxjs.Subscription()).current;
    React.useEffect(() => {
        return function cleanup() {
            subscription.unsubscribe();
        };
    }, [subscription]);
    return subscription;
}

function useTimeout(fn, time) {
    React.useEffect(() => {
        const timeout = setTimeout(fn, time);
        return function cleanup() {
            clearTimeout(timeout);
        };
    }, [fn, time]);
}

/**
 * @package [react3l-common](https://www.npmjs.com/package/react3l-common)
 * @description Auto mapper model
 */
class Model {
    constructor() {
        Object.defineProperty(this, "errors", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    /**
     * Create an instance of this class with its prototype
     */
    static create() {
        return Object.create(this.prototype);
    }
    /**
     * Used for circular relationship only.
     *
     * @param Parent
     * @param Child
     * @param field
     */
    static hasMany(Parent, Child, field) {
        react3layerDecorators.ObjectList(Child)(Parent.prototype, field);
    }
    /**
     * Used for circular relationship only.
     *
     * @param Child
     * @param Parent
     * @param field
     */
    static belongsTo(Child, Parent, field) {
        react3layerDecorators.ObjectField(Parent)(Child.prototype, field);
    }
    /**
     * Serialize this model to JSON string
     *
     * @return {string}
     */
    toString() {
        return JSON.stringify(this);
    }
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

exports.OrderType = void 0;
(function (OrderType) {
    OrderType["ASC"] = "ASC";
    OrderType["DESC"] = "DESC";
})(exports.OrderType || (exports.OrderType = {}));

class ModelFilter extends Model {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "orderBy", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "orderType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "pageIndex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "pageSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "search", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
__decorate([
    react3layerDecorators.Field(String),
    __metadata("design:type", String)
], ModelFilter.prototype, "orderBy", void 0);
__decorate([
    react3layerDecorators.Enum(exports.OrderType),
    __metadata("design:type", String)
], ModelFilter.prototype, "orderType", void 0);
__decorate([
    react3layerDecorators.Field(Number),
    __metadata("design:type", Number)
], ModelFilter.prototype, "pageIndex", void 0);
__decorate([
    react3layerDecorators.Field(Number),
    __metadata("design:type", Number)
], ModelFilter.prototype, "pageSize", void 0);
__decorate([
    react3layerDecorators.Field(String),
    __metadata("design:type", String)
], ModelFilter.prototype, "search", void 0);

class Repository {
    /**
     * Class constructor
     *
     * @param config - AxiosRequestConfig
     */
    constructor(config) {
        /**
         * Axios instance
         *
         * @type {Axios}
         * @protected
         */
        Object.defineProperty(this, "http", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.http = react3layerAxiosObservable.Axios.create(config);
        Repository.addInstance(this);
        const { requestInterceptor, //
        responseInterceptor, errorInterceptor, } = Repository;
        if (typeof requestInterceptor === 'function') {
            this.http.interceptors.request.use(requestInterceptor);
        }
        if (typeof responseInterceptor === 'function') {
            this.http.interceptors.response.use(responseInterceptor);
        }
        if (typeof errorInterceptor === 'function') {
            this.http.interceptors.response.use(undefined, errorInterceptor);
        }
    }
    /**
     * Repository instances
     *
     * @type {Repository[]}
     */
    static get repositoryInstances() {
        return this.instances;
    }
    get baseURL() {
        return this.http.defaults.baseURL;
    }
    set baseURL(baseURL) {
        this.http.defaults.baseURL = baseURL;
    }
    /**
     * Map a http response to list of ModelClass
     *
     * @param ModelClass {typeof Model}
     */
    static responseMapToList(ModelClass) {
        return operators.map((response) => {
            var _a;
            return (_a = response.data) === null || _a === void 0 ? void 0 : _a.map((data) => {
                const instance = ModelClass.create();
                Object.assign(instance, data);
                return instance;
            });
        });
    }
    /**
     * Map a http response to a ModelClass
     *
     * @param ModelClass {typeof Model}
     */
    static responseMapToModel(ModelClass) {
        return operators.map((response) => {
            const instance = ModelClass.create();
            Object.assign(instance, response.data);
            return instance;
        });
    }
    /**
     * Get response data as type T
     */
    static responseDataMapper() {
        return operators.map((response) => response.data);
    }
    static addInstance(instance) {
        this.instances.push(instance);
    }
}
/**
 * Repository instances
 *
 * @protected
 * @type {Repository[]}
 */
Object.defineProperty(Repository, "instances", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: []
});

class Service {
}

exports.Model = Model;
exports.ModelFilter = ModelFilter;
exports.Repository = Repository;
exports.Service = Service;
exports.booleanReducer = booleanReducer;
exports.countingReducer = countingReducer;
exports.listReducer = listReducer;
exports.useBoolean = useBoolean;
exports.useEffectSubscription = useEffectSubscription;
exports.useInterval = useInterval;
exports.useSubscription = useSubscription;
exports.useTimeout = useTimeout;
//# sourceMappingURL=index.js.map
