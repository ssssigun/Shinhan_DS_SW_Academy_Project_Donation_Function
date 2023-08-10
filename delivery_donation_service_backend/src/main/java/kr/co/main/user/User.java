package kr.co.main.user;



import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
@Entity
@Table(name="User")
public class User {
	@Id
	@Column(name="user_pk")
	int userPk;
	
	@Column(name="user_name")
	String userName;
	
	String nickname;
	Date regdate;
	int certi;
	String secretkey;
	String address;
	
	@Column(name="detail_address")
	String detailAddress;
	
	String tel;
	
	
	

	
}
