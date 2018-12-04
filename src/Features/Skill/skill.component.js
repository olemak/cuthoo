import React from "react";
// import { SkillImprovementContext } from "./skill-improvement.context";

export class Skill extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                {/* <p>{SkillImprovementContext.Consumer.name}</p> */}
            </div>
        );
    }
}
