package kr.co.main.order;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import kr.co.main.selectList.Store;

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
	
	//가게 목록 가져오기 (카테고리 별)
//    @ApiOperation(value = "카테고리에 맞는 음식점 목록을 반환하는 메소드")
//    @ApiImplicitParam(name = "category", value = "음식점의 카테고리", dataType = "String")
//	@GetMapping("/selectStore")
//	@ResponseBody
//	public List<Order> selectStore(@RequestParam String category) {
//		return oRepo.findByCategory(category);
//	}
	
	
}
