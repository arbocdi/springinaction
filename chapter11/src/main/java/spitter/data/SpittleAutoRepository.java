/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package spitter.data;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author root
 */
@Qualifier("auto")
public interface SpittleAutoRepository extends JpaRepository<Spittle, Long>,SpittleRepository  {
    
}
