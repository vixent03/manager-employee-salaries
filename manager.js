const Employee = require("./employee")


class Manager extends Employee {
    constructor(name, salary, title, manager, Employees = []) {
        super(name, salary, title, manager)
        this.Employees = Employees
    }
    addEmployee(employee) {
        this.Employees.push(employee)
    }
    calculateBonus(multiplier) {
        let sum = 0;
        let _totalSubSalary = () => {
            for (employee of this.Employees) {
                if (employee instanceof Employee) {
                    sum += employee.salary
                } else {
                    if (enployee instanceof Manager) {
                        _totalSubSalary(employee.Employees)
                    }
                }
            }
            return sum
        }
        return _totalSubSalary() * multiplier
    }
}

const splinter = new Manager('Splinter', 100000, 'Sensei');
console.log('Before: ', splinter);

const leo = new Employee('Leonardo', 90000, 'Ninja', splinter);
const mikey = new Employee('Michelangelo', 90000, 'Ninja', splinter);
const donnie = new Employee('Donatello', 90000, 'Ninja', splinter);
const raph = new Employee('Raphael', 90000, 'Ninja', splinter);

console.log('After: ', splinter);