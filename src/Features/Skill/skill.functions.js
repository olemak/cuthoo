function getSum(total, current) {
    return total + current;
}

export function getValue(currentSkill, base) {
    return currentSkill.improvements
        .map(improvement => improvement.value)
        .reduce(getSum, base);
}

export function getImprovements(skillImprovements, id) {
    return skillImprovements.find(skill => skill.id === id);
}
