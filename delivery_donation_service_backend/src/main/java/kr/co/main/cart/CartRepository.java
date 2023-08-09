package kr.co.main.cart;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart,Integer>{
	List<Cart> findByUserPkAndFlag(int user_pk, int flag);
}
