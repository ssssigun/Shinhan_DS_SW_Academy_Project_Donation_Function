package kr.co.main.selectList;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


public interface MenuRepository extends JpaRepository<Menu,Integer>{
	List<Menu> findByStorePk(int store_pk);
}
