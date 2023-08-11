package kr.co.main.order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Api(tags = {"기부받는사람들 주문내역 컨트롤러"})
@RestController
public class DonationHistoryController {
	@Autowired
	OrderRepository dRepo;
	//주문내역에 가게사장님에게 요청사항 메세지 저장
    @ApiOperation(value = "주문내역에 가게사장님에게 요청사항 메세지 저장")
	@GetMapping("/inputOrderToOwnerMessage")
	public void inputOrderToOwnerMessage(DonationHistory d) {
//    	dRepo.save(d);
	}
}
