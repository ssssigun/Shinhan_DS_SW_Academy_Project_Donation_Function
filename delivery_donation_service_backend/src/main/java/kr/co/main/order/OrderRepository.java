package kr.co.main.order;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order,Integer> {
	List<Order> findAllByUserPkOrderByOrderDateDesc(int user_pk);
}
