import * as React from "react";
import { useFormikContext } from "formik";
import debounce from "lodash.debounce";
export const AutoSaveContext = React.createContext({
    pause: () => { },
});
export function AutoSave({ delayMs, pause, }) {
    const ctx = useFormikContext();
    const debouncedSubmit = React.useCallback(debounce(() => {
        // this might not work
        if (ctx.dirty && !ctx.isSubmitting) {
            ctx.submitForm().then(() => { });
        }
    }, delayMs), [delayMs, ctx.dirty, ctx.submitForm, pause]);
    React.useEffect(() => {
        if (!pause) {
            debouncedSubmit();
        }
    }, [ctx.values, pause]);
    return null;
}
export function AutoSaveProvider({ children, }) {
    const [pause, setPause] = React.useState(false);
    const value = React.useMemo(() => ({
        pause: (value) => setPause(value),
    }), [pause]);
    return (React.createElement(AutoSaveContext.Provider, { value: value },
        children,
        React.createElement(AutoSave, { delayMs: 1000, pause: pause })));
}
export function SimpleAutoSave({ delayMs }) {
    const ctx = useFormikContext();
    const debouncedSubmit = React.useCallback(debounce(() => {
        // this might not work
        if (ctx.dirty && !ctx.isSubmitting) {
            ctx.submitForm().then(() => { });
        }
    }, delayMs), [delayMs, ctx.dirty, ctx.submitForm]);
    React.useEffect(() => {
        debouncedSubmit();
    }, [ctx.values]);
    return null;
}
//# sourceMappingURL=AutoSave.js.map