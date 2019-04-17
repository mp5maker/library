public class Variables {
    public static void main(String[] args) {
        String name = "Photon";
        int age = 15;
        float height = 5.77f;
        char grade = 'A';
        boolean insomnia = true;
        double cash = 15000;

        String description = "My name is "
            + name + ", I am "
            + age + " years old. My height is " + height + " inch. "
            + "I have a grade " + grade + " house"
            + "I do have " + insomnia + "."
            + "I have " + cash + " in cash";
        System.out.println(description);
    }
}