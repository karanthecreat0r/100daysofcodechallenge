package exercises;

public class MyNumberRunner {

	public static void main(String[] args) {
		MyNumber number = new MyNumber(10);
		number.maker();
		boolean isPrime = number.isPrime();
		System.out.println("isPrime " + isPrime);
		number.sumUptoN();
		int sumOfDivisors = number.sumOfDivisors();
		System.out.println("sum Up to N =" + sumOfDivisors);
		number.printNumberTriangle();

	}

}
