import * as React from "react"
import { Field, FieldProps, FieldArray, FieldArrayRenderProps } from "formik"
import { SortableElement, SortableContainer } from "react-sortable-hoc"

const Item = SortableElement(({ children }: { children: React.ReactNode }) => (
  <>{children}</>
))

const SortableList = SortableContainer(
  ({ renderItem, value, array, name, keyFunc }: any) => {
    return (
      <div>
        {value.map((item: any, i: number) => {
          const keyVal = keyFunc ? keyFunc(item) : i;
          return (
            <Item key={keyVal} index={i}>
              {renderItem(i, false, array, name + "." + i + ".")}
            </Item>
          )
        })}
      </div>
    )
  },
)

interface Props {
  name: string
  renderNewPlaceholder: boolean
  keyFunc: (item: any) => string
  renderItem: (
    i: number,
    isLast: boolean,
    array: FieldArrayRenderProps,
    path: string,
  ) => React.ReactNode
}

export function SortableArray({
  name,
  renderNewPlaceholder,
  renderItem,
  keyFunc
}: Props) {
  return (
    <Field name={name}>
      {({ field, form }: FieldProps<any>) => {
        return (
          <FieldArray name={name}>
            {(array) => {
              const value = field.value || []
              if (renderNewPlaceholder) {
                return value
                  .map((_: any, i: number) =>
                    renderItem(i, false, array, name + "." + i + "."),
                  )
                  .concat([
                    renderItem(
                      value.length,
                      true,
                      array,
                      name + "." + value.length + ".",
                    ),
                  ])
              } else {
                return (
                  <SortableList
                    renderItem={renderItem}
                    value={value}
                    array={array}
                    name={name}
                    keyFunc={keyFunc}
                    onSortEnd={({
                      oldIndex,
                      newIndex,
                    }: {
                      oldIndex: number
                      newIndex: number
                    }) => {
                      array.move(oldIndex, newIndex)
                    }}
                    useDragHandle={true}
                    lockAxis={"y"}
                    lockToContainerEdges={true}
                  />
                )
              }
            }}
          </FieldArray>
        )
      }}
    </Field>
  )
}
