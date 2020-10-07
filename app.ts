export {};

const WelcomePerson = (person: Person): string => {
  console.log(`Hey ${person.firstName} ${person.lastName}`);
  return `Hey ${person.firstName} ${person.lastName}`;
};

const james = {
  firstName: "shemilore",
  lastName: "Silva",
};

WelcomePerson(james);

interface Person {
  firstName: string;
  lastName: string;
}
