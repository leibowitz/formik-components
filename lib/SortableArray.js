"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var formik_1 = require("formik");
var react_sortable_hoc_1 = require("react-sortable-hoc");
var Item = react_sortable_hoc_1.SortableElement(function (_a) {
    var children = _a.children;
    return (React.createElement(React.Fragment, null, children));
});
var SortableList = react_sortable_hoc_1.SortableContainer(function (_a) {
    var renderItem = _a.renderItem, value = _a.value, array = _a.array, name = _a.name;
    return (React.createElement("div", null, value.map(function (_, i) { return (React.createElement(Item, { key: i, index: i }, renderItem(i, false, array, name + "." + i + "."))); })));
});
function SortableArray(_a) {
    var name = _a.name, renderNewPlaceholder = _a.renderNewPlaceholder, renderItem = _a.renderItem;
    return (React.createElement(formik_1.Field, { name: name }, function (_a) {
        var field = _a.field, form = _a.form;
        return (React.createElement(formik_1.FieldArray, { name: name }, function (array) {
            var value = field.value || [];
            if (renderNewPlaceholder) {
                return value
                    .map(function (_, i) {
                    return renderItem(i, false, array, name + "." + i + ".");
                })
                    .concat([
                    renderItem(value.length, true, array, name + "." + value.length + "."),
                ]);
            }
            else {
                return (React.createElement(SortableList, { renderItem: renderItem, value: value, array: array, name: name, onSortEnd: function (_a) {
                        var oldIndex = _a.oldIndex, newIndex = _a.newIndex;
                        array.move(oldIndex, newIndex);
                    }, useDragHandle: true, lockAxis: "y", lockToContainerEdges: true }));
            }
        }));
    }));
}
exports.SortableArray = SortableArray;
//# sourceMappingURL=SortableArray.js.map