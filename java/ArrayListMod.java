import java.util.ArrayList;
import java.util.Collections;

public class ArrayListMod {
    public static void main(String[] args) {
        ArrayList<String> cars = new ArrayList<String> ();
        cars.add("Volvo");
        cars.add("BMW");
        cars.add("Ford");
        cars.add("Mazda");
        System.out.println(cars);

        /* Size */
        System.out.println(cars.size());
        /* For Each Loop Only in ArrayList */
        for (String car : cars) {
            System.out.println(car);
        }
        Collections.sort(cars);
        for (String car : cars) {
            System.out.println(car);
        }
        /* Get */
        System.out.println(cars.get(0));
        /* Set */
        System.out.println(cars.set(0, "Opel"));
        System.out.println(cars);
        /* Remove */
        System.out.println(cars.remove(0));
        System.out.println(cars);
        /* Remove */
        cars.clear();
    }
}