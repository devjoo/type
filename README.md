"# type" 

type 폴더 만들고 

글로벌로 typescript 설치
npm install -g typescript

터미널창 
ctrl+~

버전 확인 걍 깔렸는지
tsc -version

### hello.ts 작성한 후에 
ctrl + shift + b 보기 하면 js파일 만들어 진다


# 자동화
ctrl + shifr + p > task 치면 빌드> task.json 파일 만들어 진다.
```
{
    "version": "0.1.0",
    "command": "tsc",
    "isShellCommand": true,
    "args": ["-w","-p","."],
    "showOutput" : "always",
    "isBakground" : true,
    "problemMatcher" : "$tsc-watch"
}
```
deduger for chrome 디버거를 크롬자체에서 사용할수있게 
플러그인을 이전에 깔아주고 
index.html 에서 F5 하면 디버깅모드 되면서 chrome 실행된다.

### ctrl + shift + b > js/script.js 파일 생성한다.

```
{
    "compilerOptions": {
        "target": "es5",
        "out": "js/script.js",
        "watch": true
    }
}
```