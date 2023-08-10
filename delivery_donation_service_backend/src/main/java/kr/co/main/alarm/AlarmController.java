package kr.co.main.alarm;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Api(tags = {"알림함 관련 컨트롤러"})
@RestController
public class AlarmController {
	@Autowired
	AlarmRepository aRepo;
	
	@GetMapping("/selectAlarms")
	@ResponseBody
	public List<Alarm> selectAlarms(@RequestParam int userPk) {
		return aRepo.findAllByUserPkOrderByDateDesc(userPk);
	}
	
	//알림에 따듯해진 마음 전하기 메세지 넣기
    @ApiOperation(value = "알림에 따듯해진 마음 전하기 메세지 넣기")
	@GetMapping("/inputAlarmMessage")
	public void insertAlarmMessage(Alarm a) {
    	Timestamp timestamp = new Timestamp(System.currentTimeMillis());
    	a.setTitle("기부완료");
    	a.setDate(timestamp);
        aRepo.save(a);
	}
}
