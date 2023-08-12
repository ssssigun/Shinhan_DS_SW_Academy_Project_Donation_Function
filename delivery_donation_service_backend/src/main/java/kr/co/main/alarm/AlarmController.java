package kr.co.main.alarm;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import kr.co.main.order.DonationHistory;
import kr.co.main.order.DonationHistoryRepository;

@Api(tags = {"알림함 관련 컨트롤러"})
@RestController
public class AlarmController {
	@Autowired
	AlarmRepository aRepo;
	
	DonationHistoryRepository dRepo;
	
	@GetMapping("/selectAlarms")
	@ResponseBody
	public List<Alarm> selectAlarms(@RequestParam int userPk) {
		return aRepo.findAllByUserPkOrderByDateDesc(userPk);
	}
	
	//알림에 따듯해진 마음 전하기 메세지 넣기
    @ApiOperation(value = "알림에 따듯해진 마음 전하기 메세지 넣기")
	@GetMapping("/inputAlarmMessage")
	public void insertAlarmMessage(Alarm a, DonationHistory d) {
    	Timestamp timestamp = new Timestamp(System.currentTimeMillis());
    	a.setTitle("기부받은분이 감사인사를 남겼습니다.");
    	a.setDate(timestamp);
        aRepo.save(a);
        dRepo.save(d);
        
	}
}
