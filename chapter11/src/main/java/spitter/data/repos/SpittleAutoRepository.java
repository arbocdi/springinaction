/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package spitter.data.repos;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;
import spitter.data.Spittle;

/**
 *
 * @author root
 */
@Qualifier("auto")
@Transactional(transactionManager = "spittle")
public interface SpittleAutoRepository extends JpaRepository<Spittle, Long>,SpittleRepository  {
    
}
