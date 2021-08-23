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



## 동작 화면

### 홈

![HOME](/design/HOME.gif)



### 알람

![ALARM](/design/ALARM.gif)



### 메모

![MEMO](/design/MEMO.gif)



### 사진

![PHOTO](/design/PHOTO.gif)

