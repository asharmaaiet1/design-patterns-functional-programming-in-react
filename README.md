# Design Patterns: Functional Programming in React

React is heavily influenced by and primarily leverages the principles of functional programming (FP), especially with the use of functional components and Hooks. It encourages building user interfaces by composing pure functions and managing data with immutability.

## Core Functional Programming Concepts in React

- ### Pure Functions:
  A core FP concept where a function, given the same input (props and state), always returns the same output (JSX) without any side effects.

### &nbsp; &nbsp; - In React:

Functional components are essentially pure functions. They take props as arguments and return React elements. This makes the components predictable and easy to test.

- ### Immutability:
  Data should not be changed after it is created. Instead, a new data structure is created with the necessary modifications.

### &nbsp; &nbsp; - In React:

Props are immutable and read-only within a component. State updates also follow this principle; for example, when updating an array or object in state, you create a new one using methods like the spread operator (...) rather than modifying the original directly.

- ### Composition:

  Complex UIs are built by combining many simple, small, and reusable components. This is a core pattern in React, often preferred over class inheritance.

- ### First-Class and Higher-Order Functions:
  Functions are treated as values that can be passed as arguments, returned from other functions, and assigned to variables.

### &nbsp; &nbsp; - In React:

This enables powerful patterns like passing event handlers as props and using Higher-Order Components (HOCs) or custom Hooks for shared logic.

- ### Declarative Style:
  You describe what the UI should look like for a given state, and React handles how to update the DOM efficiently to match that description, in contrast to imperative programming which focuses on step-by-step instructions for DOM manipulation.
