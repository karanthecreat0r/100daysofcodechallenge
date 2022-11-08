package arreystart;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;

public class Student {

	private String name;
	private ArrayList<Integer> marks = new ArrayList<Integer>();

	public Student(String name, int... marks) {
		this.name = name;
		for (int mark : marks) {
			this.marks.add(mark);
		}
	}

	public int getNumberOfMarks() {

		return marks.size();
	}

	public int getTotalNumberOfMarks() {
		int sum = 0;
		for (int mark : marks) {
			sum += mark;
		}
		return sum;
	}

	public int getMaximumMark() {
		int maximum = Integer.MIN_VALUE;
		for (int mark : marks) {
			if (mark > maximum) {
				maximum = mark;

			}
		}
		return maximum;
	}

	public int getMinimumMark() {
		int minimum = Integer.MAX_VALUE;
		for (int mark : marks) {// 99
			if (mark < minimum) {
				minimum = mark;

			}
		}
		return minimum;
	}

	public BigDecimal getAverageMarks() {
		int sum = getTotalNumberOfMarks();
		int number = getNumberOfMarks();
		// total

		return new BigDecimal(sum).divide(new BigDecimal(number), 3, RoundingMode.UP);
	}

	public BigDecimal getPercentage() {
		int total = marks.size() * 100;
		int scored = getTotalNumberOfMarks();

		return new BigDecimal(scored).divide(new BigDecimal(total));
	}

	@Override
	public String toString() {
		return name + marks;

	}

	public void addMark(int mark) {
		marks.add(mark);

	}

	public void removeMarkAtIndex(int index) {
		marks.remove(index);

	}

}
