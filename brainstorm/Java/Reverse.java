public class Reverse {

    public static String perform(String str) {
        char[] data = str.toCharArray();
        int i = 0;
        int j = data.length - 1;
        char temp;
        while (i < j) {
            temp = data[i];
            data[i] = data[j];
            data[j] = temp;
            i++;
            j--;
        }
        String givenString = new String(data);
        return givenString;
    }
    public static void main(String[] args) {
        String helloWorld = "hello world";
        System.out.println(perform(helloWorld));
    }
}