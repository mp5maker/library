public class OtherObject {
    public static void main(String[] args) {
        SimpleObject SimpleObject = new SimpleObject();
        System.out.println(SimpleObject.x);

        Student student = new Student();
        String name = "Photon";
        student.greeting(name);
        student.goodNight();
    }
}