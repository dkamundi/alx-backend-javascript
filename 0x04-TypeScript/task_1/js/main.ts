class Teacher {
  private readonly firstName: string;
  private readonly lastName: string;
  private fullTimeEmployee: boolean;
  private yearsOfExperience?: number;
  private location: string;
  private additionalAttributes: Record<string, any> = {};

  constructor({
    firstName,
    lastName,
    fullTimeEmployee,
    yearsOfExperience,
    location,
    ...restAttributes
  }: {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allow any additional attributes
  }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.yearsOfExperience = yearsOfExperience;
    this.location = location;
    this.additionalAttributes = restAttributes;
  }
}

const teacher3 = new Teacher({
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // You can add any additional attribute
});

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
  }

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const fullName = `${firstLetter}. ${lastName}`;
  return fullName;
  };

// Interface describing the constructor arguments
interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

// Interface describing the class structure
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentClassConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

