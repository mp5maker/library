// A Class cannot have multiple inheritance but it can have multiple implements
class Pig implements Animal {
    public void animalSound() {
        System.out.println("weee wee");
    }

    public void sleep() {
        System.out.println("zzz zzz");
    }

    public void run() {
        System.out.println("Running and Running");
    }

    public static void main(String[] args) {
        Pig aPig = new Pig();
        aPig.animalSound();
        aPig.sleep();
    }
}