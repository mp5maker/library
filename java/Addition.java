public class Addition {
    public static int performAction(int[] numbers) {
        int totalSum = 0;
        for (int number: numbers) {
            totalSum += number;
        }
        return totalSum;
    }

    public static void main(String[] args) {
        int[] numbers = { 3, 4 };
        System.out.println(performAction(numbers));
    }
}