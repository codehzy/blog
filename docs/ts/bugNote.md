
## 条件分发
- 只有针对泛型才有条件分发的概念。同时这个泛型是联合类型
```ts
type A555 <T = string|number|123> =  T extends string ? 1 : 2
type A7777 =   string|number|boolean extends string ? 1 : 2   // 2
type adfasdf = A555   1 | 2
```
:::demo 使用`type`，`plain`，`round`来定义 Button 的样式

```ts
let a = 123
```
:::

## keyof

```ts
///////////////// b 是原型上的方法
type a = string | number
type b  = keyof a  // 'toString' | 'valueOf'

keyof interface 才是属性名集合
```

## namespace 和 module 的区别
<!-- 1. namespace 是全局的，会合并，同一个 namespace 下有同一个名的元素，会冲突。使用 export 转成模块则不会
2. module 不会合并 -->



## declare 声明类型
提示用的
```ts
// declare 写完后 自己可以不实现，别的地方实现。
// 不加declare 的话，表示只声明了，没有实现，使用会报错  无法 $. 调用
declare namespace $ {
  function ajax(url: string, settings: any): void
  let name: string
  namespace fn {
    function extend(): void
  }
}
```

## 查找声明文件配置
```json
"baseUrl": "./", // 使用 paths 必须配置
"paths": {
  "*": [
    "types/*"
  ]
}
```

## 模块内声明全局类型
```ts
/**
 *ts 文件声明 模块 export {}， 局部变量无法拓展属性
 模块内声明全局属性
 */
declare global {
  interface String {

  }
  interface String {
    double(): string
  }
}
```

## 既能当类型，又能当属性

| 关键字           | 类型          | 值  |
| :-------------   |:-------------:| :-----:|
| class           | yes     | yes |
| enum            | yes     | yes |
| interface       | yes     | no  |
| type            | yes     | no  |
| function        | no      | yes |
| var, let, const | no      | yes |


## any extends 判断时
转为数组
```ts
type a = any extends number ? 1 : 2  // 1 | 2
type aa = [any] extends [number] ? 1 : 2  // 1
```

## Equal 判断两个元素是否一样   [] 包住 为了避免分发
```ts
// 判断两个元素是否一样
type Equal<T, K> = [T] extends [K] ? [K] extends [T] ? (
  keyof T extends keyof K ? (
    keyof K extends keyof T ? true : false
  ) : false
) : false : false
```


## 元组直接使用 number 获取内容
```ts
type aa = ['33', 'dd', 'sadf']
/**
 * 对于元组可以直接使用 number 获取每项内容
 * type a = {
    33: "33";
    dd: "dd";
    sadf: "sadf";
}
 */
type a = {
  [k in aa[number]]: k
}
```

## any 会触发分发
```ts
any  = string| boolean| number| symbol | null | undefined | 元组 | object
any extends never = true | false  => boolean
any extends never ? 1 | 2 => 1 | 2



type isTrue<T> = T extends true ? 1 : 2
isTrue<Boolean> 会分发
```

## 获取值的类型的联合
就是 T[number], T[keyof T]这种为啥可以拿到对象的所有的值的类型的联合?
```ts
比如T = {name:string, age:number}，那么 T["name"]= string很好理解对吧

那么T["name"|"age"] = string|number 应该也很容易理解

那么 T[keyof T]= T对象所有值的类型的联合，是不是也很容易理解了

元组所有的key都是数字，那么元组T[number] 可以得到元组所有值的类型是不是也很容易理解了


必须是泛型，联合
1|"2" extends number ? true|false 才能得到boolean
```



## 数字，字符串和布尔值是对象
在js中，所有类型都是对象类型
```ts
let a:{} = 1

type a = 1 extends {} ? 1 : 2   // 1
```



## 判断可选属性

- https://zhuanlan.zhihu.com/p/43206436

`Exclude<T, undefined>` 如果 `T` 元素是 `string | undefined` 类型，排出后就是 `string`，可选类型排出后，还会有 `undefined` 类型
```ts
type ExcludeUndefined<T> = {[k in keyof T]: Exclude<T[k], undefined>}
type aa = { foo: number | undefined, bar?: string }

type bb = ExcludeUndefined<aa>['foo'] // number
type bb = ExcludeUndefined<aa>['bar'] // string | undefined
```

:::tip
原理是在开启了 **严格空检查** 的情况下，`TS` 会自动给可选属性的值类型联合上一个 `undefined` 类型。依靠判断是否联合了 `undefined` 类型来判断是否是可选属性。
:::


### 判断可选非严格模式

::: tip
```ts
// cc 中的 只要必选满足 extends 条件, 就是 true
// 1. 可选可有可无
// 2. 可选如果有，必须类型一致
type aa = { foo: number | undefined, bar?: string , a?: boolean}
type cc = {foo: number | undefined, bar?: string , a: boolean} extends aa ? 1 : 3 // 1
```
:::