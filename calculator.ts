
// create a class calculator
class Calculator {
    // create a method add
    // calculate
    add(a: number, b: number): number {
        return a + b;
    }
    // create a method subtract
    // calculate
    subtract(a: number, b: number): number {
        return a - b;
    }
    // create a method multiply
    multiply(a: number, b: number): number {
        return a * b;
    
    }
    divide(a: number, b: number): number {
        return a / b;
    }
     
    
}

// create a class calculator
interface ICalculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;
    divide(a: number, b: number): number;
    
}
function calculatorFactory(): ICalculator {
    return new Calculator();
}

// export the class calculator
export default Calculator;



