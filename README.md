# 구현할 기능 목록

1. **전체 페이지 템플릿 출력**
   - 🥤자판기🥤 형태의 제목 보여줌 [x]
   - 상품 관리, 잔돈 충전, 상품 구매 버튼 보여줌 [ ]
   - 컨텐츠가 출력되는 부분 생성[ ]
2. **메뉴 이동 기능**
   - 상품 관리, 잔돈 충전, 상품 구매 각 버튼 클릭시 본문 영역 각 메뉴에 맞는 내용으로 변경되는 기능
   - 각 탭 별 페이지 생성
3. **상품 추가 기능**
   - 상품명, 가격, 수량을 입력 받아 상품을 추가
   - [예외] 상품명, 가격 또는 수량이 비어있는 경우
   - [예외] 추가하려는 상품명이 이미 존재하는 상품일 경우
   - [예외] 가격이 정수가 아니거나 0 이하의 정수일 경우
   - [예외] 가격이 10 으로 나누어떨어지지 않는 정수일 경우
   - [예외] 수량이 정수가 아니거나 음수일 경우
4. **상품 현황 출력 기능**
   - 현재 상품의 내역을 테이블 형태로 출력
5. **자판기 동전 충전 기능**
   - 금액을 입력받는 기능
   - 랜덤한 동전 수를 생성해 동전 충전하는 기능
   - [예외] 금액이 비어있는 경우
   - [예외] 금액이 정수가 아니거나 0 이하의 정수일 경우
   - [예외] 금액이 10으로 나누어 떨어지지 않는 경우
6. **자판기가 보유한 동전 출력 기능**
   - 현재 자판기가 보유한 동전의 개수를 테이블 형태로 출력
7. **자판기에 금액 투입하는 기능**
   - 투입하려는 금액을 입력받는 기능
   - [예외] 금액이 비어있을 경우
   - [예외] 금액이 정수가 아니거나 0 이하의 정수일 경우
8. **상품 구매하는 기능**
   - 구매하기 버튼 클릭시 투입한 금액에서 구입한 상품 가격만큼 결제
   - 구매한 상품의 수량을 1 줄임
   - [예외] 투입한 금액보다 상품의 가격이 비싼 경우
   - [예외] 수량이 0 인 제품을 구매한 경우
9. **잔돈 반환하는 기능**
   - 최소 동전의 개수로 잔돈을 반환
   - [예외] 반환해야 하는 금액이 자판기가 보유한 모든 동전의 합보다 큰 경우
