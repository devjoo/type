interface Work{
    foForWork():void;
    goWorking():void;
    goOut():void;
}

class Worker2 implements Work{
    foForWork():void{
        console.log("출근합니다.");
    }
    goWorking():void{
        console.log("일하는 중입니다.");
    }
    goOut():void{
        console.log("퇴근합니다.");
    }
}

class Student extends Worker2{
    // 등교합니다,
    //공부합니다.
    //하교합니다.
    foForWork():void{
        console.log("등교합니다.");
    }
    goWorking():void{
        console.log("공부합니다.");
    }
    goOut():void{
        console.log("하교합니다.");
    }
}

class Teacher extends Worker2{
    //가르칩니다.
    goWorking():void{
        console.log("가르칩니다.");
    }
    // 선생님만 하는 일
    doTest():void{
        console.log("학생들을 테스트 합니다.");
    }
}

class workFactory {
    obj : Work;
    constructor(obj:Work){
        this.obj = obj;
    }
    printObjInfo():void{
        this.obj.foForWork();
        this.obj.goWorking();
        this.obj.goOut();
        //this.obj.doTest(); // 데이터 타입에 없는건  안된다
    }
}
let b:Work = new Student(); // 학생
let a : workFactory = new workFactory(b);
a.printObjInfo();

let c:Work = new Teacher(); // 선생님
let d : workFactory = new workFactory(c);
d.printObjInfo();

let dfgd : Teacher = new Teacher();