package switchass;

public class payrolldriver {

	public static void main(String[] args) {
		payroll dri = new payroll("karan", 12);
		dri.setHoursWorked(70.5);
		dri.setPayrate(8.20);

		System.out.println(dri.getName());

	}

}
