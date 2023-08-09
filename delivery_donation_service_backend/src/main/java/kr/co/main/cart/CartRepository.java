package kr.co.main.cart;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

@Transactional
public interface CartRepository extends JpaRepository<Cart,Integer>{
	
	//메뉴 갯수 업데이트
	@Query(value ="UPDATE Cart SET amount= :amount WHERE user_pk = :userPk AND menu_pk = :menuPk AND flag = :flag", nativeQuery = true)
	@Modifying
	int updateMenuAmount(@Param("userPk") int userPk, @Param("menuPk") int menuPk, @Param("amount") int amount, @Param("flag") int flag);
	
	//장바구니 조회
	List<Cart> findByUserPkAndFlag(int user_pk, int flag);
	
	//장바구니 전체 삭제 (전체)
	@Query(value="DELETE FROM Cart WHERE user_pk= :userPk AND flag = :flag", nativeQuery=true)
	@Modifying
	int deleteMenuAll(@Param("userPk") int userPk, @Param("flag") int flag);
	
	//장바구니 메뉴 삭제 (단품)
	@Query(value="DELETE FROM Cart WHERE user_pk = :userPk AND menu_pk = :menuPk AND flag = :flag", nativeQuery=true)
	@Modifying
	int deleteMenu(@Param("userPk") int userPk, @Param("menuPk") int menuPk, @Param("flag") int flag);
	
	//장바구니 가게 메뉴 삭제 (가게)
	@Query(value="DELETE FROM Cart WHERE ", nativeQuery=true)
	@Modifying
	int deleteStoreMenu();
	
}
