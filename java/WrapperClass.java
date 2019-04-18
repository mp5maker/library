public class WrapperClass {
    public static void main(String[] args) {
        Integer myInt = 5;
        Double myDouble = 5.99;
        Character myChar = 'A';

        System.out.println(myInt.intValue());
        System.out.println(myDouble.doubleValue());
        System.out.println(myChar.charValue());

        Integer yourInt = 100;
        /* To String */
        String myString = yourInt.toString();
        System.out.println(myString.length());
    }
}