package com.ikon.chat.userservice.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID) // or GenerationType.AUTO
    private UUID ticketId; // Unique identifier for each ticket
    private String subject;
    private String account;
    private String application;

//    @CreationTimestamp
    private LocalDateTime dateTime;

//    @UpdateTimestamp
    private LocalDateTime updateTimeStamp;
    private String mobileNumber;
    private String severity;
    private String type;
    private String ticketDescription; // description
//    private String status;//Status of the ticket
}
