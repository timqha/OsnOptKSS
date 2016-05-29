import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
public class Task3 {

        public static void main(final String[] args) {
        long time = System.currentTimeMillis();
        FileManager manager = new FileManager();
        try {
            manager.readSortWrite("Input3_3.txt");
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        System.out.println(System.currentTimeMillis() - time + " ms");
        }
}