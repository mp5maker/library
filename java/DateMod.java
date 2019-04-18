import java.time.LocalDate;
import java.time.LocalTime;

public class DateMod {
    public static void main(String[] args) {
        LocalTime localTime = LocalTime.now();
        LocalDate localDate = LocalDate.now();
        System.out.println(localTime);
        System.out.println(localDate);
    }
}