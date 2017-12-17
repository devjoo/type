class Cal{
    private num1 : number = 0;
    private num2 : number = 1;

    constructor(num1:number, num2:number){ // 두가지 변수 받겠다고 정의 반드시있어야 에러 안남, 예) var c = new Cal();
        this.num1 = num1;
        this.num2 = num2;
    }

    private add():number{
        return this.num1 + this.num2;
    }

    private minus():number{
        return this.num1 - this.num2;
    }

    private multiple():number{
        return this.num1 * this.num2;
    }

    private devide():number{
        return this.num1 / this.num2;
    }

    public getCalResult(op:string):number{
        if(op=='+'){
            return this.add(); 
        }else if(op=='-'){
            return this.minus();
        }else if(op=='*'){
            return this.multiple();
        }else if(op=='/'){
            return this.devide();
        }
        return 0;
    }
    public printResult(op:string):void{
        console.log(this.num1 + '' + op + '' + this.num2 + '=' + this.getCalResult(op));
    }
}

var c = new Cal(7,6);
console.log(c.getCalResult('+'));
console.log(c.getCalResult('-'));
console.log(c.getCalResult('*'));
console.log(c.getCalResult('/'));
c.printResult('+');