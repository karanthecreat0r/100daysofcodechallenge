package exercises;

public class MyNumber {

	private int number;
	int res;
	int sum;

	public MyNumber(int number) {
		this.number = number;
	}
	void maker() {
		System.out.println("Hi iam Karan");
}

public boolean isPrime() {
	// 2 to numbe-1
	// how can check if a number is divisible by 2?
	if (number < 2) {
		return false;
	}
	for (int i = 2; i < number; i++) {
		if (number%i==0) {
			return false;
		}
	}
	return true;
	}

	public void sumUptoN() {
		for (int i = 1; i <= number; i++) {
		res = res + i;
	}
	System.out.println("the sum " + res);
}

public int sumOfDivisors() {
	// except 1,6=>2,3
	for (int i = 2; i < number; i++) {
		if (number % i == 0) {
			sum = sum + 1;
		}
	}
	return sum;
}

public void printNumberTriangle() {

	for (int row = 1; row <= number; row++) {
		for (int col = 1; col <= row; col++) {
			System.out.print(col + " ");
		}
		System.out.println();
	}

}

}
