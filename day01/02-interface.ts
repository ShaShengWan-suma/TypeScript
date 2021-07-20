// interface
// TypeScript的核心原则之一是对值所具有的结构进行类型检查。它有时被称作"鸭式辫型法"或"结构性子类型化"。在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约；

// 接口初探
function printLabel (labelledObj: { label: string }) {
    console.log(labelledObj.label)
}
let myObj = { size:10, label: 'Size 10 Object' }
printLabel(myObj)
/*
    类型检查器会查看printLabel的调用。printLabel有一个参数，并要求这个对象参数有一个名为label类型为string的属性。需要注意的是，我们传入的对象参数实际上会包含很多属性，但是编译器只会检查那些必需的属性是否存在，并且其类型是否匹配。然而，有些时候TypeScript却并不会这么宽松
 */
interface LabelledValue {
    label: string
}
function printLabel2 (labelledObj: LabelledValue) {
    console.log(labelledObj.label)
}
let obj = { size: 10, label: 'Size 10 Object' }
printLabel2(obj)
