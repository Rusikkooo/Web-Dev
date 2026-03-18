class Animal:
    def __init__(self,name,age,weight,voice):
        self.name = name
        self.age = age
        self.weight = weight
        self.voice = voice

    def speak(self):
        print(f"{self.name} says {self.voice}")

    def eat(self,food_amount):
        self.weight+=food_amount
        print(f"{self.name}, has eaten {food_amount} kg. The new weight is {self.weight} kg")
    
    def __str__(self):
        return f"The name is {self.name},age is {self.age},weight is  {self.weight}"
    
class Dog(Animal):
    def __init__(self,name,age,weight,voice,signal):
        super().__init__(name,age,weight,voice)
        self.signal = signal
    
    def fetch(self):
        print(f"{self.name} is bringing the ball!")
        
    def speak(self):
        if self.signal ==1:
            print(f"{self.name} says: {self.voice}! (Signal is ON)")
        else:
            print(f"{self.name} is silent... (Signal is OFF)")

class Cat(Animal):
    def __init__(self,name,age,weight,voice,is_indoor):
        super().__init__(name,age,weight,voice)
        self.is_indoor = is_indoor
    
    def purr(self):
        print(f"{self.name} is purring. Brrr-brrr.")
        
    def eat(self,food_amount):
        super().eat(food_amount)
        if self.is_indoor:
            print(f"{self.name} finished her gourmet meal and is cleaning her paws.")
        else:
            print(f"{self.name} ate quickly and is looking for more.")
            

