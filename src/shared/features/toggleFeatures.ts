import { FeatureFlags } from '@/shared/types/featureFlags';
import { getFeaturesFlags } from './setGetFeatures';

interface ToggleFeatures<T> {
    name: keyof FeatureFlags;
    on: () => T;
    off: () => T;
}

export function toggleFeatures<T>({ name, on, off }: ToggleFeatures<T>): T {
    if (getFeaturesFlags(name)) {
        return on();
    }

    return off();
}
