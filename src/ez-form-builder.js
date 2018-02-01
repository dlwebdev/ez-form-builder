"use strict";

function buildForm(formFields = []) {
  let form = "<form>";

  formFields.forEach((field, index) => {
    form += getHtmlForField(field);
  });

  form += "</form>";

  return form;
}


function getHtmlForField(field) {
  let fieldHtml = "";

  switch(field.type) {
     case "text": {
        // console.log("Text field wanted");

        fieldHtml = ` <input type="text"`;

        if (field.name) fieldHtml += ` name="${field.name}"`;

        fieldHtml += '/>';

        break;
     }
     case "select": {
        // console.log("Select wanted");

        fieldHtml = ` <select`;

        if (field.name) fieldHtml += ` name="${field.name}"`;

        fieldHtml += `></select> `;

        break;
     }
     default: {
        // console.log("Invalid field");
        fieldHtml = ` `;
        break;
     }
  }

  return fieldHtml;
}


module.exports = {
  buildForm : buildForm
};
