package chapter2;

import java.util.List;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author arbocdi
 */
public class GenericCD implements CompactDisc{
    private String artist;
    private List<String> songs;
    @Setter@Getter
    private String price;
    public GenericCD(String artist,List<String> songs){
        this.artist = artist;
        this.songs = songs;
    }

    @Override
    public void play() {
        System.out.println("Playing GenericCD");
    }
}
