const a = 1;
const b = 2;
const sum = a + b;


function add(c, d) {
    return c + d;
}
const sum1 = add(1, 2);
console.log(sum1);


function add (aa, bb) {
    return aa + bb;
    console.log('호출이 되지 않는 코드');
}
const sum2 = add(1, 2);
console.log(sum2);


function hello(name) {
    console.log('Hello, ' + name + '!');
}
hello('velopert');


function halo(name) {
    console.log('Hello, ${name}!');
}
halo('velopert');


function getGrade(score) {
    if (score === 100) {
        return 'A+';
    } else if (score >= 90) {
        return 'A';
    } else if (score === 89) {
        return 'B+';
    } else if (score >= 80) {
        return 'B';
    } else if (score === 79) {
        return 'C+';
    } else if (score >= 70) {
        return 'C';
    } else if (score === 69) {
        return 'D+';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}
const grade = getGrade(90);
console.log(grade);


const ad = (i, j) => {
    return i + j;
};
console.log(ad(1, 2));


const d = (aaa, bbb) => a + b;
console.log(d(1, 2));


const getGrade1 = score1 => {
    if (score1 === 100) {
      return 'A+';
    } else if (score1 >= 90) {
      return 'A';
    } else if (score1 === 89) {
      return 'B+';
    } else if (score1 >= 80) {
      return 'B';
    } else if (score1 === 79) {
      return 'C+';
    } else if (score1 >= 70) {
      return 'C';
    } else if (score1 === 69) {
      return 'D+';
    } else if (score1 >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  };
  const grade1 = getGrade1(90);
  console.log(grade1);
