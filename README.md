# bit-hooks-example
Example of writing an extension that register to bit's hooks

## About
This project show how you can write an extension for bit which will register to bit's hooks like pre-tag, pre-export etc'.
Those example will only register to client-side hooks, they will only run in a specific workspace after you install the extension.
A full list of the existing hook and more documentation can be found [here](https://docs.bit.dev/docs/ext-developing-extensions#registering-an-action-to-a-hook)

*disclaimer:*  
*This API's of bit are working in progress and might break in the future, use it on your own risk.*

## Project structure
```
.
├── README.md
├── component-workspace
│   └── src
│       └── my-comp
│           └── index.js
└── extension-workspace
    └── src
        └── bit-hooks
            └── index.js
```
