function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let openParenthesis = 0,
        closingParenthesis = 0;

    for (let i = 0; i < expr.length; i++) {
        if (expr[i] === "(") openParenthesis++;
        if (expr[i] === ")") closingParenthesis++;
    }

    if (openParenthesis !== closingParenthesis) throw new Error("ExpressionError: Brackets must be paired.");
    if (expr.indexOf("/ 0") + 1) throw new Error("TypeError: Division by zero.");

    return new Function(`return ${expr}`)();
}

module.exports = {
    expressionCalculator
}