// This is used to store the questions for the quiz
//Mortal is difficulty 1, Demi is difficulty 2, Olympian is difficulty 3
const questions = [
    { 
        question:"Who is the King of the Gods?",
        answers: [
            {option:"Zeus", answer:true},
            {option:"Hades", answer:false},
            {option:"Posiedon", answer:false},
            {option:"Apollo", answer:false}
        ],
        difficulty:1
    },
    {
        question:"Who is the God of the sea?",
        answers: [
            {option:"Zeus", answer:false},
            {option:"Pontus", answer:false},
            {option:"Posiedon", answer:true},
            {option:"Triton", answer:false}
        ],
        difficulty:1
    },
    {
        question:"Who is the God of the underworld?",
        answers: [
            {option:"Zeus", answer:false},
            {option:"Hades", answer:true},
            {option:"Thanatos", answer:false},
            {option:"Persephone", answer:false}
        ],
        difficulty:1
    },
    {
        question:"Who is the Queen of the Gods?",
        answers: [
            {option:"Hera", answer:true},
            {option:"Hestia", answer:false},
            {option:"Athena", answer:false},
            {option:"Demeter", answer:false}
        ],
        difficulty:1
    },
    {
        question:"Who is the God of war?",
        answers: [
            {option:"Zeus", answer:false},
            {option:"Ares", answer:true},
            {option:"Kratos", answer:false},
            {option:"Apollo", answer:false}
        ],
        difficulty:1
    },
    {
        question:"Who was tasked with 12 labours?",
        answers: [
            {option:"Perseus", answer:false},
            {option:"Theseus", answer:false},
            {option:"Hercules", answer:true},
            {option:"Jason", answer:false}
        ],
        difficulty:1
    },
    {
        question:"Who embarked on an odyssey?",
        answers: [
            {option:"Odysseus", answer:true},
            {option:"Hercules", answer:false},
            {option:"Achilles", answer:false},
            {option:"Theseus", answer:false}
        ],
        difficulty:1
    },
    {
        question:"Who is the Goddess of wisdom?",
        answers: [
            {option:"Hera", answer:false},
            {option:"Hestia", answer:false},
            {option:"Artemis", answer:false},
            {option:"Athena", answer:true}
        ],
        difficulty:1
    },
    {
        question:"Where did the Olympians live?",
        answers: [
            {option:"Mount Olympus", answer:true},
            {option:"Mount Everest", answer:false},
            {option:"Mount Othrys", answer:false},
            {option:"Mount Vesuvius", answer:false}
        ],
        difficulty:1
    },
    {
        question:"Who is the messenger god?",
        answers: [
            {option:"Hermes", answer:true},
            {option:"Fedex", answer:false},
            {option:"Helios", answer:false},
            {option:"Apollo", answer:false}
        ],
        difficulty:1
    },
    {
        question:"Who was the goddess of the rainbow?",
        answers: [
            {option:"Hera", answer:false},
            {option:"Hestia", answer:false},
            {option:"Athena", answer:false},
            {option:"Iris", answer:true}
        ],
        difficulty:2
    },
    {
        question:"What was the food of the gods?",
        answers: [
            {option:"Ambrosia", answer:true},
            {option:"Nectar", answer:false},
            {option:"Honey", answer:false},
            {option:"Syrup", answer:false}
        ],
        difficulty:2
    },
    {
        question:"What is the name of the three-headed dog that guards the entrance to Hades?",
        answers: [
            {option:"Fluffy", answer:false},
            {option:"Cerberus", answer:true},
            {option:"Hydra", answer:false},
            {option:"Fang", answer:false}
        ],
        difficulty:2
    },
    {
        question:"Who slayed Medusa the Gorgon?",
        answers: [
            {option:"Hercules", answer:false},
            {option:"Perseus", answer:true},
            {option:"Theseus", answer:false},
            {option:"Achilles", answer:false}
        ],
        difficulty:2
    },
    {
        question:"What was the name of the ship Jason sailed to get the Golden Fleece?",
        answers: [
            {option:"Argo", answer:true},
            {option:"Argonaut", answer:false},
            {option:"Argos", answer:false},
            {option:"Black Pearl", answer:false}
        ],
        difficulty:2
    },
    {
        question:"Who had a constellation named after themselves?",
        answers: [
            {option:"Orion", answer:true},
            {option:"Perseus", answer:false},
            {option:"Theseus", answer:false},
            {option:"Jason", answer:false}
        ],
        difficulty:2
    },
    {
        question:"Which daughter of Zeus was the cause of the Trojan War?",
        answers: [
            {option:"Paris", answer:false},
            {option:"Helen", answer:true},
            {option:"Athena", answer:false},
            {option:"Hebe", answer:false}
        ],
        difficulty:2
    },
    {
        question:"What type of mythical creature was Chiron?",
        answers: [
            {option:"Minotaur", answer:false},
            {option:"Gorgon", answer:false},
            {option:"Centaur", answer:true},
            {option:"Satyr", answer:false}
        ],
        difficulty:2
    },
    {
        question:"What group of warriors did Achilles lead?",
        answers: [
            {option:"Myrmidons", answer:true},
            {option:"Spartans", answer:false},
            {option:"Immortals", answer:false},
            {option:"Argonauts", answer:false}
        ],
        difficulty:2
    },
    {
        question:"Who flew too close to the sun?",
        answers: [
            {option:"Pegasus", answer:false},
            {option:"Icarus", answer:true},
            {option:"Helios", answer:false},
            {option:"Apollo", answer:false}
        ],
        difficulty:2
    },
    {
        question:"What was left in Pandora’s box after she released misery and evil?",
        answers: [
            {option:"Hope", answer:true},
            {option:"Happiness", answer:false},
            {option:"Guilt", answer:false},
            {option:"Sadness", answer:false}
        ],
        difficulty:3
    },
    {
        question:"Orpheus went into the underworld to rescue who?",
        answers: [
            {option:"Penelope", answer:false},
            {option:"Eurydice", answer:true},
            {option:"Persephone", answer:false},
            {option:"Aphrodite", answer:false}
        ],
        difficulty:3
    },
    {
        question:"Who was the beautiful youth loved by the Greek goddess Aphrodite?",
        answers: [
            {option:"Paris", answer:false},
            {option:"Adonis", answer:true},
            {option:"Eros", answer:false},
            {option:"Ares", answer:false}
        ],
        difficulty:3
    },
    {
        question:"Who fulfilled the prophecy of killing his father and marrying his mother?",
        answers: [
            {option:"Eros", answer:false},
            {option:"Zeus", answer:false},
            {option:"Perseus", answer:false},
            {option:"Oedipus", answer:true}
        ],
        difficulty:3
    },
    {
        question:"Who was the first woman?",
        answers: [
            {option:"Pandora", answer:true},
            {option:"Eve", answer:false},
            {option:"Hestia", answer:false},
            {option:"Hera", answer:false}
        ],
        difficulty:3
    },
    {
        question:"Who kept Odysseus imprisoned for 7 years on the island of Ogygia?",
        answers: [
            {option:"Athena", answer:false},
            {option:"Calypso", answer:true},
            {option:"Medea", answer:false},
            {option:"Aphrodite", answer:false}
        ],
        difficulty:3
    },
    {
        question:"Who was the only person to solve the Riddle of the Sphinx?",
        answers: [
            {option:"Odysseus", answer:false},
            {option:"Hercules", answer:false},
            {option:"Oedipus", answer:true},
            {option:"Theseus", answer:false}
        ],
        difficulty:3
    },
    {
        question:"Who built the Trojan horse used to sack the city of Troy?",
        answers: [
            {option:"Theseus", answer:false},
            {option:"Epeius", answer:true},
            {option:"Odysseus", answer:false},
            {option:"Apollo", answer:false}
        ],
        difficulty:3
    },
    {
        question:"Who fell in love with their own reflection?",
        answers: [
            {option:"Solipsistic", answer:false},
            {option:"Adonis", answer:false},
            {option:"Eros", answer:false},
            {option:"Narcissus", answer:true}
        ],
        difficulty:3
    },
    {
        question:"Who were Arges, Brontes and Steropes?",
        answers: [
            {option:"Gorgons", answer:false},
            {option:"Cyclopes", answer:true},
            {option:"Graiae", answer:false},
            {option:"Sirens", answer:false}
        ],
        difficulty:3
    },
];