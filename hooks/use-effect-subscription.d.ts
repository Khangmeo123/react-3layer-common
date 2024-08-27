import type { Subscription } from 'rxjs';
/**
 * Common effect subscription
 *
 * @param subscriber {() => Subscription} - RxJS subscriber
 */
export declare function useEffectSubscription(subscriber: () => Subscription): void;
