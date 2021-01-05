package com.selfweb.selfdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.selfweb.selfdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
