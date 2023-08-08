package kr.co.main.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//장바구니 기능을 수행하는 컨트롤러
@RestController
@RequestMapping("/cart")
public class CartController {
	
	@Autowired
	CartRepository cRepo;
	
	//장바구니에 메뉴 넣기
	@GetMapping("/inputC")
	public void insertMenu(Cart c) {
		cRepo.save(null);
	}
}