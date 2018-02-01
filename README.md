# ez-form-builder
NPM Module to build form

Made with TDD.

# Installation

Just use npm:
npm install --save ez-form-builder


# Usage

```javascript
const formbuilder = require("ez-form-builder");
```

### buildForm
Takes an array of fields and options. Returns an HTML form that contains those requested inputs.

```javascript
const sampleJson = [
  {type: 'text', name: 'textInput1'},
  {type: 'select', name: 'selectTest'},
  {type: 'password', name: 'userPassword'},
  {type: 'email', name: 'userEmail'}
];

let formHtml = formbuilder.buildForm(sampleJson);
// use the html as you desire
console.log('HTML for this form: ', formHtml);
```
