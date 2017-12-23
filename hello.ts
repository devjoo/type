class Hello{
    private str : string = '프라이베이트';
    public str2 : string = '퍼블릭';

    private test1():void{
        console.log('프라이베이트 test1 실행');
        this.str = '프라이베이트 스트링 실행';
    }

    private add(num1:number, num2:number):number{
        // 나밖에 못쓰고 반드시 number 값 리턴
        return num1+num2;
    }

    public test2():void{
        this.str2 = '퍼블';
        let num1 : number = 3;
        let num2 : number = 4;
        let numArr : number[] = [1,2,3]; // number형 배열 변수
        let numArr2 : Array<number> = [1,2,3]; // number형 배열 변수
        let tp : [string, number];
        tp = ['1', 2];
        let anyType : any; // 아무거나 집어넣어도 다되는 데이터타입
        anyType = '3';
        anyType = 1;
        anyType = new Number(2);
        anyType = true;

        console.log(num1+num2);
        
        this.test1();
    }
}

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
String.prototype.equals = function(str){
    if(typeof str == "object"){
        return str.toString()== this.toString();
    }
}
let str1 : string = "str";
let str2 : string = "str";
let str3 : String = new String("str");
let str4 : String = new String("str");

console.log(str1==str2); // 값비교가 아니라 메모리 주소 비교
console.log(str1===str2);
console.log(str3.equals(str4));
//console.log(str1===str3);
//console.log(str3===str4);


function returnExam():string{
    console.log("전 test 라는 스트링을 줍니다.");
    return "test";
}
function voidExam():void{
    console.log("전 아무것도 주지 않습니다.");
}
let str = returnExam(); // string 리턴하기 때문에 오류없이 test 값이 들어온다.
str2 = voidExam();//리턴안하는데 받겠다 > 말이 안됨

/* enum */
enum Computer{Desktop, Laptop, Netbook}; //데이터 타입되는 애들 모아놓은것 enum
let  pc:Computer = Computer.Desktop;

class PcTest{
    pc : Computer;
    constructor(pc:Computer){
        this.pc = pc;
    }
    printPcInfo(){
        console.log("입력하신 pc는 " + this.pc +"입니다.");
    }
}
let pt : PcTest = new PcTest(Computer.Laptop);
pt.printPcInfo();

/*  */
// 설계서. interface 있는 함수들은 한번은 반드시 오버라이딩(재정의)해줘야한다
interface Action{
    move():void;
    run():void;
    sleep():void;
}
class Dog implements Action{
    move():void{
        console.log("개가 걷습니다.");
    }
    run():void{
        console.log("개가 뜁니다.");
    }
    sleep():void{
        console.log("개가 잡니다.");
    }
}
/* 재정의, 상속 */
class Husky extends Dog{
    name : string;
    constructor(name:string){
        super(); // super로 맴버 받아온다
        this.name = name;
    }
    sleep():void{
        console.log(this.name + "가 잡니다");
    }
}

let dogA : Action = new Husky("시베리안 허스키"); 
//let dog : Dog = new Dog(); //데이터 타입으로 쓸수있다.
dogA.move();
dogA.run();
dogA.sleep();
// Dog 보다 Action이 상위 개념이라 Dog로 넣을 수있다.
// 사람 > 저
//Dog는 Action이라고 불릴수있지만 Action은 Dog 라고 불릴수없다.

class Person implements Action{
    move():void{
        console.log("사람이 걷습니다.");
    }
    run():void{
        console.log("사람이 뜁니다.");
    }
    sleep():void{
        console.log("사람이 잡니다.");
    }
}
let p:Action = new Person();

class Factory {
    obj : Action;
    constructor(obj:Action){
        this.obj = obj;
    }
    printObjInfo():void{
        this.obj.move();
        this.obj.run();
        this.obj.sleep();
    }
}
let f : Factory = new Factory(p);
f.printObjInfo();
f = new Factory(dogA);
f.printObjInfo();

document.getElementById("result_div").innerHTML = h.str2; 