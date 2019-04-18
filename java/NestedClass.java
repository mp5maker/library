// One advantage of inner classes, is that they can access attributes and methods of the outer class:
public class NestedClass {
    public int x = 10;

    class InsideClass {
        int y = 5;
    }

    static class InnerClass {
        int z = 8;
    }

    class AccessOuterClassX {
        public int giveX() {
            return x;
        }
    }

    public static void main(String[] args) {
        NestedClass nestedClass = new NestedClass();
        InsideClass insideClass = nestedClass.new InsideClass();
        NestedClass.InnerClass innerClass = new NestedClass.InnerClass();
        NestedClass.AccessOuterClassX accessOuterX = nestedClass.new AccessOuterClassX();


        System.out.println(nestedClass.x);
        System.out.println(insideClass.y);
        System.out.println(innerClass.z);
        System.out.println(accessOuterX.giveX());
    }
}