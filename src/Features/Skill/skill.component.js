import React from "react";
import { SkillImprovementContext } from "./skill-improvement.context";

export class Skill extends React.Component {
    getSum(total, current) {
        console.dir(total);
        console.dir(current);
        console.log(current + total);
        return total + current.value;
    }

    render() {
        const currentSkill = this.context.skills.find(
            skill => skill.id === this.props.id
        );
        const currentValue = currentSkill.improvements
            .map(improvement => improvement.value)
            .reduce(this.getSum, this.props.base);
        console.log("---------");
        return (
            <div>
                <h3>{this.props.name}</h3>
                {<p>{currentSkill.id}</p>}
                {<p>{currentValue}</p>}
            </div>
        );
    }
}
Skill.contextType = SkillImprovementContext;
