package spitter.web;

import org.hamcrest.Matchers;
import org.junit.Before;
import org.junit.Test;
import org.junit.internal.runners.JUnit4ClassRunner;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import spitter.data.Spitter;
import spitter.data.SpitterRepository;

/**
 *
 * @author arbocdi
 */
@RunWith(JUnit4ClassRunner.class)
public class SpitterControllerTest {

    SpitterRepository repo;
    Spitter me;
    SpitterController controller;

    @Before
    public void before() {
        repo = Mockito.mock(SpitterRepository.class);

        me = new Spitter();
        me.setEmail("arbocdi@gmail.com");
        me.setFirstName("arboc");
        me.setLastName("di");
        me.setPassword("123");
        me.setUsername("arbocdi");

        Mockito.when(this.repo.findByUsername(Mockito.eq("arbocdi"))).
                thenReturn(me);

        controller = new SpitterController();
        controller.setSpitterRepo(repo);
    }

    @Test
    public void shouldShowRegistration() throws Exception {
        MockMvc mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
        mockMvc.perform(MockMvcRequestBuilders.get("/spitter/register"))
                .andExpect(MockMvcResultMatchers.view().name("registerForm"));
    }

    @Test
    public void shouldProcessRegistration() throws Exception {
        MockMvc mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
        mockMvc.perform(MockMvcRequestBuilders.post("/spitter/register")
                .param("firstName", "arboc")
                .param("lastName", "di")
                .param("username", "arbocdi")
                .param("password", "123")
                .param("email", "arbocdi@gmail.com"))
                .andExpect(MockMvcResultMatchers.redirectedUrl("/spitter/arbocdi"));
        Mockito.verify(this.repo).save(Mockito.eq(me));

    }

    @Test
    public void shouldDisplaySpitter() throws Exception {
        MockMvc mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
        mockMvc.perform(MockMvcRequestBuilders.get("/spitter/arbocdi"))
                .andExpect(MockMvcResultMatchers.view().name("profile"))
                .andExpect(MockMvcResultMatchers.model().attributeExists("spitter"))
                .andExpect(MockMvcResultMatchers.model().attribute("spitter", Matchers.equalTo(this.me)));
        Mockito.verify(this.repo).findByUsername(Mockito.eq("arbocdi"));
    }
}
