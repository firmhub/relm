# relm guide

Step by step guide to learning the framework and building a functioning application.

## Fundamentals

#### #1 [Basic component - Hello world](#TODO)

Create a static hello world page and learn about the bare minimum that goes inside a relm component

*Introduction to: `view` `startApp`*

--------

#### #2 [Components with props](#TODO)

Learn about props and how to customize a basic component which displays a greeting to the user.

*Introduction to: `props`*

--------

#### #3 [Components with state](#TODO)  

Create a textbox to learn about stateful components and how they manage and update state.

*Introduction to: `init` `update` `dispatch`*

--------

#### #4 [Nested components](#TODO)

Create a form component which uses the textbox and greeting we created earlier to show how information is shared between components.  

*Introduction to: `action creators` `immutability`*

--------

## Features

#### #5 [Helpers to reduce boilerplate](#TODO)

Jazz up our fancy greeting form by introducing component styles and while at it, learn about relm helpers that make writing these components easier.

*Introduction to: `component` `styles` `dispatch.using`*

--------

#### #6 [Build system and developer tools](#TODO)

Explore the tools provided by relm to help convert your code that can be used in browsers. Learn how to configure the build system and also aid during development of your app.

*Introduction to: `relm-compile`*

--------

#### #7 [Validations and async actions](#TODO)

Learn a pattern which lets us wrap components to do some extend their functionality. Our basic textbox will be enhanced to perform simple and some advanced validations every time the user types something.

*Introduction to: `dispatch.callback` `checkable`*

--------

#### #8 [Combining components](#TODO)

Create a login form using the components we have created in preceeding tutorials. Since the pattern of combining components will be used frequently in our application, there is a relm helper for that purpose.  

*Introduction to: `combineComponents`*
