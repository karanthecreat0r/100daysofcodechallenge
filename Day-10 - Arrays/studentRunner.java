package arreystart;

import java.math.BigDecimal;

public class studentRunnner {

	public static void main(String[] args) {
		Student student = new Student("karan", 34, 23, 12, 76, 56);
		Student student1 = new Student("ramu", 12, 19, 78, 56, 97);
		int number = student.getNumberOfMarks();
		System.out.println("Number of marks given= " + number);
		int sum = student.getTotalNumberOfMarks();
		System.out.println("Total sum is = " + sum);
		int maximumMark = student.getMaximumMark();
		System.out.println("maximum marks = " + maximumMark);
		int minimumMark = student.getMinimumMark();
		System.out.println("minimum Marks=" + minimumMark);
		BigDecimal average = student.getAverageMarks();
		System.out.println("Average Marks =" + average);
		BigDecimal percentage = student.getPercentage();
		System.out.println(percentage);
		System.out.println(student);
		student.addMark(100);
		System.out.println(student);
		student.removeMarkAtIndex(1);

	}

}
