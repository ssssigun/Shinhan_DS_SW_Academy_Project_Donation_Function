package kr.co.main.alarm;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
@Entity
@Table(name="Alarm")
public class Alarm {
	@Id
	@Column(name="alarm_pk")
	int alarmPk;
	
	@Column(name="title")
	String title;
	
	@Column(name="content")
	String content;
	
	@Column(name="date")
	Timestamp date;
	
	@Column(name="user_pk")
	int userPk;
	
	//생성자
	public Alarm() {
		
	}
	
	public Alarm (String content,int userPk) {
		this.title = "기부받은분이 감사인사를 남겼습니다.";
		this.content = content;
		this.userPk = userPk;
	}
}
