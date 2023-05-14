import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';

const ForbiddenPage = memo(() => {
    const { t } = useTranslation('forbidden');

    return (
        <Page>
            <Text
                theme={TextTheme.ERROR}
                title={t('У вас нет доступа к этой странице')}
                align={TextAlign.CENTER}
            />
        </Page>
    );
});

export default ForbiddenPage;
