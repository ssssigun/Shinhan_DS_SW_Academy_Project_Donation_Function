package kr.co.main.cart;

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
@Table(name = "Cart")
public class Cart {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "cart_pk")
	public int cartPk;
	
	@Column(name = "flag")
	public int flag;
	
	@Column(name = "user_pk")
	public int userPk;
	
	@Column(name = "menu_pk")
	public int menuPk;
}
