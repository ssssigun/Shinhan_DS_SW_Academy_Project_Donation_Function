package kr.co.main.selectList;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

//데이터의 목록들을 불러오는 기능을 수행하는 컨트롤러
@RestController
public class ListController {
	@Autowired
	StoreRepository sRepo;
	@Autowired
	MenuRepository mRepo;
	
	//가게 목록 가져오기 (카테고리 별)
	@GetMapping("/selectStore")
	@ResponseBody
	public List<Store> selectStore(@RequestParam String category) {
		return sRepo.findByCategory(category);
	}
	
	//메뉴 목록 가져오기 (가게 별)
	@GetMapping("/selectMenu")
	@ResponseBody
	public List<Menu> selectMenu(@RequestParam int stoer_pk) {
		return mRepo.findByStorePk(stoer_pk);
	}
	
}
