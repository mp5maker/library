import java.util.Scanner;

public class UserInput {
    public static void main(String[] args) {
        Scanner myObj = new Scanner(System.in);
        System.out.println("Enter Username");

        String username = myObj.nextLine();
        System.out.println(username);
        myObj.close();
    }
}