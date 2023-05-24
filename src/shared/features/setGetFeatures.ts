import { FeatureFlags } from '@/shared/types/featureFlags';

let featuresFlags: FeatureFlags = {};

export const setFeaturesFlags = (newFeaturesFlag: FeatureFlags) => {
    if (newFeaturesFlag) {
        featuresFlags = newFeaturesFlag;
    }
};

export const getFeaturesFlags = (flag: keyof FeatureFlags) => {
    return featuresFlags[flag];
};
