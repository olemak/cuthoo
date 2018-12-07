export interface ISkillListComponentProps {
    skills: ISkill[];
}

export interface ISkill {
    id: string;
    name: string;
    base: number;
    description?: string;
}

export interface IRenderItemProps extends ISkill {}

export interface ISkillListWrapperProps {
    children: React.ReactNode;
    className?: string;
}

export interface IItemPartialProps {
    name: string;
    value: number;
    className: string;
}
