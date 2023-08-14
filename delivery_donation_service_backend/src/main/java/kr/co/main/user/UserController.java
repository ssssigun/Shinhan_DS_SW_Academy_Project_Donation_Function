package kr.co.main.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import kr.co.main.selectList.Store;
import kr.co.main.user.User;

@Api(tags = {"유저정보 관련 컨트롤러"})
@RestController
@RequestMapping("/db")
public class UserController {
	@Autowired
	UserRepository uRepo;
	
	
	//회원 정보 가져오기 (sessionStorage에 있는 userPk사용)
	@GetMapping("/selectUserInfo")
	@ResponseBody
	public User selectUserInfo(@RequestParam int userPk) {
		return uRepo.findByUserPk(userPk);
	}

	//회원 권한 조회(sso 키 값으로)
	@GetMapping("confirmRole")
	@ResponseBody
	public User confirmRole(@RequestParam int secretkey) {
		return uRepo.findBySecretkey(secretkey);
	}
	
}
