var Hello = /** @class */ (function () {
    function Hello() {
        this.str = '프라이베이트';
        this.str2 = '퍼블릭';
    }
    Hello.prototype.test1 = function () {
        console.log('123');
        this.str = '프라이';
    };
    Hello.prototype.add = function (num1, num2) {
        // 나밖에 못쓰고 반드시 number 값 리턴
        return num1 + num2;
    };
    Hello.prototype.test2 = function () {
        this.str2 = '퍼블';
        var num1 = 3;
        var num2 = 4;
        var numArr = [1, 2, 3]; // number형 배열 변수
        var numArr2 = [1, 2, 3]; // number형 배열 변수
        var tp;
        tp = ['1', 2];
        var anyType; // 아무거나 집어넣어도 다되는 데이터타입
        anyType = '3';
        anyType = 1;
        anyType = new Number(2);
        anyType = true;
        console.log(num1 + num2);
        console.log('hello hello');
        this.test1();
    };
    return Hello;
}());
var h = new Hello();
h.test2();
// console.log(h.str); //프라이베이트
console.log(h.str2);
// h.test(); //프라이베이트 
//# sourceMappingURL=hello.js.map