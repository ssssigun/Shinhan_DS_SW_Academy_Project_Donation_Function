package kr.co.main.selectList;

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

//데이터의 목록들을 불러오는 기능을 수행하는 컨트롤러
@Api(tags = {"데이터의 목록들을 불러오는 기능을 수행하는 컨트롤러"})
@RestController
@RequestMapping("/db")
public class ListController {
	@Autowired
	StoreRepository sRepo;
	@Autowired
	MenuRepository mRepo;
	@Autowired
	ListService lservice;
	
	
	//가게 목록 가져오기 (카테고리 별)
    @ApiOperation(value = "카테고리에 맞는 음식점 목록을 반환하는 메소드")
    @ApiImplicitParam(name = "category", value = "음식점의 카테고리", dataType = "String")
	@GetMapping("/selectStore")
	@ResponseBody
	public List<Store> selectStore(@RequestParam String category) {
		return lservice.selectStore(category);
	}
	
	//메뉴 목록 가져오기 (가게 별)
    @ApiOperation(value = "음식점의 메뉴 목록을 반환하는 메소드")
	//Integer 형은 example파라메터를 안넣으면 스프링 콘솔에 경고 로그 뜸
    @ApiImplicitParam(name = "stoer_pk", value = "가게 PK", dataType = "Integer", example = "1")
	@GetMapping("/selectMenu")
	@ResponseBody
	public List<Menu> selectMenu(@RequestParam int store_pk) {
		return lservice.selectMenu(store_pk);
	}
	
	//가게 목록 가져오기 (카테고리 별)		기부
    @ApiOperation(value = "카테고리에 맞는 음식점 목록을 반환하는 메소드(기부된 가게 전체 메뉴의 개수까지 구하기)")
    @ApiImplicitParam(name = "category", value = "음식점의 카테고리", dataType = "String")
	@GetMapping("/selectStoreAndCount")
	@ResponseBody
	public List<Store> selectStoreAndCount(@RequestParam String category) {
		return lservice.selectStoreAndCount(category);
	}
	
	//메뉴 목록 가져오기 (가게 별)		기부
    @ApiOperation(value = "음식점의 메뉴 목록을 반환하는 메소드(기부된 메뉴의 개수까지 구하기)")
	//Integer 형은 example파라메터를 안넣으면 스프링 콘솔에 경고 로그 뜸
    @ApiImplicitParam(name = "stoer_pk", value = "가게 PK", dataType = "Integer", example = "1")
	@GetMapping("/selectMenuAndCount")
	@ResponseBody
	public List<Menu> selectMenuAndCount(@RequestParam int store_pk) {
		return lservice.selectMenuAndCount(store_pk);
	}
    
    //가게 정보 가져오기
    @ApiOperation(value = "가게 정보를 반환하는 메소드")
	@GetMapping("/storeInfo")
	@ResponseBody
    public Store storeInfo(@RequestParam int store_pk) {
		return lservice.storeInfo(store_pk);
	}
    
    @GetMapping("/selectStoreForPk")
    public Store selectStoreForPk(@RequestParam int storePk) {
    	return sRepo.findByStorePk(storePk);
    }
}
