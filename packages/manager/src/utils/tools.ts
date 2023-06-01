/**
 * 参数1：label数组  参数2：label对应的val   结果：val对应的label
 * @param arr 标签数组
 * @param value 值
 * @returns val对应的label
 */
export const getLabel = (arr: Label[], value: number): string => {
    return arr.find(item => item.value === value)?.label || ''
}

export interface Label {
    label: string
    value: number
}
