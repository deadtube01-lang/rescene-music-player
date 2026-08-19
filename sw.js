// RESCENE Music Player - 최소 서비스워커
// 목적: PWA 설치(홈 화면에 추가) 조건을 만족시키기 위함.
// 오프라인 캐싱은 하지 않는다 — 음원/영상이 항상 최신 상태로 로드되어야 하므로
// 네트워크 요청은 그대로 통과시키고, 별도 캐시 전략은 사용하지 않는다.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// fetch 이벤트를 아무것도 가로채지 않고 그대로 네트워크로 통과시킨다.
// (이벤트 리스너 자체는 등록해둬야 일부 브라우저의 설치 가능(installable) 조건을 만족한다)
self.addEventListener('fetch', (event) => {
  // no-op: 기본 브라우저 동작(네트워크 요청)을 그대로 사용
});
