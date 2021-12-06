// This is used to store the questions for the quiz
let questionsMortal = [
    {//Question 1
        question:"Who is the King of the Gods?",
        correctAnswer:"Zeus",
        answerA:"Zeus",
        answerB:"Hades",
        answerC:"Posiedon",
        answerD:"Apollo"
    },
    {//Question 2
        question:"Who is the God of the sea?",
        correctAnswer:"Posiedon",
        answerA:"Zeus",
        answerB:"Pontus",
        answerC:"Posiedon",
        answerD:"Triton"
    },
    {//Question 3
        question:"Who is the God of the underworld?",
        correctAnswer:"Hades",
        answerA:"Zeus",
        answerB:"Hades",
        answerC:"Thanatos",
        answerD:"Persephone"
    },
    {//Question 4
        question:"Who is the Queen of the Gods?",
        correctAnswer:"Hera",
        answerA:"Hera",
        answerB:"Hestia",
        answerC:"Athena",
        answerD:"Demeter"
    },
    {//Question 5
        question:"Who is the God of war?",
        correctAnswer:"Ares",
        answerA:"Zeus",
        answerB:"Ares",
        answerC:"Kratos",
        answerD:"Apollo"
    },
    {//Question 6
        question:"Who was tasked with 12 labours?",
        correctAnswer:"Hercules",
        answerA:"Hercules",
        answerB:"Perseus",
        answerC:"Theseus",
        answerD:"Jason"
    },
    {//Question 7
        question:"Who embarked on an odyssey?",
        correctAnswer:"Odysseus",
        answerA:"Odysseus",
        answerB:"Hercules",
        answerC:"Achilles",
        answerD:"Theseus"
    },
    {//Question 8
        question:"Who is the Goddess of wisdom?",
        correctAnswer:"Athena",
        answerA:"Hera",
        answerB:"Hestia",
        answerC:"Artemis",
        answerD:"Athena"
    },
    {//Question 9
        question:"Where did the Olympians live?",
        correctAnswer:"Mount Olympus",
        answerA:"Mount Olympus",
        answerB:"Mount Everest",
        answerC:"Mount Othrys",
        answerD:"Mount Vesuvius"
    },
    {//Question 10
        question:"Who is the messenger god?",
        correctAnswer:"Hermes",
        answerA:"Hermes",
        answerB:"Fedex",
        answerC:"Helios",
        answerD:"Apollo"
    },
]

let questionsDemi = [
    {//Question 1
        question:"Who was the goddess of the rainbow?",
        correctAnswer:"Iris",
        answerA:"Hera",
        answerB:"Hestia",
        answerC:"Athena",
        answerD:"Iris"
    },
    {//Question 2
        question:"What was the food of the gods?",
        correctAnswer:"Ambrosia",
        answerA:"Ambrosia",
        answerB:"Nectar",
        answerC:"Honey",
        answerD:"Syrup"
    },
    {//Question 3
        question:"What is the name of the three-headed dog that guards the entrance to Hades?",
        correctAnswer:"Cerberus",
        answerA:"Cerberus",
        answerB:"Fluffy",
        answerC:"Fang",
        answerD:"Hydra"
    },
    {//Question 4
        question:"Who slayed the Medusa the Gorgon?",
        correctAnswer:"Perseus",
        answerA:"Hercules",
        answerB:"Perseus",
        answerC:"Theseus",
        answerD:"Achilles"
    },
    {//Question 5
        question:"What was the name of Jason's ship he sailed to get the Golden Fleece?",
        correctAnswer:"Argo",
        answerA:"Argo",
        answerB:"Argonaunt",
        answerC:"Argos",
        answerD:"Black Pearl"
    },
    {//Question 6
        question:"Who had a constellation named after themselves?",
        correctAnswer:"Orion",
        answerA:"Orion",
        answerB:"Perseus",
        answerC:"Theseus",
        answerD:"Jason"
    },
    {//Question 7
        question:"Which daughter of Zeus was the cause of the Trojan War?",
        correctAnswer:"Helen",
        answerA:"Paris",
        answerB:"Helen",
        answerC:"Athena",
        answerD:"Hebe"
    },
    {//Question 8
        question:"What type of mythical creature was Chiron?",
        correctAnswer:"Centaur",
        answerA:"Centaur",
        answerB:"Minotaur",
        answerC:"Gorgon",
        answerD:"Satyr"
    },
    {//Question 9
        question:"What group of warriors did Achilles lead?",
        correctAnswer:"Myrmidons",
        answerA:"Myrmidons",
        answerB:"Spartans",
        answerC:"Immortals",
        answerD:"Argonauts"
    },
    {//Question 10
        question:"Who flew too close to the sun?",
        correctAnswer:"Icarus",
        answerA:"Pegasus",
        answerB:"Icarus",
        answerC:"Helios",
        answerD:"Apollo"
    },
]
let questionsOlympian = [
    {//Question 1
        question:"What was left in Pandora’s box after she released misery and evil?",
        correctAnswer:"Hope",
        answerA:"Hope",
        answerB:"Happiness",
        answerC:"Guilt",
        answerD:"Sadness"
    },
    {//Question 2
        question:"Orpheus went into the underworld to rescue who?",
        correctAnswer:"Eurydice",
        answerA:"Penelope",
        answerB:"Eurydice",
        answerC:"Persephone",
        answerD:"Aphrodite"
    },
    {//Question 3
        question:"Who was the beautiful youth loved by the Greek goddess Aphrodite?",
        correctAnswer:"Adonis",
        answerA:"Paris",
        answerB:"Adonis",
        answerC:"Eros",
        answerD:"Ares"
    },
    {//Question 4
        question:"Who fulfilled the prophecy of killing his father and marrying his mother?",
        correctAnswer:"Oedipus",
        answerA:"Eros",
        answerB:"Perseus",
        answerC:"Zeus",
        answerD:"Oedipus"
    },
    {//Question 5
        question:"Who was the first woman?",
        correctAnswer:"Pandora",
        answerA:"Pandora",
        answerB:"Eve",
        answerC:"Helen",
        answerD:"Athena"
    },
    {//Question 6
        question:"Who kept Odysseus imprisoned for 7 years on the island of Ogygia?",
        correctAnswer:"Calypso",
        answerA:"Athena",
        answerB:"Aphrodite",
        answerC:"Medea",
        answerD:"Calyspo"
    },
    {//Question 7
        question:"Who was the only person to solve the Riddle of the Sphinx?",
        correctAnswer:"Oedipus",
        answerA:"Odysseus",
        answerB:"Hercules",
        answerC:"Oedipus",
        answerD:"Theseus"
    },
    {//Question 8
        question:"Who built the Trojan horse used to sack the city of Troy?",
        correctAnswer:"Epeius",
        answerA:"Epeius",
        answerB:"Theseus",
        answerC:"Odysseus",
        answerD:"Apollo"
    },
    {//Question 9
        question:"Who fell in love with their own reflection?",
        correctAnswer:"Narcissus",
        answerA:"Solipsistic",
        answerB:"Adonis",
        answerC:"Eros",
        answerD:"Narcissus"
    },
    {//Question 10
        question:"Who were Arges, Brontes and Steropes?",
        correctAnswer:"Cyclopes",
        answerA:"Gorgons",
        answerB:"Cyclopes",
        answerC:"Graiae",
        answerD:"Sirens"
    },
]