import React from "react";
import { SkillImprovementContext } from "./skill-improvement.context";
import { getValue } from "./skill.functions";

export class Skill extends React.Component {
    render() {
        const currentSkill = this.getImprovements();
        const currentValue = getValue(currentSkill, this.props.base);

        return (
            <li>
                {this.props.name} {currentValue} |{" "}
                {Math.floor(currentValue / 2)} | {Math.floor(currentValue / 5)}
            </li>
        );
    }

    getImprovements() {
        return this.context.skills.find(skill => skill.id === this.props.id);
    }
}
Skill.contextType = SkillImprovementContext;
