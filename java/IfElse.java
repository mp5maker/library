public class IfElse {
    public static void main(String[] args) {
        /* Standard IF Else */
        int time = 22;
        if (time < 10) {
            System.out.println("Good Morning");
        } else if (time >= 10 && time < 20) {
            System.out.println("Good day.");
        } else {
            System.out.println("Good Evening");
        }
        /* Ternary */
        int newTime = 20;
        String result = (newTime < 18) ? "Good day" : "Good evening";
        System.out.println(result);
    }
}