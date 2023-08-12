package kr.co.main.order;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.main.user.User;

public interface OrderDetailRepository extends JpaRepository<OrderDetail,Integer> {
	
}
