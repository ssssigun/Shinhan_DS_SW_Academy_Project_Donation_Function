package kr.co.main.alarm;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AlarmRepository extends JpaRepository<Alarm,Integer> {
	List<Alarm> findAllByUserPkOrderByDateDesc(int user_pk);
	
	
	//기부히스토리에 저장이 되면 장바구니 데이터베이스는 삭제
	
}
