// Code goes here!

class Department {
  // name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department: (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "ACC");
  }

}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "IT");
  }
  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports)
  }
}

const it = new ITDepartment("d1", ["Max"]);
const accounting = new AccountingDepartment("d2", []);
accounting.addReport("Something went wrong...")

it.addEmployee("Max");
it.addEmployee("Manu");

console.log(it)
console.log(accounting)

// accounting.employees[2] = "Anna";

// it.describe();
// it.printEmployeeInformation();
