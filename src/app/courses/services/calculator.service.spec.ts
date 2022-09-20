import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe("CalculatorService", () => {
  it("should add two numbers", () => {
    const logger = jasmine.createSpyObj('LoggerService', ['log']);

    const calculator = new CalculatorService(logger);

    const result = calculator.add(2,3);

    expect(result).toBe(5);
    expect(logger.log).toHaveBeenCalledTimes(1);
  });
  
  it("should subtract two numbers", () => {
    const calculator = new CalculatorService(new LoggerService());
  
    const result = calculator.subtract(2,3);
  
    expect(result).toBe(-1, "unexpected substraction result");
  });
});
