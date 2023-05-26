import { FeatureFlags } from '@/shared/types/featureFlags';

let featuresFlags: FeatureFlags = {};

export const setFeaturesFlag = (newFeaturesFlag: FeatureFlags) => {
    if (newFeaturesFlag) {
        featuresFlags = newFeaturesFlag;
    }
};

export const getFeaturesFlag = (flag: keyof FeatureFlags) => {
    return featuresFlags[flag];
};
