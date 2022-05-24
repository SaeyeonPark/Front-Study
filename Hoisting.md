<h1>Hoisting

**Var을 통해 정의된 <u>변수의 선언문을 유효 범위의 최상단으로</u> 끌어올리는 행위**

```원래 코드
if (true) {
	var name = 'chicken';
}
console.log(name);
```

```호이스팅으로 변환된 코드
var name; /*선언*/
if (true) {
	name = 'chicken'; /*할당*/
}
console.log(name);
```

> var은 전역 변수이기 때문에 console을 하고 나서 선언을 하면 오류는 아니지만 언디파인드가 뜸. let과 const도 코드에서 오류는 뜨지 않지만 실행에 문제가 있음.