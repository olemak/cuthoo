import React from "react";
import { SkillImprovementContext } from "./skill-improvement.context";
import { getValue, getImprovements } from "./skill.functions";

//const renderSkill = props => <Skill {...props} key={props.id} />;

export class SkillList extends React.Component {
    render() {
        return <section>{this.props.skills.map(this.renderItem)}</section>;
    }

    renderItem = props => {
        const currentValue = getValue(
            getImprovements(this.context.skills, props.id),
            props.base
        );

        return (
            <article>
                {props.name} {currentValue} | {Math.floor(currentValue / 2)} |{" "}
                {Math.floor(currentValue / 5)}
            </article>
        );
    };
}
SkillList.contextType = SkillImprovementContext;
