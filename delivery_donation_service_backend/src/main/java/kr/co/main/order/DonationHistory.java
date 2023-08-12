package kr.co.main.order;

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
@Table(name="Donation_history")
public class DonationHistory {
	@Id
	@Column(name="donation_pk")
	int donationPk;
	@Column(name="user_pk")
	int userPk;
	@Column(name="order_detail_pk")
	int orderDetailPk;
	@Column(name="store_pk")
	int storePk;
	
	
	Timestamp date;
	int state;
	@Column(name="dona_flag")
	int donaFlag;
	String message;
	int disposable;
	@Column(name="to_deliveryman")
	String toDeliveryman;
}
