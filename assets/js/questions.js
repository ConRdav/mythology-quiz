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
        question:"Who brought the humans fire?",
        correctAnswer:"Prometheus",
        answerA:"Prometheus",
        answerB:"Theseus",
        answerC:"Hermes",
        answerD:"Apollo"
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
let questionsOlympian = [
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
        question:"Who brought the humans fire?",
        correctAnswer:"Prometheus",
        answerA:"Prometheus",
        answerB:"Theseus",
        answerC:"Hermes",
        answerD:"Apollo"
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