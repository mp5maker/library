public class Casting {
    public static void main(String[] args) {
        int cash = 9;
        // Widening Casting
        double trustableNumber = cash;

        System.out.println(cash);
        System.out.println(trustableNumber);

        double reversibleCash = 15.79;
        // Narrowing Casting
        int reversible = (int) reversibleCash;

        System.out.println(reversibleCash);
        System.out.println(reversible);
    }
}