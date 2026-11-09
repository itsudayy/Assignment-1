# How Do Generics Work in TypeScript, and How Do They Help with Promise<T>?

## Introduction

Generics are an important feature of TypeScript that allow developers to create reusable and type-safe functions, interfaces, and classes. Instead of specifying one fixed data type, generics allow a function to work with different types while preserving type information.

## Understanding Generics

A generic type acts like a placeholder that is replaced with an actual type when the function is called.

For example:

```typescript
function wrapInArray<T>(value: T): T[] {
    return [value];
}

const names = wrapInArray<string>("Rakib");
const numbers = wrapInArray<number>(100);
```

Here, `T` represents the data type. TypeScript can also automatically infer the type from the argument.

## Generics with Promise<T>

Generics are particularly useful when working with asynchronous operations. A Promise represents a value that may become available in the future. `Promise<T>` tells TypeScript what type of value the Promise will return when it successfully resolves.

For example:

```typescript
function getUser(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Rakib");
        }, 1000);
    });
}
```

Here, `Promise<string>` means the Promise will resolve with a string.

We can also create a reusable generic function:

```typescript
function fetchData<T>(data: T): Promise<T> {
    return Promise.resolve(data);
}

fetchData<number>(100);
fetchData<string>("Hello");
```

The function works with different types without using `any`.

## Conclusion

Generics make TypeScript applications more flexible, reusable, and type-safe. When combined with `Promise<T>`, they help developers maintain accurate return types in asynchronous operations, making code easier to maintain and understand.
