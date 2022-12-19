import random

# Stone papaer scissors
# code//

rock = '''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
'''

paper = '''
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
'''

scissors = '''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
'''
game = [rock,paper,scissors]
choose = input("what do you choose 0 for rock, 1 for Paper or 2 for scissors\n")
int_choose = int(choose)
print(game[int_choose])

computer = random.randint(0,2)
print(f"computer choose:{computer}")
print(game[computer])
if int_choose==computer :
  print("Draw")
elif int_choose >=3 or int_choose < 0:
  print("You typed and invalid number you loose")
elif int_choose == 0  and computer == 2:
  print("You Win")
elif computer == 0 and int_choose == 2:
  print("You Loose")
elif computer > int_choose :
  print("you Loose")
elif int_choose > computer:
  print("You Win")

  

