puts "Whats the subtotal?"
subtotal = gets.chomp.to_f
puts subtotal


puts "How many people are paying?"
num_people = gets.chomp.to_i
puts num_people


puts %{How much tip do you want to leave?
  1. 15%
  2. 18%
  3. 20%
  4. other}

buyer_input = gets.chomp
  if buyer_input === "1"
    tip_percent = 0.15
  elsif buyer_input === "2"
    tip_percent = 0.18
  elsif buyer_input === "3"
    tip_percent = 0.20
  else buyer_input === "other"
    tip_percent = 0.50
  end
  tip_value = subtotal * tip_percent
  puts tip_value.round(2)

puts "What is the tax percentage?(5, 6, or 7%)"
tax_percent = gets.chomp.to_i
tax_value = subtotal * (tax_percent/100.0)
meal_with_tax = subtotal + tax_value
puts "Here is your receipt:"
total = tip_value + tax_value + subtotal
puts subtotal
puts tax_value.round(2)
puts tip_value.round(2)
per_person = total/num_people
puts  "Your total is $#{total.round(2)}"
puts "Your share is $#{per_person..round(2)}"
