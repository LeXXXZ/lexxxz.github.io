let hardSkills = [
    "Good knowledge of Core and Enterprise Java.",
    "Experience in Java EE.",
    "Good knowledge of AEM development.",
    "Experience in Spring Framework."
];

let skills = [
    "Self-learning and responsible.",
    "Good communication skills.",
    "Good team player."
];

var typedOptions = {
  loop: true,
  loopCount: false,
  startDelay: 100,
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 2000
};

var typedHardSkills = new Typed('.hard-skill-update', typedOptions);
typedHardSkills.strings = hardSkills;

var typedSkills = new Typed('.skill-update', typedOptions);
typedSkills.strings = skills;

document.getElementById("year").innerHTML = new Date().getFullYear();
