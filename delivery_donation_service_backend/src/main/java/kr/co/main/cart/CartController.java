package kr.co.main.cart;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

//장바구니 기능을 수행하는 컨트롤러
//장바구니와 기부 보따리 둘 다 사용
@RestController
@RequestMapping("/cart")
@Api(tags = {"장바구니 기능을 수행하는 컨트롤러"})
public class CartController {
	
	@Autowired
	CartRepository cRepo;
	
	//장바구니에 메뉴 넣기
    @ApiOperation(value = "장바구니에 메뉴 넣기")
	@GetMapping("/inputC")
	public void insertMenu(Cart c) {
		cRepo.save(c);
	}
	
	//메뉴 개수 업데이트
	@GetMapping("/updateAmount")
    @ApiOperation(value = "메뉴 개수 업데이트")
	public void updateAmount(@RequestParam int amount, @RequestParam int cartPk) {
		cRepo.updateMenuAmount(amount, cartPk);
	}
	
	//장바구니 조회
	@GetMapping("/selectCart")
    @ApiOperation(value = "장바구니 조회")
	@ResponseBody
	public List<Cart> selectCart(@RequestParam int userPk, @RequestParam int flag){
		return cRepo.findAllByUserPkAndFlag(userPk, flag);
	}
		
	//장바구니 전체 삭제 (전체)
	@GetMapping("/deleteMenuAll")
    @ApiOperation(value = "장바구니 전체 삭제 (전체)")
	public void deleteMenuAll(@RequestParam int userPk, @RequestParam int flag) {
		cRepo.deleteMenuAll(userPk, flag);
	}
	
	//장바구니 메뉴 삭제 (단품)
	@GetMapping("/deleteMenu")
    @ApiOperation(value = "장바구니 메뉴 삭제 (단품)")
	public void deleteMenu(Cart c) {
		cRepo.deleteMenu(c.getUserPk(), c.getMenu().getMenuPk(), c.getFlag());

	} 
	
//	//장바구니 가게 메뉴 삭제 (가게)
//	@GetMapping("/deleteStoreMenu")
//    @ApiOperation(value = "장바구니 가게 메뉴 삭제 (가게)")
//	public void deleteStoreMenu(Cart c) {
//		cRepo.delete(null);
//	}
	
	

}
