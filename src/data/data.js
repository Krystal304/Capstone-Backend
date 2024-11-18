
    const data = [
        {
          id: 1,
          question: "On which aircraft carrier did the Doolittle Raid launch from on April 18, 1942 during World War II?",
          answers: [
            {
              text: "USS Hornet",
              correct: true,
            },
            {
              text: "USS Enterprise",
              correct: false,
            },
            {
              text: "USS Lexington",
              correct: false,
            },
            {
              text: "USS Saratoga",
              correct: false,
            },
          ],
        },
        {
          id: 2,
          question: "What was the name of the planned invasion of Japan towards the end of World War II?",
          answers: [
            {
              text: "Operation Downfall",
              correct: true,
            },
            {
              text: "Operation Boarding Party",
              correct: false,
            },
            {
              text: "Operation Ironclad",
              correct: false,
            },
            {
              text: "Operation Aflame",
              correct: false,
            },
          ],
        },
        {
          id: 3,
          question:
            "Which battle in 1757 marked the beginning of British occupation in India?",
          answers: [
            {
              text: "Plassey",
              correct: true,
            },
            {
              text: "Assaye",
              correct: false,
            },
            {
              text: "Buxar",
              correct: false,
            },
            {
              text: "Cuddalore",
              correct: false,
            },
          ],
        },
        {
          id: 4,
          question: "Which is the second most spoken language of Nepal?",
          answers: [
            {
              text: "Bajjika",
              correct: false,
            },
            {
              text: "Nepali",
              correct: false,
            },
            {
              text: "Maithili",
              correct: true,
            },
            {
              text: "Bhojpuri",
              correct: false,
            },
          ],
        },
        {
          id: 5,
          question: "When was the Grand Patriotic War in the USSR concluded?",
          answers: [
            {
              text: "September 2nd, 1945",
              correct: false,
            },
            {
              text: "August 9th, 1945",
              correct: false,
            },
            {
              text: "May 9th, 1945",
              correct: true,
            },
            {
              text: "December 11, 1945",
              correct: false,
            },
            
          ],
        },
        {
            id: 6,
            question: "In what year was the famous 45 foot tall Hollywood sign first erected?",
            answers: [
              {
                text: "1923",
                correct: true,
              },
              {
                text: "1903",
                correct: false,
              },
              {
                text: "1913",
                correct: false,
              },
              {
                text: "1933",
                correct: false,
              },
            ],
          },
          {
            id: 7,
            question: "The crown of the Empire State Building was orginally built for what purpose?",
            answers: [
              {
                text: "Lightning Rod",
                correct: false,
              },
              {
                text: "Antennae",
                correct: false,
              },
              {
                text: "Airship Dock",
                correct: true,
              },
              {
                text: "Flag Pole",
                correct: false,
              },
            ],
          },
          {
            id: 8,
            question: "Which building was set aflame on Auguest 24th, 1812?",
            answers: [
              {
                text: "Parliment Building",
                correct: false,
              },
              {
                text: "Grand National Assembly Building",
                correct: false,
              },
              {
                text: "Palace of the Nation",
                correct: false,
              },
              {
                text: "The White House",
                correct: true,
              },
            ],
          },
          {
            id: 9,
            question: "Who crowned Charlemagne as Holy Emperor on Christmas Day in 800?",
            answers: [
              {
                text: "Pope Urban IV",
                correct: false,
              },
              {
                text: "Pope Leo III",
                correct: true,
              },
              {
                text: "Pope Stephen V",
                correct: false,
              },
              {
                text: "Pope Valentine",
                correct: false,
              },
            ],
          },
          {
            id: 10,
            question: "What is the name of the ship which was only a few miles away from the RMS Titanic when it Struck an iceberg on April 14, 1912?",
            answers: [
              {
                text: "Californian",
                correct: true,
              },
              {
                text: "Carpathia",
                correct: false,
              },
              {
                text: "Cristol",
                correct: false,
              },
              {
                text: "Commerce",
                correct: false,
              },
            ],
          },
      ];

      const prizeMoney = [
        { id: 1, amount: 2000},
        { id: 2, amount: 4000},
        { id: 3, amount: 6000},
        { id: 4, amount: 8000},
        { id: 5, amount: 10000},
        { id: 6, amount: 15000},
        { id: 7, amount: 20000},
        { id: 8, amount: 25000},
        { id: 9, amount: 30000},
        { id: 10, amount: 35000},
        { id: 11, amount: 40000},
        { id: 12, amount: 45000},
        { id: 13, amount: 50000},
        { id: 14, amount: 55000},
        { id: 15, amount: 60000},
        { id: 16, amount: 65000},
        { id: 17, amount: 70000},
        { id: 18, amount: 75000},
        { id: 19, amount: 80000},
        { id: 20, amount: 85000},
      ].reverse().map((item => ({
        ...item,
        amount: `$${item.amount.toLocaleString()}`
      })));
    

      export {data, prizeMoney};