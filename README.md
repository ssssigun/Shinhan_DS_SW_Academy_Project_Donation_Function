# 음식 기부 서비스
<p align="center">
<img src=./delivery_donation_service_frontend/public/image/readme/donationMain.png width="30%" />
</p>
스프링 부트 + React를 사용하여 만든 음식 기부 서비스

## 👨🏻‍💻 멤버
 - 이시권 (팀장)
    - 가게 목록, 가게 상세, 메뉴 상세, 발표
 - 박정은 
    - 화면 설계, 메인 페이지, 주문 내역, 알림창
 - 윤서영 
    - 장바구니, 주문하기 페이지 

## 🖥️ 프로젝트 소개
신한은행의 배달 앱인 ‘땡겨요’를 기반으로 한 음식 기부 서비스입니다. 기부를 받는 사람들이 낙인 효과와 같은 심리적 부담을 덜 수 있도록 돕고자 했습니다. 또한, 기부자들이 배달 앱을 통해 음식을 주문하듯이 기부를 쉽게 접할 수 있도록 하는 아이디어에서 출발하였습니다.
<br>

## ⏰ 개발 기간
* 23.07.25 ~ 23.08.16


### ⚙️ 기술 스택

**FrontEnd**
- **Language** : JavaScript
- **Framework** : React
<br />

**BackEnd**
- **Language** : Java 
- **Framework** : Spring Boot
- **Database** : MySQL
- **ORM** : Mybatis
- **Storage** : Amazon S3

## 📝 기획 및 설계

| 아키텍쳐 |
| :---: |
| <br><img src=./delivery_donation_service_frontend/public/image/readme/donationArchitecture.png width="90%" /><br><br> |
|  |

| ERD |
| :---: |
| <br><img src=./delivery_donation_service_frontend/public/image/readme/donationERD.png width="90%" /><br><br> |
|  |

| 화면 설계 |
| :---: |
| <br><img src=./delivery_donation_service_frontend/public/image/readme/donationDesign.png width="90%" /><br><br> |

### 📌 주요 기능
| 로그인 |
| :---: |
| <br><img src=./delivery_donation_service_frontend/public/image/readme/login.png height="800px" /><br><br> |
| 회원 정보를 받아 로그인하는 화면입니다. |


| 메인 페이지 |
| :---: |
| <br><img src=./delivery_donation_service_frontend/public/image/readme/main.png height="800px" /> <img src=./delivery_donation_service_frontend/public/image/readme/main2.png height="800px" /> |
| 식사와 기부 선택과 음식 카테고리를 선택하는 화면입니다. 기부 카테고리의 음식 카테고리는 제한되어 있습니다.|


| 가게 목록 |
| :---: |
| <br><img src=./delivery_donation_service_frontend/public/image/readme/storeList2.png height="800px" /> <img src=./delivery_donation_service_frontend/public/image/readme/storeList.png height="800px" />  |
| 기부할 가게를 고르는 페이지입니다. 기부된 음식 수량이 가게 오른쪽 하단 숫자에 표시되어있습니다. |


| 가게 상세 |
| :---: |
| <br><img src=./delivery_donation_service_frontend/public/image/readme/storeDetail.png height="800px" /> <img src=./delivery_donation_service_frontend/public/image/readme/storeDetail2.png height="800px" /> |
| 음식의 가격과 기부된 음식 수량이 표시되어 있습니다. |

| 메뉴 상세 |
| :---: |
| <br><img src=./delivery_donation_service_frontend/public/image/readme/menuDetail2.png height="800px" /> <img src=./delivery_donation_service_frontend/public/image/readme/menuDetail3.png height="800px" /> |
| 기부자는 가격을 확인하고 수량을 선택하여 기부할 수 있습니다. <br/>피기부자는 기부된 음식 수량이 부족하다면 주문이 불가능합니다. |

| 장바구니 |
| :---: |
| <br><img src=./delivery_donation_service_frontend/public/image/readme/cart.png height="800px" /> |
| 장바구니입니다. 선택한 메뉴들을 한눈에 볼 수 있습니다. |

| 결제 페이지 |
| :---: |
| <br><img src=./delivery_donation_service_frontend/public/image/readme/order.png height="800px" /> <img src=./delivery_donation_service_frontend/public/image/readme/order2.png height="800px" /> |
| 기부자는 결제 정보만 화면에 나타납니다. <br/>피기부자의 경우엔 주소 및 요청사항이 화면에 나타납니다. |

| 결제 내역 |
| :---: |
| <br><img src=./delivery_donation_service_frontend/public/image/readme/orderHistory.png height="800px" /> <img src=./delivery_donation_service_frontend/public/image/readme/orderHistoryDetail.png height="800px" /> |
| 결제 정보를 확인할 수 있습니다. |

| 알림함 |
| :---: |
| <br><img src=./delivery_donation_service_frontend/public/image/readme/alert.png height="800px" />|
| 광고 및 피기부자의 메시지를 확인할 수 있습니다. |

