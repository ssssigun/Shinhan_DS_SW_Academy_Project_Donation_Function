package kr.co.main.order;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import kr.co.main.selectList.Menu;
import kr.co.main.selectList.Store;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString(exclude="menu")
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
	
	@OneToOne
	@JoinColumn(name="menu_pk")
	Menu menu;
}
