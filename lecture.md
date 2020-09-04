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

### 추가 학습

- **(TS 기초)** https://kjwsx23.tistory.com/448
- **(TS handbook 한글 문서)** https://typescript-kr.github.io/pages/tutorials/typescript-in-5-minutes.html
- **(typesafe-actions)**
  - (docs) https://github.com/piotrwitek/typesafe-actions)
  - (v5.0) https://github.com/piotrwitek/typesafe-actions/issues/143
  - (예제) https://vallista.kr/2020/07/20/TypeScript%EC%97%90%EC%84%9C-Redux-Redux-Saga-%EC%95%84%EB%A6%84%EB%8B%B5%EA%B2%8C-%EA%B0%9C%EB%B0%9C%ED%95%98%EA%B8%B0/
- **(FSA)**
  - https://github.com/redux-utilities/flux-standard-action
  - 이 규칙을 적용하면 액션들이 모두 비슷한 구조로 이루어져있게 되어 추후 다룰 때도 편하고 읽기 쉽고, 액션 구조를 일반화함으로써 액션에 관련돤 라이브러리를 사용 할 수 있게 해줌.

## Tips

- [x] **useState 사용 시 Generics 적용**

- useState를 사용 할 때 Generics 를 사용하지 않아도 알아서 타입을 유추하기 때문에 생략해도 상관없는 경우가 있으나, 상태가 `null` 일 수도 있고 아닐 수도 있을 때 Generics 를 활용하면 좋다.

```
type Information = { name: string, description: string };
const [info, setInformation] = useState<Information | null>(null);
```

- [ ] **10++ TypeScript tips/patterns with React**

- https://medium.com/@martin_hotell/10-typescript-pro-tips-patterns-with-or-without-react-5799488d6680#78b9 (2018 ver)

- [x] **Parameters&lt;F&gt;**

- `type Params = Parameters<F>;` 는 함수의 파라미터들의 타입을 추론해줌. 이를 통하여 F 함수의 파라미터와 thunk 함수의 파라미터가 동일하게끔 설정을 해줄 수 있음.

- [ ] **QuickType**

- https://app.quicktype.io/?l=ts (json 을 바로 타입스크립트 인터페이스로 변환시켜줌)

## QnA

- [x] **type vs interface**

- https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c
- https://joonsungum.github.io/post/2019-02-25-typescript-interface-and-type-alias/
- 공식 문서에서는 interface 를 주로 사용하되, tuple 이나 union 타입을 사용해야 할 경우 type Alias 를 사용하라고 한다.

- [x] **as const(const assertion)**

- https://medium.com/@seungha_kim_IT/typescript-3-4-const-assertion-b50a749dd53b

- [ ] **function 키워드를 이용하여 함수형 컴포넌트를 선언하는 이유**

- https://overreacted.io/a-complete-guide-to-useeffect/
- https://kentcdodds.com/blog/how-to-use-react-context-effectively

## Issue

- [x] **(eslint 이슈) https://github.com/facebook/create-react-app/issues/9515**

- react-scripts 라이브러리의 eslint 버전이 낮아서 발생하는 문제로 보임  
  typescript 버전 낮추면서 일단 해결
