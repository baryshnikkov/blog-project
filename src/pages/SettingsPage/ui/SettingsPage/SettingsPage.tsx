import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { DesignSwitcher } from '@/features/DesignSwitcher';

const SettingsPage = memo(() => {
    const { t } = useTranslation();

    return (
        <Page>
            <VStack gap="16">
                <Text title={t('Настройки пользователя')} />
                <DesignSwitcher />
            </VStack>
        </Page>
    );
});

export default SettingsPage;
