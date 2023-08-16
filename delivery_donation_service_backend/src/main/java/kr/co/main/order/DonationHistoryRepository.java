package kr.co.main.order;

import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

@Transactional
public interface DonationHistoryRepository extends JpaRepository<DonationHistory, Integer> {
	
	// 0개 이상으로 남은 음식 오래된 순으로 찾기
	//userPk와 donated_amount 반환 list로 반환
	@Query(value=""
			+ "SELECT user_pk, order_detail_pk, donated_amount "
			+ "FROM OrderF o JOIN Order_detail d "
			+ "ON o.order_pk = d.order_pk "
			+ "WHERE menu_pk =:menuPk "
			+ "AND donated_amount !=0 "
			+ "ORDER BY order_date "
			+ "limit 1;",nativeQuery=true)
	Map<String,Integer> findDonationAmount(@Param("menuPk") int menuPk);
	
	//남은 수량 1 차감하기
	@Query(value="UPDATE Order_detail SET donated_amount =:amount WHERE order_detail_pk = :orderDetailPk", nativeQuery=true)
	@Modifying
	int updateDonationAmount(@Param("orderDetailPk") int orderDetailPk,@Param("amount") int amount);
	
	List<DonationHistory> findAllByUserPkOrderByDateDesc(int user_pk);
}
