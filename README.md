# Portfolio

시네마틱 다크 글래스 톤으로 구성한 영상 포트폴리오 사이트입니다.  
현재 첫 작품으로 `위대한 청춘`이 등록되어 있고, 메인 포트폴리오 페이지와 연혁 페이지가 함께 구성되어 있습니다.

## 브라우저에서 바로 보기

GitHub Pages가 활성화되어 있다면 아래 주소로 바로 접속할 수 있습니다.

- 메인 포트폴리오: `https://lisakim522-lab.github.io/portfolio/`
- 작품 연혁 페이지: `https://lisakim522-lab.github.io/portfolio/history.html`

## GitHub Pages 설정

아직 위 주소가 열리지 않으면 저장소에서 GitHub Pages를 한 번만 켜주면 됩니다.

1. GitHub 저장소 `Settings`로 이동
2. 왼쪽 메뉴에서 `Pages` 선택
3. `Build and deployment`에서 `Deploy from a branch` 선택
4. Branch를 `main`, 폴더를 `/ (root)`로 선택
5. 저장 후 1~2분 정도 기다린 뒤 다시 접속

배포가 완료되면 위의 브라우저 주소로 바로 접속할 수 있습니다.

## 로컬에서 미리보기

YouTube 임베드는 `file://`로 직접 열면 재생 오류가 날 수 있으므로, 아래처럼 로컬 서버로 보는 것을 권장합니다.

```bash
python -m http.server 8000
```

브라우저에서 접속:

- 메인 포트폴리오: `http://localhost:8000/`
- 작품 연혁 페이지: `http://localhost:8000/history.html`

## 파일 구조

```text
index.html
history.html
styles.css
assets/
README.md
```

## 작품 추가 규칙

작품 하나를 추가할 때는 아래 순서로 작업하면 됩니다.

1. `index.html`에 작품 카드, 대표 섹션, 스틸 컷 추가
2. `history.html`에 같은 작품의 연도별 이력 추가
3. `assets/`에 포스터, 스틸, 연혁 이미지 추가
4. 홍보영상 또는 기사 링크가 있으면 함께 연결

## 현재 등록 작품

- `위대한 청춘`
  - 메인 포트폴리오 반영 완료
  - 연혁 페이지 반영 완료
  - YouTube 홍보영상 연결 완료
  - 관련 기사 링크 반영 완료
