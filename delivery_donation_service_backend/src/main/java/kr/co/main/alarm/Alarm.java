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
	String title;
	String content;
	Timestamp date;
	
	@Column(name="user_pk")
	int userPk;
}
