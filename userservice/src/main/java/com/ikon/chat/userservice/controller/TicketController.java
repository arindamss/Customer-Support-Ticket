package com.ikon.chat.userservice.controller;

import com.ikon.chat.userservice.entity.Ticket;
import com.ikon.chat.userservice.service.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/tickets")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class TicketController {
    @Autowired
    private TicketService ticketService;

    @PostMapping("/createTicket")
    public ResponseEntity<Ticket> createTicket(@RequestBody Ticket ticket) {
        return new ResponseEntity<>(ticketService.saveTicket(ticket), HttpStatus.CREATED);
    }

    @PostMapping("/updateTicket")
    public ResponseEntity<Ticket> updateTicket(@RequestBody Ticket ticket) {
        return ticketService.updateTicket(ticket);
    }

    @GetMapping("/getTicket/{ticketId}")
    public ResponseEntity<Ticket> getTicket(@PathVariable UUID ticketId) {
        System.out.println("Inside get Ticket: "+ticketId);
        return ResponseEntity.ok(ticketService.getTicketById(ticketId));
    }

    @GetMapping("/getAllTickets")
    public List<Ticket> getAllTickets() {
        return ticketService.getAllTickets();
    }
}
