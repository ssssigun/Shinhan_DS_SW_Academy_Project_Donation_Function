package kr.co.main.alarm;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;

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
}
