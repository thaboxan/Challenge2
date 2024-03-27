let state = "idle";
let user = null;
let calculated = "2";

// Only allowed to change below

function logCalc() {
  const isString = typeof calculated === "string";
  const calculatedAsNumber = isString ? parseInt(calculated) : calculated;
  calculated = calculatedAsNumber + 1;
  console.log(calculated);
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
};

function checkUser() {
  if (user && state === "requesting") {
    console.log(`User: ${user} (${calculated})`);
  }
}

// // Only allowed to change code above

// checkUser()
// calcUser()

// checkUser()
// calcUser()

// checkUser()
// calcUser()

// checkUser()
// calcUser()

// checkUser()
// calcUser()
