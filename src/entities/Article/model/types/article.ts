import { User } from 'entities/User';

export enum ArticleSortField {
    VIEWS = 'views',
    CREATED = 'createdAt',
    TITLE = 'title',
}

export enum ArticleBlockTypes {
    CODE = 'CODE',
    TEXT = 'TEXT',
    IMAGE = 'IMAGE',
}

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockTypes;
}

export interface ArticleCodeBlock extends ArticleBlockBase{
    type: ArticleBlockTypes.CODE;
    code: string;
}

export interface ArticleTextBlock extends ArticleBlockBase{
    type: ArticleBlockTypes.TEXT;
    title?: string;
    paragraphs: string[];
}

export interface ArticleImageBlock extends ArticleBlockBase{
    type: ArticleBlockTypes.IMAGE;
    src: string;
    title: string;
}

export type ArticleBlocks = ArticleCodeBlock | ArticleTextBlock | ArticleImageBlock;

export enum ArticleTypes {
    ALL = 'ALL',
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export enum ArticleView {
    LIST = 'LIST',
    GRID = 'GRID'
}

export interface Article {
    id: string;
    title: string;
    user: User;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleTypes[];
    blocks: ArticleBlocks[];
}

export interface ArticleDetailsSchema {
    isLoading: boolean;
    error?: string;
    data?: Article;
}
