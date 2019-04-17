public class ArrayMod {
    public static void main(String[] args) {
        String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
        System.out.println(cars[0]);
        System.out.println(cars.length);
        for (String car: cars) {
            System.out.println(car);
        }
        String[][] detailsCars = {
            {"Corolla", "Premier", "Celica"},
            {"Rx-7", "Rx-8"}
        };
        for (int i = 0; i < detailsCars.length; i++) {
            for (int j = 0; j < detailsCars[i].length; j++) {
                System.out.println(detailsCars[i][j]);
            }
        }
    }
}