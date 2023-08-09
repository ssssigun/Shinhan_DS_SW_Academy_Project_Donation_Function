package kr.co.main.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

    private static final String API_NAME = "배달 음식 플랫폼 기부 서비스 API";
    private static final String API_VERSION = "0.0.1";
    private static final String API_DESCRIPTION = "배달 음식 플랫폼 기부 서비스 프로젝트 명세서";

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
        		.useDefaultResponseMessages(true)
                .apiInfo(apiInfo())
                .select()
                .apis(RequestHandlerSelectors.any())              
                .paths(PathSelectors.any())
                .build();
    }

    public ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title(API_NAME)
                .version(API_VERSION)
                .description(API_DESCRIPTION)
                .build();
    }
}
