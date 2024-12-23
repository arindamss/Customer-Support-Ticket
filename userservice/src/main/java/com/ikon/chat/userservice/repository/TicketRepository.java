package com.ikon.chat.userservice.repository;

import com.ikon.chat.userservice.entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface TicketRepository extends JpaRepository<Ticket, UUID> {

    List<Ticket> findAllByOrderByUpdateTimeStampDescDateTimeDesc();


    List<Ticket> findAllByOrderByDateTimeDesc();



}
