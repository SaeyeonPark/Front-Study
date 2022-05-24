console.log('Hello JavaScript!');

console.log(1 + 2 + 3 + 4);

console.log('안녕하세요!');
console.log('JavaScript 를 배워봅시다');

let value = 1;
console.log(value);

let value1 = 1;
let value2 = 2;

const a = 1;
a = 2;

let text = 'hello';
let name = '자바스크립트';

let good = true;
let loading = false;

const friend = null;

let criminal;
console.log(criminal);

let b = 1 + 2;
console.log(b);

let c = 1 + 2 - (3 * 4) / 4;
console.log(c);

let d = 1;
d++;
++d;
console.log(d);

let e = 1;
e--;
console.log(e);

let f = 1;
f = f + 3;

let g = 1;
g += 3;

let h = 1;
h += 3;
h -= 3;
h *= 3;
h /= 3;
console.log(h);

const i = !true;
console.log(i);

const j = !false;
console.log(j);

const aa = true && true;
console.log(aa);

let ff = false && false;
f = false && true;
f = true && false;

let t = true || false;
t = false || true;
t = true || true;

let fff = flase || flase;

const value3 = !((true && false) || (true && false) || !false);

!((true && false) || (true && false) || true);

!(false || false || true);

!true;

const p = 1
const q = 1;
const equals1 = p === q;
console.log(equals1);

const pp = 1;
const qq = 1;
const equals2 = pp == qq;
console.log(equals2);

const l = 1;
const k = '1';
const equals3 = l == k;
console.log(equals3);

const co = 0;
const ns = false;
const eq = co == ns;
console.log(eq);

const tt = null;
const ttt = undefined;
const ua = tt == ttt;
console.log(ua);

const value4 = 'y' !== 'z';

console.log(1 != '1');
console.log(1 !== '1');

const o = 10;
const u = 15;
const v = 15;
console.log(o < u); 
console.log(u > o); 
console.log(u >= v); 
console.log(o <= v); 
console.log(u < v);

const zz = '너무';
const zzz = '졸려요';
console.log(zz + zzz);

const w = 1;
if (w + 1 === 2) {
    console.log('w + 1이 2입니다.');
}

const water = 10;
if (water > 15) {
    console.log('water사 15 큽니다.');
} else {
    console.log('water가 15보다 작습니다');
}

const ch = 10;
if (ch === 5) {
    console.log('5입니다');
} else if (ch === 10) {
    console.log('10입니다');
} else {
    console.log('5도 아니고 10도 아닙니다.');
}

const device = 'iphone';

switch (device) {
    case 'iphone' :
        console.log('아이폰');
        break;
    case 'ipad' :
        console.log('아이패드');
        break;
    case 'galaxy note' :
        console.log('갤럭시 노트');
        break;
    default :
        console.log('몰루');
}