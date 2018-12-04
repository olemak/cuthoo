import React from "react";
import { Skill } from "./skill.component";

const renderSkill = props => <Skill {...props} key={props.id} />;

export class SkillList extends React.Component {
    render() {
        return <div>{this.props.skills.map(renderSkill)}</div>;
    }
}
