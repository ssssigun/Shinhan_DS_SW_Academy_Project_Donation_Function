package kr.co.main.selectList;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ListService {
	@Autowired
	StoreRepository sRepo;
	@Autowired
	MenuRepository mRepo;
	
	//가게 리스트 출력
	public List<Store> selectStore(String category){
		return sRepo.findByCategory(category);
	}
	
	//메뉴 리스트 출력
	public List<Menu> selectMenu(int store_pk){
		return mRepo.findByStorePk(store_pk);
	}
	
	
	//가게 전체 기부 음식 개수 구하기
	public List<Store> selectStoreAndCount(String category){
		List<Store> storeList = sRepo.findByCategory(category);
		for(int i=0;i<storeList.size();i++) {
			List<Integer> menuPks = sRepo.donationMenuTotal(storeList.get(i).getStorePk());
			int cnt =0;
			for(int j=0; j<menuPks.size(); j++) {
				Object temp = mRepo.countAmount(menuPks.get(j));
	    		if( temp != null) {
	    			cnt+=(int)temp;
	    		}
			}
			storeList.get(i).setDonationMenuTotal(cnt);
		}
		return storeList;
	}
	
	// 기부 메뉴 개수 구하기
	public List<Menu> selectMenuAndCount(int store_pk){
    	List<Menu> menuList = mRepo.findByStorePk(store_pk);
    	for(int i=0; i<menuList.size(); i++) {
    		Object temp = mRepo.countAmount(menuList.get(i).getMenuPk());
    		if( temp != null) {
    			menuList.get(i).setDonationAmount((int)temp);
    		}
    	}
		return menuList;
	}
	
	// 가게 정보 출력
	public Store storeInfo(int store_pk) {
		return sRepo.findByStorePk(store_pk);
	}
}
