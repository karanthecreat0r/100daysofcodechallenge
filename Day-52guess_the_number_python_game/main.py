import random

print("Welcome to the Number Gussing Game!")

COMPUTER = random.randint(0, 100)
print("I'm thinking of a number between 1 and 100")

choise = input("Choose a difficulty.Type'easy' or 'hard':")


def easy_number():
  number = 10
  for i in range(1, 11):
    print(f"You have {number} attempts to guess the number")
    number = number - 1

    guess = int(input("Make a guess:"))
    if guess == COMPUTER:
      print("yes correct ")

    elif COMPUTER < guess:
      print("The number is low than you think")
    elif COMPUTER > guess:
      print("The number is high than you think")


def hard_number():
  number = 10
  for i in range(1, 6):
    print(f"You have {number} attempts to guess the number")
    number = number - 1

    guess = int(input("Make a guess:"))
    if guess == COMPUTER:
      print("yes correct ")

    elif COMPUTER < guess:
      print("The number is low than you think")
    elif COMPUTER > guess:
      print("The number is high than you think")


if choise == "easy":
  easy_number()
elif choise == "hard":
  hard_number()
else:
  print("Invalid")
