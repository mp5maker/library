public class Choices {
    enum Level {
        LOW,
        MEDIUM,
        HIGH
    }

    public static void main(String[] args) {
        Level low = Level.LOW;
        Level medium = Level.MEDIUM;
        Level high = Level.HIGH;

        System.out.println(low);
        System.out.println(medium);
        System.out.println(high);
        for (Level level : Level.values()) {
            System.out.println(level);
        }
    }
}