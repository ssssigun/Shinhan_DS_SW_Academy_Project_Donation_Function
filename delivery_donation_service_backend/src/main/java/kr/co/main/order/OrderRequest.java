package kr.co.main.order;

import lombok.Data;

import java.util.List;

@Data
public class OrderRequest {
    private String storeName;
    private List<CartItem> cart;
    // Other fields
}
