package kr.co.main.order;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
@Entity
@Table(name="Order_detail")
public class OrderDetail {
	@Id
	@Column(name="order_detail_pk")
	int orderDetailPk;
	int state;
	@Column(name="order_detail_price")
	int orderDetailPrice;
	int amount;
	
	@Column(name="order_pk")
	int orderPk;
	@Column(name="menu_pk")
	int menuPk;
}
