public class SimpleObject {
    int x = 5;
    /* This value cannot be modified */
    final int y = 10;

    // Constructor
    public SimpleObject() {}

    // Method Overloading
    public SimpleObject(int x) {
        this.x = x;
    }


    public int addition(int[] numbers) {
        int totalSum = 0;
        for (int number : numbers) {
            totalSum += number;
        }
        return totalSum;
    }

    static int subtraction(int[] numbers, int mainValue) {
        for (int number : numbers) {
            mainValue -= number;
        }
        return mainValue;
    }

    public int getYValue() {
        return this.y;
    }

    public static void main(String[] args) {
        SimpleObject simpleObject = new SimpleObject();
        System.out.println(simpleObject.x);
        simpleObject.x = 25;
        System.out.println(simpleObject.x);
        int[] numbers = {2, 3};
        int mainValue = 10;
        // Public Method required the calling of the object
        System.out.println(simpleObject.addition(numbers));
        // Static Method Calling works without the object
        System.out.println(subtraction(numbers, mainValue));

        SimpleObject simpleObjectTwo = new SimpleObject(20);
        System.out.println(simpleObjectTwo.x);
        System.out.println(simpleObjectTwo.getYValue());
    }
}