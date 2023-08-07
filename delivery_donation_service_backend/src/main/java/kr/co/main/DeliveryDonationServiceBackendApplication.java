package kr.co.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

//개발 단계에서는 Security 기능 꺼놓기
@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class DeliveryDonationServiceBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(DeliveryDonationServiceBackendApplication.class, args);
	}

}
