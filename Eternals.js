const eternals = [
    {
        name: "Ikaris",
        skillset: ["Flight", "Super Strength", "Laser Vision"],
        pic: "Pics\\Ikaris.png"
    },
    {
        name: "Sersi",
        skillset: ["Matter Manipulation", "Immortality", "Telepathy"],
        pic: "Pics\\Sersi.png"
    },
    {
        name: "Thena",
        skillset: ["Weapon Summoning", "Super Agility", "Immortality"],
        pic: "Pics\\Thena.png"
    },
    {
        name: "Kingo",
        skillset: ["Energy Projection", "Immortality", "Martial Arts"],
        pic: "Pics\\Kingo.png"
    },
    {
        name: "Sprite",
        skillset: ["Illusions", "Immortality", "Shape-shifting"],
        pic: "Pics\\Sprite.png"
    },
    {
        name: "Phastos",
        skillset: ["Technopathy", "Inventing", "Immortality"],
        pic: "Pics\\Phastos.png"
    },
    {
        name: "Makkari",
        skillset: ["Super Speed", "Immortality", "Enhanced Reflexes"],
        pic: "Pics\\Makkari.png"
    },
    {
        name: "Druig",
        skillset: ["Mind Control", "Immortality", "Telepathy"],
        pic: "Pics\\Druig.png"
    },
    {
        name: "Gilgamesh",
        skillset: ["Super Strength", "Immortality", "Enhanced Durability"],
        pic: "Pics\\Gilgamesh.png"
    },
    {
        name: "Ajak",
        skillset: ["Healing", "Immortality", "Telepathy"],
        pic: "Pics\\Ajak.png"
    }
];


const showInfo = () => {
    // get a handle to the input field and get the value
    let Eternal = document.querySelector("#EternalNum").value;

    // the array is zero-based, so subtract 1
    Eternal = parseInt(Eternal) - 1;

    // get a handle to the paragraph
    let selectedEternalInfo = document.querySelector(".selectedEternalInfo");

    // get the correspoding petsData object
    let ET = eternals[Eternal];

    // set the information
    selectedEternalInfo.textContent = `${ET.name} Has the following skills: ${ET.skillset.join(", ")}`;
    let EternalPic = document.querySelector(".selectedEternalPic");

    // set the image
    EternalPic.src = ET.pic;
}

//------------------------
//list skills

// Add content by modifying the textContent property
let EternalSkillsList = document.querySelector(".EternalSkillsList");
let uniqueSkills = [];

eternals.forEach((being) => {
    being.skillset.forEach(skill => {
        if (!uniqueSkills.includes(skill)) {
            uniqueSkills.push(skill);
        }
    });
});

let SkillList = `<ol>`;
SkillList += `The Eternal's Skills:`;
uniqueSkills.forEach(skill => {
    SkillList += `<li>${skill}</li>`;
});
SkillList += `</ol>`;

console.log(SkillList);

EternalSkillsList.innerHTML = SkillList;

//find skills
const findSkills = () => {
    
    let skill = document.querySelector("#ETSkill").value;
    let selectedETSkill = document.querySelector(".selectedETSkill");
    
    const foundEternals = [];
    const foundEternalsPic = [];
    eternals.forEach(eternal => {
      if (eternal.skillset.find(s => s === skill)) {
        foundEternals.push(eternal.name);
        foundEternalsPic.push(eternal.pic);
        console.log(foundEternals);
      }
    });


    let ETwithSkill = `<ol>`;
    ETwithSkill += `The Eternal's Skills:`;
    foundEternals.forEach(name => {
        ETwithSkill += `<li>${name}</li>`;
    });
    ETwithSkill += `</ol>`;



    // Iterate through the eternals array to find all matches
    const imageContainer = document.querySelector(".image-container");
    imageContainer.innerHTML = "";

    foundEternalsPic.forEach(image => {
    const img = document.createElement('img');
    img.src = image;
    imageContainer.appendChild(img);
    });


    selectedETSkill.innerHTML = ETwithSkill;

};


/* const SkillsInfo = () => {
    // get a handle to the input field and get the value
    let skill = document.querySelector("#ETSkill").value;

    // Initialize an array to store matching Eternals
    const matchingEternals = []

    // Iterate through the eternals array to find all matches
    eternals.forEach(eternal => {
        if (eternal.skillset.includes(skill)) {
            matchingEternals.push(eternal);
        }
    });

    // Get a handle to the paragraph to display the result
    let selectedETSkill = document.querySelector(".selectedETSkill");

    // Check if any Eternals were found
    if (matchingEternals.length > 0) {

        // Create a list of matching Eternals
        let result = `Eternals with the skill "${skill}":<ul>`;
        
        matchingEternals.forEach(eternal => {
            result += `<li>${eternal.name}</li>`;
        });

        result += `</ul>`;
        selectedETSkill.innerHTML = result;

    } else {
        selectedETSkill.textContent = `No Eternal found with the skill "${skill}".`;
    }
} */


// ------------------------------------------------------
// JAVASCRIPT

// Get a handle to the EternalInfo paragraph
let EternalInfo = document.querySelector(".EternalInfo");

// Add content by modifying the textContent property
EternalInfo.textContent = `Welcome to our newist Eternal, ${eternals[eternals.length - 1].name} with the skills:  ${eternals[eternals.length - 1].skillset}`;

let EternalList = document.querySelector(".EternalList");

let allEternalList = `<ol>`;
allEternalList += `The Eternals:`;
eternals.forEach((being) => {
    allEternalList += `<li> ${being.name}</li>`;
    console.log(being.name);
});
allEternalList += `</ol>`;

EternalList.innerHTML = allEternalList;