const enums = () => {

  enum Role {
    ADMIN = "ADMIN",
    READ_ONLY = 100,
    AUTHOR,
  };

  const person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
  };

 

  console.log(person)


};

export default enums;
