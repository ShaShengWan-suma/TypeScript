// 布尔值
let isDone: boolean = false

// 数字
let number: number = 1

// 字符串
let str: string = 'aaa'

// 数组 在元素类型后面接[]
let arr: number[] = [1, 2, 3]
let arr2: string[] = ['a', 'b', 'c']
let arr3: [][] = [[], []]
// 使用数组泛型 Array<元素类型>
let arr4: Array<number> = [1, 2, 3]

// 元组 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
let x: [string, number]
x = ['hello', 1]
// 当访问一个越界的元素，会使用联合类型代替
// x[2] = [123]

// 枚举 enum类型是对JavaScript标准数据类型的一个补充。像C#等其他语言一样，使用枚举类型可以为一组数值赋予友好的名字
enum Color {Red, Green, Blue}
let c: Color = Color.Green
console.log(c)
// 默认情况下，从0开始为元素编号。也可以手动的指定成员的数值。
enum Colors {Red = 1, Green = 3}
let a2: string = Colors[3]
console.log(a2)

// Any 为哪些变成阶段还不清楚类型的变量指定一个类型。
let notSure: any = 3
notSure = '3'
notSure = false
notSure.toString()
// 如果使用Object类型，只是允许给它赋任意值。但却不能在它上面调用任意的方法，即使它真的有这些方法。

// Void 从某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。当一个函数没有返回值时，通常会见到其返回值类型是void
function warnUser (): void {
    console.log("This is my warning message")
}
// 声明一个void类型的变量没有什么大用，因为你只能赋予它undefined和null
let unusable: void = undefined

// Null 和 Undefined TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。和void相似，它们的本身的类型用处不是很大：
let u: undefined = undefined
let n: null = null
// 默认情况下null和undefined是所有类型的子类型。就是说你可以把null和undefined赋值给number类型的变量。
// 然而，但指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。这能避免很多常见的问题。也许在某处想传入一个string或null或undefined，你可以使用联合类型string | null | undefined。

// Never never类型表示的是那些永不存在的值的类型。例如，never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；变量也可能是never类型，当它们被永不为真的类型保护所约束时。
// never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身）。即使any也不可以赋值给never
// 返回never的函数必须存在无法到达的终点
function error (message: string): never {
    throw new Error(message)
}
// 推断的返回值类型为never
function fail () {
    return error('Something failed')
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {

    }
}

// Object object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型
// 使用object类型，就可以更好的表示像Object.create这样的API
declare function create(o: object | null): void
create({ prop: 0 }) // OK
create(null) // OK
// create(42) // Error

// 类型断言
// 尖括号语法
let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length
// as语法
let strLength2: number = (someValue as string).length
