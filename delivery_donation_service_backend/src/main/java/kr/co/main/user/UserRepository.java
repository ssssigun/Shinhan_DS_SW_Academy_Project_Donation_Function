package kr.co.main.user;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
	User findByUserPk(int user_pk);
	User findBySecretkey(int secretkey);
}
