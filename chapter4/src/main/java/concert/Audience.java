package concert;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

/**
 * Аудитория, которая неким образом реагирует на выступления.
 *
 * @author arbocdi
 */
@Aspect
@Component
public class Audience {

    //чтобы 4 раза не повторять одно и тоже pointcut expression
    @Pointcut("execution(* concert.Performance.perform(..))")
    public void performance() {
        //тело метода не важно и должно быть пустым
    }

    @Before("performance()")
    public void silenceCellPhones() {
        System.out.println("Silencing cell phones");
    }

    @Before("performance()")
    public void takeSeats() {
        System.out.println("Taking seats");
    }

    @AfterReturning("performance()")
    public void applause() {
        System.out.println("CLAP CLAP");
    }

    @AfterThrowing("performance()")
    public void demandRefund() {
        System.out.println("Demanding a refund");
    }
    @Around("performance()")
    public void watchPerformance(ProceedingJoinPoint jp){
        try{
            System.out.println("before");
            jp.proceed();
            System.out.println("after OK");
        }
        catch(Throwable ex){
            System.out.println("after ERR");
        }
    }
}
