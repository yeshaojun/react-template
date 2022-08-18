export interface ROleEParams {
    key: number;
    value: string;
    authority: string
}

export const ROLE = [
    {
        key: 1,
        value: '超级管理员',
        authority: 'super',
    },
    {
        key: 2,
        value: '管理员',
        authority: 'admin',
    },
    {
        key: 3,
        value: '业务员',
        authority: 'user',
    },
    {
        key: 4,
        value: '只读用户',
        authority: 'only',
    },
];