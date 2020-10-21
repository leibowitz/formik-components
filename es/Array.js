import * as React from "react";
import { Field, FieldArray } from "formik";
export function Array({ name, renderItem, renderNewPlaceholder }) {
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
                return value.map((_, i) => renderItem(i, false, array, name + "." + i + "."));
            }
        }));
    }));
}
//# sourceMappingURL=Array.js.map