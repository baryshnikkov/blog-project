import { FeatureFlags } from '@/shared/types/featureFlags';
import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/shared/const/localstorage';

const defaultFeatures: FeatureFlags = {
    isAppRedesigned:
        localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new',
};

let featuresFlags: FeatureFlags = {
    ...defaultFeatures,
};

export const setFeaturesFlag = (newFeaturesFlag: FeatureFlags) => {
    if (newFeaturesFlag) {
        featuresFlags = newFeaturesFlag;
    }
};

export const getFeaturesFlag = (flag: keyof FeatureFlags) => {
    return featuresFlags[flag];
};

export function getAllFeatureFlags() {
    return featuresFlags;
}
