// Code goes here!

class Department {
  // name: string;
  static fiscalYear = 2020;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
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
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No reports");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      return;
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }

  addEmployee(name: string): void {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  printLastReport() {
    console.log(this.lastReport);
  }
}

const it = new ITDepartment("d1", ["Max"]);
// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

console.log(accounting, accounting2)



accounting.mostRecentReport = "Year end report";
accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport);
console.log(accounting.printLastReport());

accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.addEmployee("Baboon");
accounting.describe();

const employee1 = Department.createEmployee("Max");
console.log(employee1);

it.addEmployee("Max");
it.addEmployee("Manu");

console.log(it);
console.log(accounting);

// accounting.employees[2] = "Anna";

// it.describe();
// it.printEmployeeInformation();
