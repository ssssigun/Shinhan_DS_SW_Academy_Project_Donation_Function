package kr.co.main.order;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Api(tags = {"주문내역 관련 컨트롤러"})
@RestController
@RequestMapping("/db")
public class OrderController {
	@Autowired
	OrderRepository oRepo;
	
	@Autowired
	OrderDetailRepository odRepo;
	
	@GetMapping("/selectOrders")
	@ResponseBody
	public List<Order> selectOrders(@RequestParam int userPk) {
		return oRepo.findAllByUserPkAndOrderFlagOrderByOrderDateDesc(userPk, 0);
	}

	@GetMapping("/selectDonations")
	@ResponseBody
	public List<Order> selectDonations(@RequestParam int userPk) {
		return oRepo.findAllByUserPkAndOrderFlagNotOrderByOrderDateDesc(userPk, 0);
	}
	
	//orderDonator(기부하는사람, 일반사용자)
	@ApiOperation(value = "주문, 주문내역에 기부하는사람이 주문한 식당과 메뉴 저장")
	@GetMapping("/inputOrderAndDetail")
	@Transactional // 트랜잭션 설정
	public void insertOrderAndDetail(Order o, @RequestParam Integer orderPk,OrderDetail od) {
    	try {
    		Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        	o.setOrderDate(timestamp);
            // 주문 저장
            oRepo.save(o);

            // 주문 상세 저장
//            od.setOrderPk(o.getOrderPk()); // 주문 상세의 외래 키를 주문의 PK로 설정
         // 주문 정보 저장 후에 o의 ID를 얻어올 수 있음
            od.setOrderPk(orderPk); // 주문 상세 정보에 주문 정보 설정
            odRepo.save(od);

        } catch (Exception e) {
            // 예외 발생 시 롤백 처리
            throw e;
        }
        
	}
	

	
	
}
