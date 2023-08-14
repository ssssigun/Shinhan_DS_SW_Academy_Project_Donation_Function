package kr.co.main.order;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import kr.co.main.user.User;

public interface OrderRepository extends JpaRepository<Order,Integer> {
	List<Order> findAllByUserPkOrderByOrderDateDesc(int user_pk);
	List<Order> findAllByUserPkAndOrderFlagOrderByOrderDateDesc(int user_pk, int order_flag);
	List<Order> findAllByUserPkAndOrderFlagNotOrderByOrderDateDesc(int user_pk, int order_flag);
	List<User> findByUserPk(int user_pk);
	
	@Query(value="INSERT INTO OrderF (user_pk, store_pk, order_date, order_flag, order_price, pay, pay_state, order_state)"
			+ "	  VALUES (:userPk, :storePk, :orderDate, 0, :orderPrice, :pay, :payState, :orderState)", nativeQuery=true)
	@Modifying
	void insertDonationOrder(@Param("userPk") int userPk, @Param("storePk") int storePk, @Param("orderDate") Timestamp orderDate, @Param("orderPrice") int orderPrice, @Param("pay") int pay, @Param("payState") int payState, @Param("orderState") int orderState);
	
	@Query(value="INSERT INTO Order_detail (order_pk, menu_pk, state, order_detail_price, amount, donated_amount)"
			+ "   VALUES (:orderPk, :menuPk, 0, :orderDetailPrice, :amount, :amount)", nativeQuery=true)
	@Modifying
	int insertDonationOrderDetail(@Param("orderPk") int orderPk, @Param("menuPk") int menuPk, @Param("orderDetailPrice") int orderDetailPrice, @Param("amount") int amount);
	
	@Query(value="SELECT order_pk FROM OrderF WHERE user_pk = :userPk AND order_flag = 0 ORDER BY order_date DESC LIMIT 1", nativeQuery=true)
	int selectOrderPkForOrderDetail(@Param("userPk") int userPk);

	@Query(value="DELETE FROM Cart WHERE cart_pk = :cartPk", nativeQuery=true)
	@Modifying
	int deleteCart(@Param("cartPk") int cartPk);
}
