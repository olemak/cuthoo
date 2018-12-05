import React from "react";
import { SkillImprovementContext } from "./skill-improvement.context";
import { getValue, getImprovements } from "./skill.functions";

export class SkillList extends React.Component {
    static displayName = "SkillList";
    static contextType = SkillImprovementContext;

    // #region partials
    static Wrapper = ({ children } = {}) => (
        <section className="skill-list__list">{children}</section>
    );

    static Item = ({ name, value, className } = {}) => (
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
            <SkillList.Wrapper>
                {this.props.skills.map(this.renderItem)}
            </SkillList.Wrapper>
        );
    }

    renderItem = ({ id, base, name } = {}) => {
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
