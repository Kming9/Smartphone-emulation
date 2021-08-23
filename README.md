# Smartphone-emulation

바닐라 스크립트를 이용해 핸드폰 화면과 앱을 에물레이션한 페이지

- 홈 화면과 3개의 앱(알람, 메모, 사진)으로 구성
- SPA(Single Page Application)으로 구현



## Setup

```bash
git clone https://github.com/Kming9/Smartphone-emulation.git
```



## Run

```bash
cd Smartphone-emulation
npm install
npm run start
```



## Directory

```bash
.
├─ README.md
├─ index.html
├─ package.json
├─ webpack.config.js
└─ src
   ├─ main.js
   ├─ App.js
   ├─ components        컴포넌트 폴더
   │  ├─ AlarmList.js   
   │  ├─ Button.js   
   │  └─ NavBar.js
   ├─ pages             페이지 폴더
   │  ├─ Home.js
   │  ├─ Alarm.js
   │  ├─ Memo.js
   │  └─ Photo.js
   ├─ style.css
   └─ assets            이미지 폴더

```



## 화면 및 주요 기능

### 홈

![HOME](https://user-images.githubusercontent.com/43158727/130407857-f86685fe-67bd-4612-a515-87fe479b4883.gif)

1. Drag & Drop 을 사용하여 앱 위치 변경

2. 앱 클릭시 해당 앱 화면으로 이동



### 알람

![ALARM](https://user-images.githubusercontent.com/43158727/130407915-488b8b94-0473-404b-9c14-6e69b81b62f7.gif)

1. 알람 추가/삭제
2. 다른 앱 화면에서도 알람 동작
3. 알람 동작이 띄면 해당 알람 자동 삭제



### 메모

![MEMO](https://user-images.githubusercontent.com/43158727/130407945-6c40c9b8-8658-401e-9093-458dbc6f4ca4.gif)

1. 메모 추가
2. 메모 클릭시 해당 메모의 전체 내용 표시



### 사진

![PHOTO](https://user-images.githubusercontent.com/43158727/130407958-71c75e43-d4a7-4a8e-9c67-d5e6789b5453.gif)

1. 이미지 가로 스크롤
2. 이미지 클릭시 border 표시되며, 아래에 선택된 이미지가 중앙 정렬되어 나타남



### 공통 기능

- 현재 시간 표시
- 뒤로 가기
- 새로고침시 현재 화면 유지

