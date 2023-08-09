package kr.co.main.order;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order,Integer> {
	List<Order> findAllByUserPkAndOrderFlagOrderByOrderDateDesc(int user_pk, int order_flag);
	List<Order> findAllByUserPkAndOrderFlagNotOrderByOrderDateDesc(int user_pk, int order_flag);
}
