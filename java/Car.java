// SubClass
public class Car extends Vehicle {
    private String modelName = "Mustang";

    public static void main(String[] args) {
        Car newCar = new Car();
        newCar.honk();
        System.out.println(newCar.modelName);
        System.out.println(newCar.brand);
    }
}