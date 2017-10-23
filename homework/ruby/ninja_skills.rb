# # Challenge 1: Booleans

# a = true
# b = false
# puts a == b
# puts a != b

# # Challenge 2: Nil

# n = nil
# p n
# puts '#{n} was here'
# print n
# puts n.class

# # Challenge 3: Integers

# d = 10
# puts d
# e = 3.1
# d = e
# puts d

# # Challenge 4. Strings

# christine = "Hi, I'm Christine"
# likes_to = "long walks on the beach, kinda"
# puts "#{christine} and I like #{likes_to}"

# # Challenge 5. Input and Output

# puts "Input a Number"
# number = gets.chomp
# puts number.to_i * 2

# puts "What is your name?"
# name = gets.chomp
# puts "What do you like to do?"
# likes = gets.chomp
# puts "#{name} likes to #{likes}"

# Challenge 6: Arrays

# my_first_array = []
# puts my_first_array = ["What", "are", "we", "doing", "here", 1,2,3,4,5]
# puts my_first_array.last
# puts my_first_array.first
# puts my_first_array.insert(1, "Joe")
# puts my_first_array.insert(2, 3)
# puts my_first_array.push("true")
# puts my_first_array.push[3]

# Challenge 7: Hashes

# my_favorite_animals = {
#   "edgar": "donkey",
#   "lilee": "dog",
#   "winney": "horse",
#   "bleu": "fish",
#   "tigger": "cat"
# }

# my_favorite_animals[:"edgar"] = "Bear"
# puts my_favorite_animals

# favorite_movie= {}

# favorite_movie[:"title"] = "The Dark Knight"
# puts favorite_movie


# Challenge 8: Ranges

# first_range = (1..10)
# puts first_range.to_a
# second_range = (1..999)
# puts second_range.to_a

# for entry in first_range do 
#   entry.to_s
#   puts entry
# end

# new_array = []
# first_range.each do |stuff|
#   if stuff.odd? == true
#     new_array.push(stuff * 2)
#   end
# end
# p new_array

# first_range.map do |num|
#   if num % 2 == 0
#     p num.to_s
#   else
#     p num
#   end
# end

# Challenge 9

new_range = (1..1000)
new_range = new_range.to_a
add = 0
new_range.each do |things|
  if things % 3 == 0 || things % 5 == 0
    add += things
  end
end
  p add