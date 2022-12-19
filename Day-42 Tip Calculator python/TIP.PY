print("Welcome to tip calculator")
bill=float(input("What was the total bill?\n"))
tip =int(input("What percentage tip would you like to give? 10,12, or 15?\n"))
split = int(input("How many people to split the bill?\n"))

bill_tip = tip/100 * bill+bill

pay = (bill_tip/split)
final_amount = "{:.2f}".format(pay)
print(f"Each person should pay \n{final_amount}")
150