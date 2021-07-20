// 布尔值
var isDone = false;
// 数字
var number = 1;
// 字符串
var str = 'aaa';
// 数组 在元素类型后面接[]
var arr = [1, 2, 3];
var arr2 = ['a', 'b', 'c'];
var arr3 = [[], []];
// 使用数组泛型 Array<元素类型>
var arr4 = [1, 2, 3];
// 元组 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
var x;
x = ['hello', 1];
// 当访问一个越界的元素，会使用联合类型代替
// x[2] = [123]
// 枚举 enum类型是对JavaScript标准数据类型的一个补充。像C#等其他语言一样，使用枚举类型可以为一组数值赋予友好的名字
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
// 默认情况下，从0开始为元素编号。也可以手动的指定成员的数值。
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Green"] = 3] = "Green";
})(Colors || (Colors = {}));
var a2 = Colors.Green;
console.log(a2);
