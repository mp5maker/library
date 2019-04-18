import java.util.HashMap;


public class HashMapMod {
    public static void main(String[] args) {
        HashMap<String, String> capitalCities = new HashMap<String, String>();
        capitalCities.put("England", "London");
        capitalCities.put("Germany", "Berlin");
        capitalCities.put("Norway", "Oslo");
        capitalCities.put("USA", "Washington DC");

        // Key Pair Values
        System.out.print(capitalCities);
        /* For Each */
        for (String city : capitalCities.values()) {
            System.out.println(city);
        }
        /* For Each with keys*/
        for (String key : capitalCities.keySet()) {
            System.out.println(key);
            System.out.println(capitalCities.get(key));
        }
        /* Size */
        System.out.print(capitalCities.size());
        /* Get */
        System.out.print(capitalCities.get("England"));
        /* Remove */
        System.out.print(capitalCities.remove("England"));
        System.out.print(capitalCities);
        /* Clear */
        capitalCities.clear();
    }
}