const EzFormBuilder = require('../dist/ez-form-builder');

// In: [{type:'text'}, {type: 'select'}, ...]
// Out: <input type="text" /> <select></select>

const sampleJson = [
  {type: 'text', name: 'textInput1'},
  {type: 'select', name: 'selectTest'},
  {type: 'password', name: 'userPassword'},
  {type: 'email', name: 'userEmail'}
];

describe('EzFormBuilder', function() {

    describe('buildForm', function() {
        it('should be satisfied if this function return a form as a string', function() {
            expect(EzFormBuilder.buildForm()).toBeTruthy();
            expect(typeof EzFormBuilder.buildForm()).toEqual('string');
            expect(EzFormBuilder.buildForm()).toContain('<form>');

            expect(EzFormBuilder.buildForm([
              {type: 'text'},
              {type: 'select'}
            ])).toEqual(`<form> <input type="text"/> <select></select> </form>`);

            expect(EzFormBuilder.buildForm([
              {type: 'text', name: 'textInput1'},
              {type: 'select', name: 'selectTest'}
            ])).toEqual(`<form> <input type="text" name="textInput1"/> <select name="selectTest"></select> </form>`);

        });
    });
});
