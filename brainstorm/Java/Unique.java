package brainstorm;

/* Implement an algorithm to determine if a string has all unique characters. What if
you can not use additional data structures? */


public class Unique {
    public boolean isUnique(String str) {
        boolean[] char_set = new boolean[256];
        for (int i = 0; i < str.length(); i++) {
            int val = str.charAt(i);
            if (char_set[val]) return false;
            char_set[val] = true;
        }
        return true;
    }

    public boolean isBitUnique(String str) {
        int checker = 0;
        for (int i = 0; i < str.length(); i++) {
            int val = str.charAt(i) - 'a';
            if(((checker) & (1 << val)) > 0) return false;
            checker |= (1 << val);
        }
        return true;
    }

    public static void main(String[] args) {
        Unique check = new Unique();
        String helloWorld = "Hello World";
        String hi = "hi";

        /* Time Complexity O(n) */
        System.out.println(check.isUnique(helloWorld));
        System.out.println(check.isUnique(hi));

        /* Time Complexity O(n^2), Space is reduced */
        System.out.println(check.isBitUnique(hi));
    }
}

