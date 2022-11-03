package switchass;

import java.security.PublicKey;

class payroll {
	// States
	private static String name;
	private int idNumber;
	private double payRate;
	private double hoursWorked;

	public payroll(String n, int i) {
		name = n;
		idNumber = i;
	}

	public void setName(String n) {
		name = n;
	}
	public void setidNumber(int i) {
		idNumber = i;
	}

	public void setPayrate(double p) {
		payRate = p;
	}

	public void setHoursWorked(double h) {
		hoursWorked = h;
	}

	public String getName() {
		return name;
	}

	public int getidNumber() {
		return idNumber;
	}
	public double getPayrate() {
		return payRate;
	}

	public double HourseWorked() {
		return hoursWorked;
	}

	public double getGrossPay() {
		return 	hoursWorked*payRate

	}
	}
