import { StateSchema } from '@/app/providers/StoreProvider';

export const getScrollRestorationData = (state: StateSchema) => state.scrollRestoration.scroll;
