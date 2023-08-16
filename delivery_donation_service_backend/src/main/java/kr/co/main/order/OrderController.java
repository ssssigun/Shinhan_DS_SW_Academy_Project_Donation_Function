package kr.co.main.order;

import java.sql.Timestamp;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
		return oRepo.findAllByUserPkAndOrderFlagOrderByOrderDateDesc(userPk, 1);
	}

	@GetMapping("/selectDonations")
	@ResponseBody
	public List<Order> selectDonations(@RequestParam int userPk) {
		return oRepo.findAllByUserPkAndOrderFlagOrderByOrderDateDesc(userPk, 0);
	}
	
	
	@ApiOperation(value = "주문, 주문내역에 기부하는사람이 주문한 식당과 메뉴 저장")
	@Transactional
	@PostMapping("/insertDonationOrder")
	public void insertOrder(@RequestBody Map<String, Object> resultMap) {
		// OrderF 테이블에 저장
		Map<String, Object> store = (HashMap<String, Object>) resultMap.get("store");
		oRepo.insertDonationOrder(Integer.parseInt((String)resultMap.get("userPk")), (Integer) store.get("storePk"), new Timestamp(System.currentTimeMillis()), (Integer)resultMap.get("totalPrice"), (Integer)resultMap.get("pay"), 0, 0);

	}
	
	@PostMapping("/insertDonationDetailOrder")
	@Transactional
	public void insertOrderDetail(@RequestBody Map<String, Object> resultMap) {		
		List<HashMap<String, Object>> carts = (List<HashMap<String, Object>>) resultMap.get("cart");
		
		// OrderPk 가져오기
		int orderPk = oRepo.selectOrderPkForOrderDetail(Integer.parseInt((String) resultMap.get("userPk")));
		
		// OrderDetail 테이블에 저장
		for (int i = 0; i < carts.size(); i++) {
			Map<String, Object> cart = carts.get(i);
			Map<String, Object> menu = (HashMap<String, Object>) cart.get("menu");
			oRepo.insertDonationOrderDetail(orderPk, (Integer) menu.get("menuPk"), 
					(Integer) menu.get("menuPrice"), 
					(Integer) cart.get("amount"));
			
			oRepo.deleteCart((Integer)cart.get("cartPk"));
		}
		
	}
	
	
	
}
