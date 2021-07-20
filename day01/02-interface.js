// interface
// TypeScript的核心原则之一是对值所具有的结构进行类型检查。它有时被称作"鸭式辫型法"或"结构性子类型化"。在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约；
// 接口初探
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
function printLabel2(labelledObj) {
    console.log(labelledObj.label);
}
var obj = { size: 10, label: 'Size 10 Object' };
printLabel2(obj);
