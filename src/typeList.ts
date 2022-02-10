/* eslint-disable @typescript-eslint/no-unused-vars */

/** TypeScriptの基本の型 */

// boolean
let bool: boolean = true;

// number 数値
let num: number = 0;

// string 文字
let str: string = "A";

// Array 配列
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple　＊あまり使わない
let tupule: [number, string] = [0, "A"];

// any　＊何の型でも良い(型指定の意味がないのであまり使わない方が良い)
let any1: any = false;

/** void ＊例：関数が何も返却しない場合は()の後に:voidと書く
 * が、あえて記述しなくても暗黙的に引数なしのvoid型だと推測して設定してくれる。
 * なのでこういうケースではあえてvoid書かなくても良い。
 */
const funcA = (): void => {
  const test = "TEST";
};

// null
let null1: null = null;

// undefined
let undefined1: undefined;

// object
let obj1: object = {}; // あまり使わない
let obj2: {} = {}; // どんな値でも設定できるので意味がない
// でもこのobjectに対して↓の指定の仕方はよく出てくるやり方。
let obj3: { id: number; name: string } = { id: 0, name: "AA" };
