var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Hello = /** @class */ (function () {
    function Hello() {
        this.str = '프라이베이트';
        this.str2 = '퍼블릭';
    }
    Hello.prototype.test1 = function () {
        console.log('프라이베이트 test1 실행');
        this.str = '프라이베이트 스트링 실행';
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
        this.test1();
    };
    return Hello;
}());
var h = new Hello();
h.test2();
//console.log(h.str); //프라이베이트
console.log(h.str2);
// h.test(); //프라이베이트
h.str2 = "나나나";
/*class String2 extends String{
    equals(str:any):boolean{
        return str.toString()== this.toString();
    }
}*/
String.prototype.equals = function (str) {
    if (typeof str == "object") {
        return str.toString() == this.toString();
    }
};
var str1 = "str";
var str2 = "str";
var str3 = new String("str");
var str4 = new String("str");
console.log(str1 == str2); // 값비교가 아니라 메모리 주소 비교
console.log(str1 === str2);
console.log(str3.equals(str4));
//console.log(str1===str3);
//console.log(str3===str4);
function returnExam() {
    console.log("전 test 라는 스트링을 줍니다.");
    return "test";
}
function voidExam() {
    console.log("전 아무것도 주지 않습니다.");
}
var str = returnExam(); // string 리턴하기 때문에 오류없이 test 값이 들어온다.
str2 = voidExam(); //리턴안하는데 받겠다 > 말이 안됨
/* enum */
var Computer;
(function (Computer) {
    Computer[Computer["Desktop"] = 0] = "Desktop";
    Computer[Computer["Laptop"] = 1] = "Laptop";
    Computer[Computer["Netbook"] = 2] = "Netbook";
})(Computer || (Computer = {}));
; //데이터 타입되는 애들 모아놓은것 enum
var pc = Computer.Desktop;
var PcTest = /** @class */ (function () {
    function PcTest(pc) {
        this.pc = pc;
    }
    PcTest.prototype.printPcInfo = function () {
        console.log("입력하신 pc는 " + this.pc + "입니다.");
    };
    return PcTest;
}());
var pt = new PcTest(Computer.Laptop);
pt.printPcInfo();
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.move = function () {
        console.log("개가 걷습니다.");
    };
    Dog.prototype.run = function () {
        console.log("개가 뜁니다.");
    };
    Dog.prototype.sleep = function () {
        console.log("개가 잡니다.");
    };
    return Dog;
}());
/* 재정의, 상속 */
var Husky = /** @class */ (function (_super) {
    __extends(Husky, _super);
    function Husky(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Husky.prototype.sleep = function () {
        console.log(this.name + "가 잡니다");
    };
    return Husky;
}(Dog));
var dogA = new Husky("시베리안 허스키");
//let dog : Dog = new Dog(); //데이터 타입으로 쓸수있다.
dogA.move();
dogA.run();
dogA.sleep();
// Dog 보다 Action이 상위 개념이라 Dog로 넣을 수있다.
// 사람 > 저
//Dog는 Action이라고 불릴수있지만 Action은 Dog 라고 불릴수없다.
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.move = function () {
        console.log("사람이 걷습니다.");
    };
    Person.prototype.run = function () {
        console.log("사람이 뜁니다.");
    };
    Person.prototype.sleep = function () {
        console.log("사람이 잡니다.");
    };
    return Person;
}());
var p = new Person();
var Factory = /** @class */ (function () {
    function Factory(obj) {
        this.obj = obj;
    }
    Factory.prototype.printObjInfo = function () {
        this.obj.move();
        this.obj.run();
        this.obj.sleep();
    };
    return Factory;
}());
var f = new Factory(p);
f.printObjInfo();
f = new Factory(dogA);
f.printObjInfo();
document.getElementById("result_div").innerHTML = h.str2;
var Worker2 = /** @class */ (function () {
    function Worker2() {
    }
    Worker2.prototype.foForWork = function () {
        console.log("출근합니다.");
    };
    Worker2.prototype.goWorking = function () {
        console.log("일하는 중입니다.");
    };
    Worker2.prototype.goOut = function () {
        console.log("퇴근합니다.");
    };
    return Worker2;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 등교합니다,
    //공부합니다.
    //하교합니다.
    Student.prototype.foForWork = function () {
        console.log("등교합니다.");
    };
    Student.prototype.goWorking = function () {
        console.log("공부합니다.");
    };
    Student.prototype.goOut = function () {
        console.log("하교합니다.");
    };
    return Student;
}(Worker2));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //가르칩니다.
    Teacher.prototype.goWorking = function () {
        console.log("가르칩니다.");
    };
    // 선생님만 하는 일
    Teacher.prototype.doTest = function () {
        console.log("학생들을 테스트 합니다.");
    };
    return Teacher;
}(Worker2));
var workFactory = /** @class */ (function () {
    function workFactory(obj) {
        this.obj = obj;
    }
    workFactory.prototype.printObjInfo = function () {
        this.obj.foForWork();
        this.obj.goWorking();
        this.obj.goOut();
        //this.obj.doTest(); // 데이터 타입에 없는건  안된다
    };
    return workFactory;
}());
var b = new Student(); // 학생
var a = new workFactory(b);
a.printObjInfo();
var c = new Teacher(); // 선생님
var d = new workFactory(c);
d.printObjInfo();
var dfgd = new Teacher();
