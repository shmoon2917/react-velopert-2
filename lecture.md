# (참고할만한 블로그)

https://helloinyong.tistory.com/

https://velog.io/@velopert

# 2장 style 처리

## CSS3 Flexible 개념

https://heropy.blog/2018/11/24/css-flexible-box/

## open color

https://yeun.github.io/open-color/

(참고)

- ThemeProvider 내부는 하나의 리액트 엘리먼트로 감싸져있어야 하기 때문에 AppBlock 과 Dialog 를 <></> 으로 감싸주어야 한다.

---

# 4장. API 연동하기

### 4-1. API 연동의 기본

- (참고) REST API: https://meetup.toast.com/posts/92 / https://medium.com/@dydrlaks/rest-api-3e424716bab

### 4-2. useReducer 로 요청 상태 관리하기

- `useState` 대신에 `useReducer` 를 사용하여 요청 상태들을 관리하려 함.

---

# 6장. Redux

### 6-4. 리덕스 모듈 만들기

- (Ducks 패턴) https://github.com/erikras/ducks-modular-redux

---

# 7장. Redux middleware

### 7-7. thunk 에서 라우터 연동하기

- 왜 Router 에서만 가능한가. BrowserRouter에서는 왜 history props 로 넘겨서 작동하지 않는가

### 7-9. CORS 와 Webpack Devserver Proxy

- 이해가 부족함

---

# 8장. Typescript 사용하기

### 8-1. 타입스크립트 연습하기

type vs interface

- https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c
- https://joonsungum.github.io/post/2019-02-25-typescript-interface-and-type-alias/

### 8-2. 리액트 컴포넌트 타입스크립트

function 키워드를 이용하여 함수형 컴포넌트를 선언하는 이유

- https://overreacted.io/a-complete-guide-to-useeffect/
- https://kentcdodds.com/blog/how-to-use-react-context-effectively

tips about typescript with react

- https://medium.com/@martin_hotell/10-typescript-pro-tips-patterns-with-or-without-react-5799488d6680#78b9 (2018 ver)

### 8-3. 타입스크립트로 리액트 상태관리하기

- useState를 사용 할 때 Generics 를 사용하지 않아도 알아서 타입을 유추하기 때문에 생략해도 상관없는 경우가 있으나, 상태가 `null` 일 수도 있고 아닐 수도 있을 때 Generics 를 활용하면 좋다.

```
type Information = { name: string, description: string };
const [info, setInformation] = useState<Information | null>(null);
```

### 8-5. 타입스크립트로 리덕스 프로처럼 작성하기

- as const 이해못함.
