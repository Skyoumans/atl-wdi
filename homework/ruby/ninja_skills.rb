# Challenge 1: Booleans

a = true
b = false
puts a == b
puts a != b

# Challenge 2: Nil

n = nil
p n
puts '#{n} was here'
print n
puts n.class

# Challenge 3: Integers

d = 10
puts d
e = 3.1
d = e
puts d

# Challenge 4. Strings

christine = "Hi, I'm Christine"
likes_to = "long walks on the beach, kinda"
puts "#{christine} and I like #{likes_to}"

# Challenge 5. Input and Output

puts "Input a Number"
number = gets.chomp
puts number.to_i * 2

puts "What is your name?"
name = gets.chomp
puts "What do you like to do?"
likes = gets.chomp
puts "#{name} likes to #{likes}"