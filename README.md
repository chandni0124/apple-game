# 🍎 사과게임 (Apple Game)

숫자 사과를 선택해서 합이 **10**이 되는 조합을 찾는 수학 퍼즐 게임입니다!

## 🎮 게임 방법

1. **목표**: 숫자 사과를 클릭해서 선택한 숫자들의 합이 **10**이 되도록 만드세요
2. **조합 예시**:
   - 1 + 9 = 10
   - 2 + 8 = 10
   - 3 + 7 = 10
   - 1 + 2 + 7 = 10
   - 1 + 3 + 6 = 10
   - 등등...
3. **점수**: 선택한 사과 개수만큼 점수를 얻습니다
4. **콤보**: 연속으로 정답을 맞추면 콤보가 쌓이고, 콤보에 따라 추가 점수를 받습니다
5. **시간**: 2분 안에 최대한 많은 점수를 획득하세요!

## 🚀 실행 방법

### 방법 1: 브라우저에서 직접 열기

1. `index.html` 파일을 더블클릭하거나
2. 브라우저로 드래그 앤 드롭하거나
3. 브라우저 주소창에 파일 경로를 입력하세요

**메인 페이지**: `index.html` - 게임 소개 및 시작 페이지  
**게임 페이지**: `game.html` - 실제 게임 플레이

### 방법 2: 로컬 서버 실행 (권장)

터미널에서 프로젝트 폴더로 이동한 후:

**Python 3 사용:**

```bash
python3 -m http.server 8000
```

**Node.js 사용:**

```bash
npx http-server
```

그 다음 브라우저에서 `http://localhost:8000` 접속

## 📁 파일 구조

```
demodev/
├── index.html      # 메인 페이지 (홈페이지)
├── game.html       # 게임 페이지
├── styles.css      # 메인 페이지 스타일
├── game.css        # 게임 페이지 스타일
├── game.js         # 게임 로직
└── README.md       # 이 파일
```

## 🌐 온라인 공유 방법

### GitHub Pages로 공유하기

1. **GitHub 저장소 생성**

   ```bash
   git init
   git add .
   git commit -m "사과게임 추가"
   git branch -M main
   git remote add origin https://github.com/사용자명/저장소명.git
   git push -u origin main
   ```

2. **GitHub Pages 활성화**
   - GitHub 저장소 → Settings → Pages
   - Source: `main` 브랜치 선택
   - Save 클릭
   - 몇 분 후 `https://사용자명.github.io/저장소명` 에서 접속 가능

### Netlify로 공유하기

1. [Netlify](https://www.netlify.com) 접속
2. "Add new site" → "Deploy manually"
3. 프로젝트 폴더를 드래그 앤 드롭
4. 자동으로 배포되고 URL이 생성됩니다

### Vercel로 공유하기

1. [Vercel](https://vercel.com) 접속
2. "New Project" 클릭
3. GitHub 저장소 연결 또는 폴더 업로드
4. 자동 배포 완료

## 📦 파일 공유하기

다른 사람에게 직접 공유하려면 다음 파일들을 함께 보내주세요:

**웹사이트 전체 공유:**

- `index.html` (메인 페이지)
- `game.html` (게임 페이지)
- `styles.css` (메인 페이지 스타일)
- `game.css` (게임 페이지 스타일)
- `game.js` (게임 로직)

**게임만 공유하려면:**

- `game.html`
- `game.css`
- `game.js`

모든 파일을 같은 폴더에 넣고 `index.html`을 열면 완전한 웹사이트 형태로 사용할 수 있습니다!

## 🎯 게임 특징

- ✅ **완전한 웹사이트 형태** - 메인 페이지와 게임 페이지 분리
- ✅ 반응형 디자인 (모바일, 태블릿, PC 모두 지원)
- ✅ 실시간 점수 및 콤보 시스템
- ✅ 2분 타이머
- ✅ 부드러운 애니메이션
- ✅ 직관적인 UI/UX
- ✅ 게임 소개 및 사용법 안내 페이지

## 📝 라이선스

이 게임은 자유롭게 사용, 수정, 공유할 수 있습니다.

---

**즐거운 게임 되세요! 🎮**
