public class HandleException {
    public static void main(String[] args) {
        try {
            String[] laptops = {"Toshiba", "Lenovo", "Asus", "Dell"};
            System.out.println(laptops[6]);
        } catch(Exception error) {
            System.out.println("Something went wrong!");
            // System.out.println(error);
        } finally {
            System.out.println("The try catch is finished");
        }
    }
}