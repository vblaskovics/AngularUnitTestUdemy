import { TestBed } from '@angular/core/testing';
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";


describe("CalculatorService", () => {
  let loggerServiceSpy:jasmine.SpyObj<LoggerService>;
  let calculatorService:CalculatorService;
  
  beforeEach(() => {
    let loggerSpyObj = jasmine.createSpyObj('LoggerService', ['log']);

    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        { provide: LoggerService, useValue: loggerSpyObj}
      ]
    })

    calculatorService = TestBed.inject(CalculatorService);
    loggerServiceSpy = TestBed.inject(LoggerService) as jasmine.SpyObj<LoggerService>;
  });

  it("should add two numbers", () => {
    const result = calculatorService.add(2,3);
    expect(result).toBe(5);
    expect(loggerServiceSpy.log).toHaveBeenCalledTimes(1);
  });
  
  it("should subtract two numbers", () => {
    const result = calculatorService.subtract(2,3);  
    expect(result).toBe(-1, "unexpected substraction result");
    expect(loggerServiceSpy.log).toHaveBeenCalledTimes(1);
  });
});
