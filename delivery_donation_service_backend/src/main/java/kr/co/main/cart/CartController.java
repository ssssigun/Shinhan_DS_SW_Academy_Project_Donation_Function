package kr.co.main.cart;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;

//장바구니 기능을 수행하는 컨트롤러
//장바구니와 기부 보따리 둘 다 사용
@RestController
@RequestMapping("/cart")
@Api(tags = {"장바구니 기능을 수행하는 컨트롤러"})
public class CartController {
	
	@Autowired
	CartRepository cRepo;
	
	//장바구니에 메뉴 넣기
	@GetMapping("/inputC")
	public void insertMenu(Cart c) {
		cRepo.save(c);
	}
	
	//메뉴 갯수 업데이트
	@GetMapping("/updateAmount")
	public void updateAmount(@RequestParam int user_pk, @RequestParam int menu_pk, @RequestParam int flag) {
		cRepo.save(null);
	}
	
	//장바구니 조회
	@GetMapping("/selectCart")
	@ResponseBody
	public List<Cart> selectCart(@RequestParam int user_pk, @RequestParam int flag){
		return cRepo.findByUserPkAndFlag(user_pk, flag);
	}
		
	//장바구니 전체 삭제
	@GetMapping("/deleteMenuAll")
	public void deleteMenuAll(@RequestParam int user_pk, @RequestParam int flag) {
		cRepo.delete(null);
	}
	
	//장바구니 메뉴 삭제
	@GetMapping("/deleteMenu")
	public void deleteMenu(@RequestParam int user_pk, @RequestParam int menu_pk, @RequestParam int flag) {
		cRepo.delete(null);
	}
	
	//장바구니 가게 메뉴 삭제
	@GetMapping("/deleteStoreMenu")
	public void deleteStoreMenu(@RequestParam int user_pk, @RequestParam int store_pk, @RequestParam int flag) {
		cRepo.delete(null);
	}
	

}
