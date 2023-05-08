import { getScrollRestorationByPath } from './model/selectors/getScrollRestorationByPath/getScrollRestorationByPath';
import { scrollRestorationActions, scrollRestorationReducer } from './model/slice/scrollRestorationSlice';
import type { ScrollRestorationSchema } from './model/types/ScrollRestorationSchema';

export {
    scrollRestorationReducer,
    scrollRestorationActions,
    getScrollRestorationByPath,
};

export type {
    ScrollRestorationSchema,
};
