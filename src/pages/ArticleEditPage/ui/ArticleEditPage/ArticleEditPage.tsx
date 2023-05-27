import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { cn } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <Page className={cn('', {}, [className])}>
            {isEdit ? `MOC EDIT, id = ${id}` : 'MOC CREATE'}
        </Page>
    );
});

export default ArticleEditPage;
