let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


function logCalc () { 
    const isString = typeof calculated === 'numerical-string'; 
    const calculatedAsNumber = isString ? parseInt(calculated) : calculated;   //! converts the numeric string into a number
    calculated = calculatedAsNumber + 1;
    return calculated;
}

// function calcUser () {
//   logCalc
//   if (calculated > 2) user = 'John'
//   if (calculated > 2) state = 'requesting'
//   if (calculated > 3) state = 'idle'
// }

// function checkUser () {
// 	if (user && state === 'requesting') {
// 		console.log(`User: ${user} (${calculated})`)
// 	}
// }

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


