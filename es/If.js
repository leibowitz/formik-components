import * as React from "react";
import { Field } from "formik";
export function If({ name, children, }) {
    return (React.createElement(Field, { name: name }, ({ field }) => {
        return field.value ? children : null;
    }));
}
export function IfNot({ name, children, }) {
    return (React.createElement(Field, { name: name }, ({ field }) => {
        return !field.value ? children : null;
    }));
}
export function IfValid({ children }) {
    return (React.createElement(Field, { name: name }, ({ form }) => form.isValid && children));
}
export function IfDirty({ children }) {
    // const ctx = useFormikContext()
    return (React.createElement(Field, { name: name }, ({ form }) => (form.dirty ? children : null)));
}
export function IfSubmitting({ children }) {
    return (React.createElement(Field, null, ({ form }) => (form.isSubmitting ? children : null)));
}
export function IfValidating({ children }) {
    return (React.createElement(Field, null, ({ field, form }) => form.isValidating ? children : null));
}
export function IfTouched({ children }) {
    return (React.createElement(Field, null, ({ field, form }) => (form.touched ? children : null)));
}
export function IfError({ children }) {
    return (React.createElement(Field, null, ({ field, form }) => form.errors && children));
}
export function IfField({ name, children, value, }) {
    return (React.createElement(Field, null, ({ field, form }) => value === undefined
        ? field.value && children
        : field.value == value && children));
}
//# sourceMappingURL=If.js.map