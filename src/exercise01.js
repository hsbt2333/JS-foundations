/*
 * 1. 区分大小写，忽略空格，制表符，换行符
 * 2. 注释 // 单行
 * 3. 字面量，直接出现在程序中的数据值 如：12 1.2 "Hello world" true false null
 * 4. 标识符和保留字
 *    标识符用于在JS命名常量、变量、属性、函数和类，必须以字母，下划线(_)，美元符号($)开头
 *    保留字，指不能用作标识符的一些单词，
 * 5. 转义字符，可以仅使用ASCII字符来表示Unicode字符，使用 \u开头接4位十六进制
 * 6. 可选分号，有的程序员喜欢在所有这种语句前面都防御性地添加一个分号，这样即使它前面的语句被修改，删掉了之前末尾的分号，也不会影响当前语句
 *
 * 类型值和变量
 * 概述和定义
 * Javascript类型分为两类，原始类型和对象类型
 * 原始类型包括数值，文本字符串，和布尔值，特殊值null和undefined也是原始值，这两个值通常被认为是各自特殊类型的唯一值
 * ES6新增了一种特殊类型 Symbol 符号类型，用于对语言进行扩展而不破坏向后兼容性
 * 任何不是数值，字符串，布尔值，null，undefined，Symbol的值都是对象，对象是属性的集合，每个属性都有一个名字和一个值
 * 普通JS对象是一个命名值的无序集合，JS也定义了一种特殊对象，叫做数组，数组表示一个数字值的有序集合。
 * 除了基础的对象和数组外，还定义了一些有用的对象类型，Set对象表示一组值的集合，Map对象表示键与值的映射，还有定型数组，RegExp文本模式，Date类型日期时间，Error及其子类型表示运行错误
 * 在内存管理方面，JS解释器会执行自动垃圾收集。
 * 对象类型是可修改的，原始类型是不可修改的
 * 常量和变量可以让我们在程序中使用名字来引用值，常量使用const，变量使用let。声明变量和常量都是无类型。
 *
 */

/*
 * 数值型 Number
 * 基数为10的字面量可直接写成数字序列，十六进制用0x或0X开头，ES6可用0b 0B表示二进制，0o 0O表示八进制
 * 测试过字面量用科学计数法，但是打印也是科学计数法，特别是E-的数值,使用toLocateString() 转成数字字符串
 * 数值字面量的分隔符，可用_分割数值，让数值分割为看的清的数字段
 */
let num = 123_456_789;
console.log('let num = 123_456_789 result: ' + num);
// 默认是有逗号的
console.log('Number最大值数值写法',Number.MAX_VALUE.toLocaleString('en-US', {useGrouping: false}));
console.log('Number最小值数值写法',Number.MIN_VALUE);
// 除+-*/%外，Math对象的函数和常量
console.log('2的3次方: ' + Math.pow(2, 3)); // 2的3次方
console.log('0.6 舍入到最接近的整数: ' + Math.round(0.6)); // 舍入到最接近的整数
console.log('0.6 向上取整: ' + Math.ceil(0.6)); // 向上取整
console.log('0.6 向下取整: ' + Math.floor(0.6)); // 向下取整
console.log('-5 绝对值: ' + Math.abs(-5));
console.log('1,2,3 取最大值: ' + Math.max(1,2,3));
console.log('1,2,3 取最小值: ' + Math.min(1,2,3));
console.log('伪随机数 0.0到1.0之间: ' + Math.random()); //伪随机数 0.0-1.0
console.log('PI: ' + Math.PI); //
console.log('E: ' + Math.E);  //
console.log('3的平方根: ' + Math.sqrt(3));  //
console.log('3的立方根: ' + Math.pow(3,1/3));  //
console.log('三角函数 Math.sin(0) : ' + Math.sin(0));  //
console.log('10的自然对数 Math.log(10) : ' + Math.log(10));  //

/*
 * 无穷值Infinity 非数值NaN not a number
 * 上溢出和下溢出不会发生错误，结果是一个特殊的无穷值 Infinity 和 负零，这个负零与常规零无法区分
 * 除以零也不会报错，只会显示Infinity和-Infinity
 * 零除以零返回NaN，此外，无穷除无穷，或负数平方根，或用无法转换为数值的非数值的结果也会是NaN
 * 非数值与任何值比较都不相等，也不等于自己，
 * Number.isNaN 判断参数是否是NaN，不是NaN的非数值也返回false 可以使用 Number.isNaN(Number(参数)) 来转换一次数值
 * isNaN 判断参数是否是非数值，尝试转换为数值，无法转换返回true
 * Number.isFinite 判断参数不是NaN，Infinity，-Infinity时返回true，Finite表示有限的
 */
console.log('最大值+最大值: ' + (Number.MAX_VALUE + Number.MAX_VALUE)); // Infinity
console.log('最小值-最小值: ' + (Number.MIN_VALUE - Number.MIN_VALUE)); // 0
console.log('1/0 : ' + 1/0); // Infinity
console.log('-1/0 : ' + -1/0); // -Infinity
console.log('0/0 : ' + 0/0); // NaN
console.log('Number.isNaN("Hello") : ',Number.isNaN('hello')); // false
console.log('isNaN("Hello") : ',isNaN('hello')); // true
console.log('Number.isNaN(Number("hello")) : ',Number.isNaN(Number("hello"))); // true
console.log('Number,isFinite(100)',Number.isFinite(100)); //true

/*
 * 二进制浮点数和舍入错误
 * 尽管JS能表示的浮点数很大，但数值的表示经常是实际数值的近似值
 */
console.log('.3 - .2 === .2 - .1 : ',.3 - .2 === .2 - .1); // false
console.log('.3 - .2 === .1 : ',.3 - .2 === .1); // false
console.log('.2 - .1 === .1 : ',.2 - .1 === .1); // true

// BigInt
// 表示64位整数,字面量写作一串数字后接字母n
console.log('BigInt 字面量: ',1234567890n+10n);
console.log('BigInt 对象: ',BigInt(123456780)+10n);


