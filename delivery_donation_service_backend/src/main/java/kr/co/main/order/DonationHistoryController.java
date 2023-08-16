package kr.co.main.order;

import java.sql.Timestamp;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import kr.co.main.alarm.Alarm;
import kr.co.main.alarm.AlarmRepository;
import kr.co.main.selectList.StoreRepository;

@Api(tags = {"기부받는사람들 주문내역 컨트롤러"})
@RestController
@RequestMapping("/db")
public class DonationHistoryController {
	
	@Autowired
	DonationHistoryRepository dRepo;
	@Autowired
	AlarmRepository aRepo;
	@Autowired
	StoreRepository sRepo;
	
	//주문내역에 가게사장님에게 요청사항 메세지 저장
    @ApiOperation(value = "주문내역에 가게사장님에게 요청사항 메세지 저장")
	@GetMapping("/OrderFree")
    @Transactional
	public void OrderFree(DonationHistory d, @RequestParam String content, @RequestParam int menuPk) {
    	Map<String,Integer> updateTarget = dRepo.findDonationAmount(menuPk);
    	
		// 알림 내용 생성
		Alarm a = new Alarm(content, updateTarget.get("user_pk"));
		
    	//날짜 설정
    	Timestamp date = new Timestamp(System.currentTimeMillis());
    	d.setDate(date);
    	a.setDate(date);
    	
    	// 주문 상세 수량 차감 (업데이트)
    	dRepo.updateDonationAmount(updateTarget.get("order_detail_pk"), updateTarget.get("donated_amount")-1);
    	
    	// 주문하기 (기부 히스토리 인서트)
    	dRepo.save(d);
    	
    	// 알림 저장 (인서트)
    	aRepo.save(a);
	}
    
    @GetMapping("/selectOrdersFree")
    public Map<String, Object> selectOrdersFree(@RequestParam int userPk) {
    	Map<String, Object> returnMap = new HashMap<String, Object>();
    	
    	List<DonationHistory> donationHistory = dRepo.findAllByUserPkOrderByDateDesc(userPk);
    	returnMap.put("orderFreeList", donationHistory);
    	
    	Map<String, Object> stores = new HashMap<String, Object>();
    	for (int i = 0; i < donationHistory.size(); i++) {
    		int storePk = donationHistory.get(i).getStorePk();
    		stores.put(storePk+"", sRepo.findByStorePk(storePk));
    	}
    	
    	returnMap.put("stores", stores);
    	
    	return returnMap;
    }
}
