import React from "react";
import { SkillImprovementContext } from "./skill-improvement.context";

export class Skill extends React.Component {
    getSum(total, current) {
        return total + current;
    }

    render() {
        const currentSkill = this.context.skills.find(
            skill => skill.id === this.props.id
        );

        const currentValue = currentSkill.improvements
            .map(improvement => improvement.value)
            .reduce(this.getSum, this.props.base);

        return (
            <li>
                {this.props.name} {currentValue} |{" "}
                {Math.floor(currentValue / 2)} | {Math.floor(currentValue / 5)}
            </li>
        );
    }
}
Skill.contextType = SkillImprovementContext;
