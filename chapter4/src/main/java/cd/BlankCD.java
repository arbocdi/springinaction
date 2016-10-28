package cd;

import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author arbocdi
 */
public class BlankCD implements CompactDisc {

    private final Map<Integer, String> tracks = new HashMap();

    public void addTrack(int num, String title) {
        this.tracks.put(num, title);
    }

    @Override
    public void play() {
        System.out.println("Playing current track");
    }

    @Override
    public void playTrack(int track) {
        String title = this.tracks.get(track);
        System.out.println(String.format("Playing %s - %s", track,title));
    }

}
