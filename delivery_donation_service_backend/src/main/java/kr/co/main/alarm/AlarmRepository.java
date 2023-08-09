package kr.co.main.alarm;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AlarmRepository extends JpaRepository<Alarm,Integer> {
	List<Alarm> findAllByUserPkOrderByDateDesc(int user_pk);
}
