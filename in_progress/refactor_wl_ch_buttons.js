var buttonName = ["Warm Line", "Cal Hope"]

// loop over each adding the WL and CH referral / triage buttons
var implementSideButtons = function (names) {
  array.forEach(element => {
    const name = buttonNames[index];
    const words = name.split(" ")
    const initials = name[0]
    // todo Start here:
    const buttonClass = `${}`
    
    $("#MainContent").append($("<button id='setChTriageButton' class='flyCarolButton chButton'>Insta-CH-Triage</button>"))
  }); 
}

// build CH Triage button
$("#MainContent").append($("<button id='setChTriageButton' class='flyCarolButton chButton'>Insta-CH-Triage</button>"))

// add CH Triage button click listener
$("#setChTriageButton").click(function (e) {
  e.preventDefault()
  setChTriage()
})

// build CH Referral button
$("#MainContent").append($("<button id='addChReferralButton' class='flyCarolButton chButton'>CalHope Referral</button>"))

// add CH Ref button click listener
$("#addChReferralButton").click(function (e) {
  e.preventDefault()
  if (canReferCalhope()) {
    referCalhope()
  }
})