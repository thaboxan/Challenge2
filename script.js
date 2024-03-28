let state = "idle";
let user = null;
let calculated = "1";

// Only allowed to change below

const logCalc = () => {
  const isString = typeof calculated === "string";
  const calculatedAsNumber = isString ? parseInt(calculated) : calculated;
  calculated = calculatedAsNumber + 2;
  return calculated;
}

const calcUser = () => {
  logCalc();
  if (calculated > 2) {
    user = "John";
    state = "requesting";
  }
  if (calculated > 3) {
    state = "idle";
  }
  return(user, state)
};

const checkUser = () => {
  if (user && state === "requesting") {
    console.log(`User: ${user} (${calculated})`);
  }
};

 // Only allowed to change code above

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();

checkUser();
calcUser();
