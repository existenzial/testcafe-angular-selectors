# AngularJS selector extentions
`AngularJSSelector` contains a set of static methods to search for an HTML element by the specified binding (`byModel`, `byBinding` and etc.).

## Usage

```js
import { AngularJSSelector } from 'testcafe-angular-selectors';
import { Selector } from 'testcafe';

fixture `TestFixture`
    .page('http://todomvc.com/examples/angularjs/');

test('add new item', async t => {
    await t
        .typeText(AngularJSSelector.byModel('newTodo'), 'new item')
        .pressKey('enter')
        .expect(Selector('#todo-list').visible).ok();
});
```

See more examples [here](test/angularjs-selector-test.js).

## API
### byBinding
Find elements by text binding. Does a partial match, so any elements bound to variables containing the input string will be returned.
```js
AngularJSSelector.byBinding(bindingDescriptor, parentSelector)
```
Parameter                   | Description
--------------------------- | -----------
bindingDescriptor                 |  The JavaScript expression to which the element's `textContent` is bound.
parentSelector&#160;*(optional)*  | A TestCafe [selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors.html). If specified, TestCafe will search for the target element among the descendants of the element identified by this selector.

> We don't support deprecated syntax `AngularJSSelector.byBinding('{{person.name}}')`

### byExactBinding
Find elements by exact binding.
```js
AngularJSSelector.byExactBinding(bindingDescriptor, parentSelector)
```
Parameter                   | Description
--------------------------- | -----------
bindingDescriptor                 |  The JavaScript expression to which the element's `textContent` is bound.
parentSelector&#160;*(optional)*  | A TestCafe [selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors.html). If specified, TestCafe will search for the target element among the descendants of the element identified by this selector.

### byModel
Find elements by 'ng-model' expression
```js
AngularJSSelector.byModel(model, parentSelector)
```
Parameter                   | Description
--------------------------- | -----------
model                             | The JavaScript expression used to bind a property on the scope to an input, select, textarea (or a custom form control).
parentSelector&#160;*(optional)*  | A TestCafe [selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors.html). If specified, TestCafe will search for the target element among the descendants of the element identified by this selector.

### byOptions

Find elements by 'ng-options' expression.
```js
AngularJSSelector.byOptions(optionsDescriptor, parentSelector)
```
Parameter                   | Description
--------------------------- | -----------
optionsDescriptor                 | The JavaScript expression used to generate a list of <option> elements for the <select> element.
parentSelector&#160;*(optional)*  | A TestCafe [selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors.html). If specified, TestCafe will search for the target element among the descendants of the element identified by this selector.

### byRepeater
Find elements by repeater. Does a partial match, so any elements bound to variables containing the input string will be returned.
```js
AngularJSSelector.byRepeater(repeatDescriptor, parentSelector)
```
Parameter                   | Description
--------------------------- | -----------
repeatDescriptor                  | The JavaScript expression used to instantiate a template.
parentSelector&#160;*(optional)*  | A TestCafe [selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors.html). If specified, TestCafe will search for the target element among the descendants of the element identified by this selector.

### byExactRepeat
Find elements by exact repeater.
```js
AngularJSSelector.byExactRepeater(repeatDescriptor, parentSelector)
```
Parameter                   | Description
--------------------------- | -----------
repeatDescriptor                  | The JavaScript expression used to instantiate a template.
parentSelector&#160;*(optional)*  | A TestCafe [selector](https://devexpress.github.io/testcafe/documentation/test-api/selecting-page-elements/selectors.html). If specified, TestCafe will search for the target element among the descendants of the element identified by this selector.
