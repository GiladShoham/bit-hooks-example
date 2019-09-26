# bit-hooks-example
Example of writing an extension that register to bit's hooks

## About
This project show how you can write an extension for bit which will register to bit's hooks like pre-tag, pre-export etc'.
Those example will only register to client-side hooks, they will only run in a specific workspace after you install the extension.
A full list of the existing hook and more documentation can be found [here](https://docs.bit.dev/docs/ext-developing-extensions#registering-an-action-to-a-hook)

*disclaimer:*  
*This API's of bit are working in progress and might break in the future, use it on your own risk.*

## Working with this project
### Project structure
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
This project contains two bit workspaces.
1. component-workspace - represent your real workspace where your component lives in. It might be your app or a shared lib component workspace for example.
2. extension-workspace - Contain the extension that perform the hooks registration and actions. 

Both project are already initialized by bit.

### Local development

### Moving to production
In order to really use this, you should export the extension component to a collection and install it as real extension in your workspace.
You can see already exported version of this extension here - . You can just import it using `-x` flag in any workspace and see it in action.
