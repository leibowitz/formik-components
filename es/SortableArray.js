import * as React from "react";
import { Field, FieldArray } from "formik";
import { SortableElement, SortableContainer } from "react-sortable-hoc";
const Item = SortableElement(({ children }) => (React.createElement(React.Fragment, null, children)));
const SortableList = SortableContainer(({ renderItem, value, array, name, keyFunc }) => {
    return (React.createElement("div", null, value.map((item, i) => {
        const keyVal = keyFunc ? keyFunc(item) : i;
        return (React.createElement(Item, { key: keyVal, index: i }, renderItem(i, false, array, name + "." + i + ".")));
    })));
});
export function SortableArray({ name, renderNewPlaceholder, renderItem, keyFunc }) {
    return (React.createElement(Field, { name: name }, ({ field, form }) => {
        return (React.createElement(FieldArray, { name: name }, (array) => {
            const value = field.value || [];
            if (renderNewPlaceholder) {
                return value
                    .map((_, i) => renderItem(i, false, array, name + "." + i + "."))
                    .concat([
                    renderItem(value.length, true, array, name + "." + value.length + "."),
                ]);
            }
            else {
                return (React.createElement(SortableList, { renderItem: renderItem, value: value, array: array, name: name, keyFunc: keyFunc, onSortEnd: ({ oldIndex, newIndex, }) => {
                        array.move(oldIndex, newIndex);
                    }, useDragHandle: true, lockAxis: "y", lockToContainerEdges: true }));
            }
        }));
    }));
}
//# sourceMappingURL=SortableArray.js.map