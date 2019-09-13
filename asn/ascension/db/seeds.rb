# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "test1", password: "test1", email: "test1")

Character.create(name:"Uru", style:"Insane", race: "Dwarf", prof: "Warrior", str: 9 , dex: 1, fort: 5, wis: 0)