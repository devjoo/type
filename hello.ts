class Hello{
    private str : string = '프라이베이트';
    public str2 : string = '퍼블릭';

    private test1():void{
        console.log('123');
        this.str = '프라이';
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
        console.log('hello hello');
        this.test1();
    }
}

var h = new Hello();
h.test2();
// console.log(h.str); //프라이베이트
console.log(h.str2);
// h.test(); //프라이베이트