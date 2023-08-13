package kr.co.main.selectList;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface MenuRepository extends JpaRepository<Menu,Integer>{
	List<Menu> findByStorePk(int store_pk);
	
	@Query(value="SELECT donated_amount FROM Menu m JOIN Order_detail o ON m.menu_pk = o.menu_pk WHERE o.menu_pk= :menuPk AND can_donate = 1", nativeQuery=true)
	Object countAmount(@Param("menuPk") int menuPk);
}
