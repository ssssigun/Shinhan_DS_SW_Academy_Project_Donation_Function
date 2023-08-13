package kr.co.main.selectList;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface StoreRepository extends JpaRepository<Store, Integer>{
	List<Store> findByCategory(String category);
	
	Store findByStorePk(int store_pk);
	
	@Query(value="SELECT menu_pk FROM Store s JOIN Menu m  ON s.store_pk = m.store_pk WHERE s.store_pk= :storePk", nativeQuery=true)
	List<Integer> donationMenuTotal(@Param("storePk") int storePk);
}
