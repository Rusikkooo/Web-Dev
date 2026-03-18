from models import Cat, Dog,Animal


dog1 = Dog("Rex",3,15,"Woof",1)
dog2 = Dog("Hatiko",5,20,"Gaff-Gaff",0)
cat1 = Cat("Marco",4,10,"Meow",True)

animals = [dog1, dog2, cat1]

print("   --CHARACTERISTICS OF ANIMAL --          ")
for animal in animals:
    
    print(animal)
    
print("         --SPEAK--          ")
for animal in animals:
    animal.speak()
    
print("         --EAT--          ")
print("Feeding Rex with 2 kg of food:")
dog1.eat(2)
print("\nFeeding Marco with 1 kg of food:")
cat1.eat(1) 

