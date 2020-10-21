import * as React from "react";
import { FieldArrayRenderProps } from "formik";
interface Props {
    name: string;
    renderNewPlaceholder: boolean;
    keyFunc: (item: any) => string;
    renderItem: (i: number, isLast: boolean, array: FieldArrayRenderProps, path: string) => React.ReactNode;
}
export declare function SortableArray({ name, renderNewPlaceholder, renderItem, keyFunc }: Props): JSX.Element;
export {};
//# sourceMappingURL=SortableArray.d.ts.map