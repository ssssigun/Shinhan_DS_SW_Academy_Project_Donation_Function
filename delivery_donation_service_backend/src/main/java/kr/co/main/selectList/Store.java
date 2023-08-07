package kr.co.main.selectList;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
@Table(name="Store")
public class Store {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="store_pk")
	private int storePk;
	
	@Column(name="store_name")
	private String storeName;
	
	@Column(name="category")
	private String category;
	
	@Column(name="store_address")
	private String storeAddress;
	
	@Column(name="store_image")
	private String storeImage;
	
	@Column(name="tel")
	private String tel;
	
	@Column(name="start_time")
	private Timestamp startTime;
	
	@Column(name="end_time")
	private Timestamp endTime;
	
	@Column(name="parti_donate")
	private int partiDonate;
	
	@Column(name="delivery_time")
	private String deliveryTime;
	
	@Column(name="delivery_price")
	private String deliveryPrice;
	
	@Column(name="review")
	private int review;
	
}
