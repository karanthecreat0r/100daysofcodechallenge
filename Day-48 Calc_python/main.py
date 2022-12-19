from art import logo


# ADD
def add(n1, n2):
  return n1 + n2


# Sub
def sub(n1, n2):
  return n1 - n2


#divide
def divide(n1, n2):
  return n1 / n2


#multiply
def multiply(n1, n2):
  return n1 * n2


operations = {"+": add, "-": sub, "*": multiply, "/": divide}


def calculator():
  print(logo)

  num1 = float(input("What is your first nmumber\n"))
  for symbol in operations:
    print(symbol)
  should_continue = True
  while should_continue == True:
    operation_symbol = input("pick an operation\n")
    num2 = float(input("What is your next nmumber\n"))
    calcuation_function = operations[operation_symbol]
    answer = int(calcuation_function(num1, num2))

    print(f"{int(num1)} {operation_symbol} {int(num2)} = {answer}")

    if input(
        f"Type 'Y' to continue calculating with {answer}, type 'N' to Exit new Calculation \n"
    ) == "Y":
      num1 = answer
    else:
      should_continue = False
      calculator()


calculator()
