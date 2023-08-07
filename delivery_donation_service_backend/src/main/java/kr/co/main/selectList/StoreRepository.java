package kr.co.main.selectList;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StoreRepository extends JpaRepository<Store, Integer>{
	List<Store> findByCategory(String category);
}
