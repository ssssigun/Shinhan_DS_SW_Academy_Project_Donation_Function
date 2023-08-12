package kr.co.main.order;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
	
	
	

	
	
}
