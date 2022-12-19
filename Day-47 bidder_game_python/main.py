from replit import clear
# programming_dictionary = {
#   "Bug":
#   "Lorem ipsum is placeholder text commonly used in the graphic, print, and     publishing industries for previewing layouts and visual mockups",
#   "function":
#   "Lorem ipsum is placeholder text commonly used in the graphic, print, and     publishing industries for previewing layouts and visual mockups",
# }

# print(programming_dictionary["Bug"])

# student_score = {
#   "Hari": 73,
#   "VIno": 53,
#   "karan": 93,
#   "sparrow": 73,
#   "king": 19,
# }
# student_grades = {}

# for student in student_score:
#   score = student_score[student]
#   if score > 90:
#     student_grades[student] = "Outstanding"
#   elif score >= 60:
#     student_grades[student] = "Exceeds Exception"
#   elif score <= 59:
#     student_grades[student] = "Good"
# print(student_grades)

# Disctionary

# travel_log = [{
#   "country": "france",
#   "cities_visited": ["paris", "lilla", "Dijion"],
#   "total_visited": 12
# }, {
#   "country": "Germany",
#   "cities_visited": ["Berlin", "Hamburg", "Stuttgart"],
#   "total_visited": 5
# }]

# def add_new_country(country_visited, cities_visited, timevisited):
#   new_country = {}
#   new_country["country"] = country_visited
#   new_country["cities_visited"] = cities_visited
#   new_country["total_visited"] = timevisited
#   travel_log.append(new_country)

# add_new_country("Russua", ["Moscow", "saint"], 2)

# print(travel_log)

from art import logo, end

print(logo)
bids = {}
bid_over = False


def find_highest_bidder(bidding_record):
  highest_bid = 0
  for bidder in bidding_record:
    bid_amt = bidding_record[bidder]
    if bid_amt > highest_bid:
      highest_bid = bid_amt
      winner = bidder
  print(f"The Winner is {winner} with a bid of${highest_bid}")
  print(end)


while not bid_over:
  name = input("What is your name?: \n")
  price = int(input("What is your Bid Amount? \n"))
  bids[name] = price
  Should_continue = input(
    "Are there any other Bidders Types 'Y' fro yes 'N' for NO\n")
  if Should_continue == "N":
    bid_over = True
    find_highest_bidder(bids)
  elif Should_continue == "Y":
    clear()
