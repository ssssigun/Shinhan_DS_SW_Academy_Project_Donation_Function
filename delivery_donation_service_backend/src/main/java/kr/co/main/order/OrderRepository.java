package kr.co.main.order;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.main.user.User;

public interface OrderRepository extends JpaRepository<Order,Integer> {
	List<Order> findAllByUserPkOrderByOrderDateDesc(int user_pk);
	List<Order> findAllByUserPkAndOrderFlagOrderByOrderDateDesc(int user_pk, int order_flag);
	List<Order> findAllByUserPkAndOrderFlagNotOrderByOrderDateDesc(int user_pk, int order_flag);
	List<User> findByUserPk(int user_pk);
}
