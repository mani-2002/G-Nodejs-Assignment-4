const employees = [
  {
    name: "Akhil",
    age: 20,
    salary: 50000,
    department: "development",
    city: "Hyderabad",
  },
  {
    name: "Babu",
    age: 25,
    salary: 60000,
    department: "marketing",
    city: "Delhi",
  },
  {
    name: "Babu",
    age: 25,
    salary: 60000,
    department: "marketing",
    city: "Pune",
  },
  {
    name: "Chaitanya",
    age: 30,
    salary: 70000,
    department: "Sales",
    city: "Mumbai",
  },
  {
    name: "Divya",
    age: 28,
    salary: 55000,
    department: "development",
    city: "Bangalore",
  },
  {
    name: "Eesha",
    age: 22,
    salary: 48000,
    department: "hr",
    city: "Chennai",
  },
  {
    name: "Farhan",
    age: 27,
    salary: 62000,
    department: "marketing",
    city: "Hyderabad",
  },
  {
    name: "Gaurav",
    age: 32,
    salary: 72000,
    department: "Sales",
    city: "Delhi",
  },
  {
    name: "Harini",
    age: 29,
    salary: 53000,
    department: "development",
    city: "Pune",
  },
  {
    name: "Ishita",
    age: 24,
    salary: 49000,
    department: "hr",
    city: "Mumbai",
  },
  {
    name: "Jatin",
    age: 31,
    salary: 71000,
    department: "sales",
    city: "Bangalore",
  },
  {
    name: "Kartika",
    age: 26,
    salary: 59000,
    department: "development",
    city: "Chennai",
  },
  {
    name: "Lalita",
    age: 23,
    salary: 54000,
    department: "marketing",
    city: "Hyderabad",
  },
  {
    name: "Manan",
    age: 33,
    salary: 73000,
    department: "Sales",
    city: "Delhi",
  },
  {
    name: "Neha",
    age: 21,
    salary: 47000,
    department: "hr",
    city: "Pune",
  },
  {
    name: "Omkar",
    age: 30,
    salary: 70000,
    department: "marketing",
    city: "Mumbai",
  },
  {
    name: "Priyanka",
    age: 28,
    salary: 56000,
    department: "development",
    city: "Bangalore",
  },
  {
    name: "Rajesh",
    age: 22,
    salary: 50000,
    department: "hr",
    city: "Chennai",
  },
];

function getEmp() {
  const empWithTier = employees.map((employee) => ({
    ...employee,
    tier: employee.salary > 50000 ? 1 : 2,
  }));
  return empWithTier;
}
function getEmpByCity(city) {
  const empInCity = employees.filter((employee) => employee.city === city);
  return empInCity;
}
function getTotalSalary() {
  const totalSalary = employees.reduce(
    (sum, employee) => sum + employee.salary,
    0
  );
  return totalSalary;
}
function getTotalSalOfEmpInHyd() {
  const hydEmp = employees.filter((employee) => employee.city === "Hyderabad");
  const totalEmpSalHyd = hydEmp.reduce(
    (sum, employee) => sum + employee.salary,
    0
  );
  return totalEmpSalHyd;
}
const allEmp = getEmp();
const hydEmp = getEmpByCity("Hyderabad");
const total = getTotalSalary();
const totalHydEmpSal = getTotalSalOfEmpInHyd();
console.log(allEmp);
console.log("Employees in Hyderabad:", hydEmp);
console.log("Total salary:", total);
console.log("Total salary of Employees in Hyderabad :", totalHydEmpSal);