package kr.co.main.selectList;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString	
@Entity
@Table(name="Menu")
public class Menu {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="menu_pk")
	private int menuPk;
	
	@Column(name="store_pk")
	private int storePk;
	
	@Column(name="menu_name")
	private String menuName;
	
	@Column(name="menu_price")
	private int menuPrice;
	
	@Column(name="category")
	private String category;
	
	@Column(name="can_donate")
	private int canDonate;
	
	@Column(name="menu_picture")
	private String menuPicture;
	
	@Column(name="detail")
	private String detail;
}
