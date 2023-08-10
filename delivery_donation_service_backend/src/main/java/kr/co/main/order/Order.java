package kr.co.main.order;

import java.sql.Timestamp;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import kr.co.main.selectList.Store;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
@Entity
@Table(name="OrderF")
public class Order {
	@Id
	@Column(name="order_pk")
	int orderPk;
	@Column(name="order_date")
	Timestamp orderDate;
	@Column(name="order_flag")
	int orderFlag;
	@Column(name="order_price")
	int orderPrice;
	int pay;
	@Column(name="pay_state")
	int payState;
	@Column(name="order_state")
	int orderState;
	
	String message;
	String disposable;
	
	@Column(name="to_deliveryman")
	String toDeliveryman;

	@Column(name="user_pk")
	int userPk;
	
	@OneToMany
	@JoinColumn(name="order_pk")
	List<OrderDetail> orderDetails;
	
	@OneToOne
	@JoinColumn(name="store_pk")
	Store store;
}
