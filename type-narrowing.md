# What Is Type Narrowing in TypeScript?

## Introduction

TypeScript provides a powerful feature called **Type Narrowing** that helps developers work safely with different data types. It allows TypeScript to determine the specific type of a variable within a particular block of code. This reduces errors and makes applications more reliable.

## Understanding Type Narrowing

Type Narrowing means reducing a variable's possible types by checking its type or structure. TypeScript supports several techniques, including `typeof`, `instanceof`, and the `in` operator.

### 1. Using typeof

The `typeof` operator checks the primitive type of a variable. It is useful when working with union types.

```typescript
function processValue(value: string | number) {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else {
        return value * 2;
    }
}
```

Here, TypeScript knows that `value` is a string inside the first block and a number inside the second block.

### 2. Using instanceof

The `instanceof` operator checks whether an object belongs to a particular class.

```typescript
class Dog {
    bark() {
        console.log("Woof!");
    }
}

function makeSound(animal: Dog | Date) {
    if (animal instanceof Dog) {
        animal.bark();
    }
}
```

TypeScript knows that `animal` is a `Dog` inside the condition.

### 3. Using the in Operator

The `in` operator checks whether an object contains a specific property.

```typescript
function getInfo(person: { name: string } | { age: number }) {
    if ("name" in person) {
        return person.name;
    }
    return person.age;
}
```

## Conclusion

Type Narrowing makes TypeScript code safer and easier to understand. By using `typeof`, `instanceof`, and `in`, developers can check types and access properties confidently without unnecessary type assertions.
