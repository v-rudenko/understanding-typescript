const objects = () => {
  const person: {name: string; age: number; hobbies: string[]; role: [number, string]} = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, 'author']
  };

  person.role.push('admin')
  // person.role[1] = 10;
  let favoriteActivities: string[];
  favoriteActivities = ["sports"]

  console.log(person.role)


};

export default objects;
