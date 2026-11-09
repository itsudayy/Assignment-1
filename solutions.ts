const multiplyValue = (value : number, multiplier ?: number) => {
    if (typeof multiplier !== "undefined") {
        return value * multiplier;
    }
    return value * 2;
}
const processInput = (value: string | number | boolean): string | number => {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }

    if (typeof value === "number") {
        return value * 10;
    }

    return value ? "Active" : "Inactive";
}
const formatCoordinate = (coordinate : readonly [number, number, string]) : string => {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}
const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    const result: T[] = [];
    for (const array of arrays) {
        for (const element of array) {
            result.push(element);
        }
    }
    return result;
}
interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}
const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    return courses.filter(course =>
        course.isPublished === true &&
        course.students >= minStudents
    );
}
const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];
const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    return items.map((item) => item[key]);
}
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];
class Employee {
    protected name: string;
    private baseSalary: number;
    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    private department: string;
    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const validateAgeAsync = async (age: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
        } else {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
    });
}