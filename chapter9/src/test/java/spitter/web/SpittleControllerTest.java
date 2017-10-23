/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package spitter.web;

import java.util.LinkedList;
import java.util.List;
import org.hamcrest.Matchers;
import org.junit.Test;
import org.junit.Before;
import org.junit.internal.runners.JUnit4ClassRunner;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.servlet.view.InternalResourceView;
import spitter.data.Spittle;
import spitter.data.SpittleRepository;

/**
 *
 * @author arbocdi
 */
@RunWith(JUnit4ClassRunner.class)
public class SpittleControllerTest {

    SpittleRepository repository;
    SpittleController controller;
    List<Spittle> spittles;
    Spittle sp10;

    @Before
    public void before() {
        this.spittles = this.createSpittles(2);
        sp10 = new Spittle(10);
        this.repository = Mockito.mock(SpittleRepository.class);
        Mockito.when(this.repository.findSpittles(Mockito.eq(2)))
                .thenReturn(this.spittles);
        Mockito.when(this.repository.findOne(Mockito.eq(10L)))
                .thenReturn(sp10);

        this.controller = new SpittleController();
        this.controller.setRepository(repository);
    }

    public List<Spittle> createSpittles(int count) {
        List<Spittle> spittleList = new LinkedList();
        for (int i = 0; i < count; i++) {
            Spittle spittle = new Spittle(i);
            spittleList.add(spittle);
        }
        return spittleList;
    }

    @Test
    public void testShow2Spittles() throws Exception {
        //setSingleView нужен потому, что возвращаемое имя представления
        //совпадает с путем запроса /spittles
        MockMvc mockMvc = MockMvcBuilders.standaloneSetup(controller)
                .setSingleView(new InternalResourceView("/WEB-INF/views/spittles.jsp"))
                .build();
        mockMvc.perform(MockMvcRequestBuilders.get("/spittles"))
                .andExpect(MockMvcResultMatchers.view().name("spittles"))
                .andExpect(MockMvcResultMatchers.model().attributeExists("spittleList"))
                .andExpect(MockMvcResultMatchers.model().attribute("spittleList",
                                Matchers.hasItems(this.spittles.toArray())));

    }

    @Test
    public void testFindSpittle() throws Exception {
        MockMvc mockMvc = MockMvcBuilders.standaloneSetup(controller)
                .setSingleView(new InternalResourceView("/WEB-INF/views/spittle.jsp"))
                .build();
        mockMvc.perform(MockMvcRequestBuilders.get("/spittles/10"))
                .andExpect(MockMvcResultMatchers.view().name("spittle"))
                .andExpect(MockMvcResultMatchers.model().attributeExists("spittle"))
                .andExpect(MockMvcResultMatchers.model().attribute("spittle",
                                Matchers.equalTo(this.sp10)));

    }

}
