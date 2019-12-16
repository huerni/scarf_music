package com.cgsx.scarf_music.config;

import com.cgsx.scarf_music.config.handler.CustomizeAuthenticationEntryPoint;
import com.cgsx.scarf_music.config.handler.CustomizeAuthenticationFailureHandler;
import com.cgsx.scarf_music.config.handler.CustomizeAuthenticationSuccessHandler;
import com.cgsx.scarf_music.config.handler.CustomizeLogoutSuccessHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.stereotype.Component;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private MyUserDetailService myUserDetailsService;

    @Autowired
    private CustomizeAuthenticationSuccessHandler authenticationSuccessHandler;

    @Autowired
    private CustomizeAuthenticationFailureHandler authenticationFailureHandler;

    @Autowired
    private CustomizeLogoutSuccessHandler customizeLogoutSuccessHandler;

    @Autowired
    private CustomizeAuthenticationEntryPoint authenticationEntryPoint;



    @Override
    public void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
                .csrf().disable()
                .authorizeRequests().antMatchers("/static/**").permitAll()
                .antMatchers("/index/**").permitAll()
                .antMatchers("/album/**").permitAll()
                .antMatchers("/player/**").permitAll()
                .antMatchers("/playerList/**").permitAll()
                .antMatchers("/search/**").permitAll()
                .antMatchers("/singers/**").permitAll()
                .antMatchers("/singerDetail/**").permitAll()
                .antMatchers("/song/**").permitAll()
                .antMatchers("/songSheetList/**").permitAll()
                .antMatchers("/songSheet/**").permitAll()
                .antMatchers("/tophot/**").permitAll()
                .antMatchers("/topnew/**").permitAll()
                .antMatchers("/topup/**").permitAll()
                .and()
                .formLogin().permitAll().//允许所有用户
                successHandler(authenticationSuccessHandler).//登录成功处理逻辑
                failureHandler(authenticationFailureHandler)//登录失败处理逻辑
                .and()
                .logout().
                permitAll().//允许所有用户
                logoutSuccessHandler(customizeLogoutSuccessHandler).deleteCookies("JSESSIONID")
                //异常处理(权限拒绝、登录失效等)
                .and().exceptionHandling().
                authenticationEntryPoint(authenticationEntryPoint);//匿名用户访问无权限资源时的异常处理

    }
    @Bean
    public static NoOpPasswordEncoder noOpPasswordEncoder(){
        return (NoOpPasswordEncoder) NoOpPasswordEncoder.getInstance();
    }

//    @Bean
//    public BCryptPasswordEncoder passwordEncoder() {
//        // 设置默认的加密方式（强hash方式加密）
//        return new BCryptPasswordEncoder();
//    }


    /**
    * @Description: 根据用户名或者邮箱登录
    * @Param: [authenticationManagerBuilder]
    * @return: void
    * @Author: cgsx
    * @Date: 2019/12/13
    */
//    @Autowired
//    public void configureGlobal(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
//        authenticationManagerBuilder.userDetailsService(myUserDetailsService);
//    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService());
    }

    @Bean
    public UserDetailsService userDetailsService() {
        //获取用户账号密码及权限信息
        return new MyUserDetailService();
    }
}
