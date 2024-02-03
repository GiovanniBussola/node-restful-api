interface User {
  birthYear: number
}

function calculateUserAge(user: User) {
  return new Date().getFullYear() - user.birthYear;
}

console.log(calculateUserAge({
  birthYear: 1999
}));
