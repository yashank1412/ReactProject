package com.ibm.springboot.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
//import com.ibm.springboot.demo.mail.EmailService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
@SpringBootApplication
public class App {
	@Autowired
	private static final Logger LOG = LoggerFactory.getLogger(App.class);
//	private EmailService emailService;
//	
//	public App(EmailService emailService) {
//		this.emailService= emailService;
//	}
	public static void main(String[] args) {
		LOG.info("Starting.....");
		LOG.warn("It's a warning........");
		LOG.error("It's an error.........");
		
		System.out.println("HelloController start here");
		SpringApplication.run(App.class, args);
	}
	
//	@EventListener(ApplicationReadyEvent.class)
//	public void sendEmail() {
//		emailService.sendEmail("Kartikktyr@gmail.com","Email from Ishwar","hi new mail from SAM");
//	}
}