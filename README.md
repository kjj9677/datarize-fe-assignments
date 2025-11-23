## 구현 내용

### 프로젝트 구조

```
apps/frontend/src/
├── api/              # API 클라이언트 및 타입 정의
├── components/base/  # 재사용 가능한 기본 컴포넌트
├── constants/        # 상수 정의 (날짜 범위, 가격 단위)
├── hooks/            # 커스텀 훅
├── pages/            # 페이지 컴포넌트
├── queries/          # React Query 훅 및 쿼리 키
└── utils/            # 유틸리티 함수
```

### 기술 스택

- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Vite** - 빌드 도구
- **TanStack Query** - 서버 상태 관리 및 캐싱
- **react-url-params-state** - URL 쿼리 파라미터 상태 관리
- **react-router-dom** - 라우팅
- **Recharts** - 차트 시각화
- **Tailwind CSS** - 스타일링
- **react-datepicker** - 날짜 선택

### 주요 구현 의도

#### 1. 재사용 가능한 컴포넌트 설계
- `components/base/`: Text, Button, Input, Select 등 기본 컴포넌트 분리
- DashboardSection 공통 컴포넌트로 레이아웃 중복 제거
- 일관된 디자인 시스템 적용
- props를 통한 유연한 커스터마이징

#### 2. 코드 품질 개선
- 매직 넘버 제거 및 상수 분리 (`constants/`)
- 차트 스타일을 config 객체로 중앙 관리
- 반복 로직 유틸 함수 추출 (`utils/`)
- DRY 원칙 준수
- 단일 책임 원칙 적용

#### 3. 사용자 경험
- URL 상태 관리: 선택된 고객 ID를 URL과 동기화하여 링크 공유 가능
- 로딩 및 에러 상태 처리
- 검색어 debounce 처리 (300ms)
- 날짜 범위 검증 및 초기화 기능
- 구매 내역 최신순 정렬
- 404 페이지 및 라우팅 처리

#### 4. 접근성
- 시맨틱 HTML 태그 사용
- ARIA 속성 추가 (aria-label, role 등)
- 키보드 네비게이션 지원
- 스크린 리더 고려

### 실행 방법

```bash
# 의존성 설치
cd apps
yarn install

# 백엔드 서버 실행 (포트 4000)
yarn start-server

# 프론트엔드 개발 서버 실행 (별도 터미널)
yarn start-client
```
