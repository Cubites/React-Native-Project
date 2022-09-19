## React native
* 프로젝트 생성
```bash
npx react-native init 프로젝트명
```
  * 프로젝트명은 대소문자만 가능
  * 프로젝트 생성 후 있는 에러 줄 > 프로젝트아 함께 설치된 에러 검증 모듈이 매우 엄격해서 나옴
    <br>> <code>eslint-config-prettier</code>를 설치하면 중지시킬 수 있음

* build
```bash
npx react-native run-android
```

## Mobile UI 
* "free mobile ui templete"을 검색하면 무료 UI들이 나옴
* "Kit"으로 받아야 여러 디자인 세트를 받을 수 있음

## Gradle ver 7 에서 자주 발생하는 에러
* maven - maven-publish 수정이 필요

## Firebase
### 모듈
* @react-native-firebase/app: 기본 모듈
* @react-native-firebase/auth: 인증
* @react-native-firebase/database: 실시간 저장소
* @react-native-firebase/firestore: Cloud Storage
* @react-native-firebase/storage: Cloud Storage

### 작업 순서
* 링크 : https://rnfirebase.io/
* Getting Started 페이지를 따라하면 됨
* /android/build.gradle파일, buildscript > dependencies 위치에 다음 코드 추가
 <br>> <code>classpath ("com.google.gms:google-services:4.3.14")</code>