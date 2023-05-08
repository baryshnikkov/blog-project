import type { StateSchema, ReduxStoreWithManager, ThunkConfig } from './config/StateShema';
import { AppDispatch, createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export {
    StoreProvider,
    createReduxStore,
};

export type {
    StateSchema,
    ReduxStoreWithManager,
    ThunkConfig,
    AppDispatch,
};
