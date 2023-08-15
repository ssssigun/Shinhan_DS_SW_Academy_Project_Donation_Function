package kr.co.main.cart;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
@Transactional
public interface CartRepository extends JpaRepository<Cart,Integer>{
	
	//장바구니에 메뉴 넣기
	@Query(value="INSERT INTO Cart(flag, user_pk, menu_pk, amount, store_pk) VALUE (?1, ?2, ?3, ?4, ?5)", nativeQuery=true)
	@Modifying
	int insertMenu(int flag, int user_pk, int menu_pk, int amount, int store_pk);
	
	//장바구니 조회
	List<Cart> findAllByUserPkAndFlag(int user_pk, int flag);
	
	//장바구니 조회 (같은 메뉴 확인)
	@Query(value ="SELECT * FROM Cart WHERE menu_pk =:menuPk AND user_pk =:userPk AND flag =:flag", nativeQuery = true)
	Cart menuInCart(@Param("menuPk") int menuPk, @Param("userPk") int userPk, @Param("flag") int flag);

	
	//메뉴 갯수 업데이트
	@Query(value ="UPDATE Cart SET amount= :amount WHERE cart_pk = :cartPk", nativeQuery = true)
	@Modifying
	int updateMenuAmount(@Param("amount") int amount, @Param("cartPk") int cartPk);
	
	//장바구니 전체 삭제 (전체)
	@Query(value="DELETE FROM Cart WHERE user_pk= :userPk AND flag = :flag", nativeQuery=true)
	@Modifying
	int deleteMenuAll(@Param("userPk") int userPk, @Param("flag") int flag);
	
	//장바구니 메뉴 삭제 (단품)
	@Query(value="DELETE FROM Cart WHERE cart_pk = :cartPk", nativeQuery=true)
	@Modifying
	int deleteMenu(@Param("cartPk") int cartPk);
	
	//장바구니 가게 메뉴 삭제 (가게)
	@Query(value="DELETE FROM Cart WHERE store_pk = :storePk AND user_pk = :userPk", nativeQuery=true)
	@Modifying
	int deleteStoreMenu(@Param("storePk") int storePk, @Param("userPk") int userPk);
	
}
