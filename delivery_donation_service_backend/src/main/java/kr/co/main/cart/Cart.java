package kr.co.main.cart;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import kr.co.main.selectList.Menu;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString(exclude="menu")
@Entity
@Table(name = "Cart")
public class Cart {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "cart_pk")
	private int cartPk;
	
	@Column(name = "flag")
	private int flag;
	
	@Column(name = "user_pk")
	private int userPk;
	
	@Column(name = "menu_pk")
	private int menuPk;
	
	@Column(name="amount")
	private int amount;
	
	@ManyToOne
	@JoinColumn(name="menu_pk")
	private Menu menu;
}
