import React from "react";
import { SkillImprovementContext } from "./skill-improvement.context";
import { getValue, getImprovements } from "./skill.functions";
import {
    ISkillListComponentProps,
    ISkillListWrapperProps,
    IItemPartialProps,
    IRenderItemProps
} from "./skill.interfaces";

export class SkillList extends React.Component<ISkillListComponentProps> {
    static displayName = "SkillList";
    static contextType = SkillImprovementContext;

    // #region partials
    static Wrapper = ({ children, className }: ISkillListWrapperProps) => (
        <section className={className}>{children}</section>
    );

    static Item = ({ name, value, className }: IItemPartialProps) => (
        <article className={className}>
            <span>{name} </span>
            <span>{value} </span>
            <span>{Math.floor(value / 2)} </span>
            <span>{Math.floor(value / 5)}</span>
        </article>
    );
    // #endregion

    render() {
        return (
            <SkillList.Wrapper className="skill-list">
                {this.props.skills.map(this.renderItem)}
            </SkillList.Wrapper>
        );
    }

    renderItem = ({ id, base, name }: IRenderItemProps) => {
        const currentValue = getValue(
            getImprovements(this.context.skills, id),
            base
        );

        return (
            <SkillList.Item
                className={`skill-list__item skill-list__item--${id}`}
                name={name}
                value={currentValue}
                key={id}
            />
        );
    };
}
