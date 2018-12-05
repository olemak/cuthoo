function getSum(total, current) {
    return total + current;
}

export function getValue(currentSkill, base) {
    return currentSkill.improvements
        .map(improvement => improvement.value)
        .reduce(getSum, base);
}
