package kr.co.main.order;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import kr.co.main.alarm.Alarm;
import kr.co.main.selectList.Store;
import kr.co.main.user.User;

@Api(tags = {"주문내역 관련 컨트롤러"})
@RestController
public class OrderController {
	@Autowired
	OrderRepository oRepo;
	
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
	
	//주문내역에 가게사장님에게 요청사항 메세지 저장
    @ApiOperation(value = "주문내역에 가게사장님에게 요청사항 메세지 저장")
	@GetMapping("/inputOrderToOwnerMessage")
	public void inputOrderToOwnerMessage(Order o) {
    	oRepo.save(o);
	}
	

	
	
}
