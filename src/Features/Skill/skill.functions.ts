function getSum(total: number, current: number) {
    return total + current;
}

export function getValue(currentSkill: any, base: number) {
    return currentSkill.improvements
        .map((improvement: any) => improvement.value)
        .reduce(getSum, base);
}

export function getImprovements(skillImprovements: number[], id: string) {
    return skillImprovements.find((skill: any) => skill.id === id);
}
