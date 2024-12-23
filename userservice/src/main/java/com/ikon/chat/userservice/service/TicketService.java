package com.ikon.chat.userservice.service;

import com.ikon.chat.userservice.entity.Ticket;
import com.ikon.chat.userservice.repository.TicketRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class TicketService {
    @Autowired
    private TicketRepository ticketRepository;

    public Ticket saveTicket(Ticket ticket) {

        ticket.setDateTime(LocalDateTime.now());

        System.out.println("**Ticket : "+ticket);

        return ticketRepository.save(ticket);
    }

    public Ticket getTicketById(UUID ticketId) {
        return ticketRepository.findById(ticketId)
                .orElseThrow(() -> new RuntimeException("Ticket not found"));
    }

    public List<Ticket> getAllTickets() {
//          return ticketRepository.findAll();
        return ticketRepository.findAllByOrderByDateTimeDesc();
    }

    public ResponseEntity<Ticket> updateTicket(Ticket ticket) {

        Optional<Ticket> fetchTicket = ticketRepository.findById(ticket.getTicketId());
        if(fetchTicket.isEmpty()){
            return new ResponseEntity<>(new Ticket(), HttpStatus.BAD_REQUEST);
        }

        Ticket originalTicket = fetchTicket.get();

        if(ticket.getSubject() != null){
            originalTicket.setSubject(ticket.getSubject());
        }
        if(ticket.getAccount() != null){
            originalTicket.setAccount(ticket.getAccount());
        }
        if(ticket.getApplication() != null){
            originalTicket.setApplication(ticket.getApplication());
        }
        if(ticket.getMobileNumber() != null){
            originalTicket.setMobileNumber(ticket.getMobileNumber());
        }
        if(ticket.getSeverity() != null){
            originalTicket.setSeverity(ticket.getSeverity());
        }
        if(ticket.getType() != null){
            originalTicket.setType(ticket.getType());
        }
        if(ticket.getTicketDescription() != null){
            originalTicket.setTicketDescription(ticket.getTicketDescription());
        }

        originalTicket.setUpdateTimeStamp(LocalDateTime.now());
        System.out.println("----Updated : "+originalTicket);
        return new ResponseEntity<>(ticketRepository.save(originalTicket), HttpStatus.OK);
    }
}
