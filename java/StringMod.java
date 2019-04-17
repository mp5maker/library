public class StringMod {
    public static void main(String[] args) {
        String text = "Hello, how are you?";
        /* Length */
        System.out.println(text.length());
        /* UpperCase */
        System.out.println(text.toUpperCase());
        /* LowerCase */
        System.out.println(text.toLowerCase());
        /* IndexOf */
        System.out.println(text.indexOf("are"));
        /* Concatenation */
        System.out.println(text + " Boom!");
        /* Concat */
        String boom = " Boom!";
        System.out.println(text + boom);
    }
}