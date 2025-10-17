export interface Athlete {
  name: string
  category: string
  medal: 'Gold' | 'Silver' | 'Bronze' | 'Participated'
  event: string
  year: number
  location: string
}

export interface Competition {
  id: string
  name: string
  year: number
  location: string
  logo: string
  type: 'IFSC' | 'IFSC Asia' | 'Asian Games' | 'World Cup' | 'World Championship'
  athletes: Athlete[]
  description: string
}

export const competitions: Competition[] = [
  {
    id: 'ifsc-malaysia-2015',
    name: 'IFSC International Competition',
    year: 2015,
    location: 'Malaysia',
    logo: '/ifsc-logo.svg',
    type: 'IFSC',
    description: 'International Federation of Sport Climbing competition held in Malaysia',
    athletes: [
      { name: 'Sahil Khan', category: 'Youth C', medal: 'Participated', event: 'Overall', year: 2015, location: 'Malaysia' },
      { name: 'Shreya Nankar', category: 'Youth C', medal: 'Bronze', event: 'Speed', year: 2015, location: 'Malaysia' }
    ]
  },
  {
    id: 'ifsc-kazakhstan-2016',
    name: 'IFSC International Competition',
    year: 2016,
    location: 'Kazakhstan',
    logo: '/ifsc-logo.svg',
    type: 'IFSC',
    description: 'International Federation of Sport Climbing competition held in Kazakhstan',
    athletes: [
      { name: 'Sahil Khan', category: 'Youth C', medal: 'Participated', event: 'Overall', year: 2016, location: 'Kazakhstan' },
      { name: 'Shreya Nankar', category: 'Youth C', medal: 'Participated', event: 'Overall', year: 2016, location: 'Kazakhstan' }
    ]
  },
  {
    id: 'ifsc-singapore-2017',
    name: 'IFSC International Competition',
    year: 2017,
    location: 'Singapore',
    logo: '/ifsc-logo.svg',
    type: 'IFSC',
    description: 'International Federation of Sport Climbing competition held in Singapore',
    athletes: [
      { name: 'Sahil Khan', category: 'Youth B', medal: 'Participated', event: 'Overall', year: 2017, location: 'Singapore' },
      { name: 'Shreya Nankar', category: 'Youth B', medal: 'Participated', event: 'Overall', year: 2017, location: 'Singapore' },
      { name: 'Hritik Marne', category: 'Youth D', medal: 'Participated', event: 'Overall', year: 2017, location: 'Singapore' }
    ]
  },
  {
    id: 'asian-games-2018',
    name: 'Asian Games',
    year: 2018,
    location: 'Jakarta',
    logo: '/ifsc-asia-logo.svg',
    type: 'Asian Games',
    description: 'Asian Games climbing competition held in Jakarta, Indonesia',
    athletes: [
      { name: 'Shreya Nankar', category: 'Open', medal: 'Participated', event: 'Overall', year: 2018, location: 'Jakarta' }
    ]
  },
  {
    id: 'asian-youth-china-2018',
    name: 'Asian Youth Championship',
    year: 2018,
    location: 'China',
    logo: '/ifsc-asia-logo.svg',
    type: 'IFSC Asia',
    description: 'Asian Youth Championship held in China',
    athletes: [
      { name: 'Sahil Khan', category: 'Youth B', medal: 'Bronze', event: 'Overall', year: 2018, location: 'China' },
      { name: 'Shreya Nankar', category: 'Youth B', medal: 'Participated', event: 'Overall', year: 2018, location: 'China' },
      { name: 'Arundhati Jadhav', category: 'Youth B', medal: 'Participated', event: 'Overall', year: 2018, location: 'China' },
      { name: 'Sohha Diwan', category: 'Youth B', medal: 'Participated', event: 'Overall', year: 2018, location: 'China' }
    ]
  },
  {
    id: 'asian-kids-bangkok-2018',
    name: 'Asian Kids Championship',
    year: 2018,
    location: 'Bangkok',
    logo: '/ifsc-asia-logo.svg',
    type: 'IFSC Asia',
    description: 'Asian Kids Championship held in Bangkok, Thailand',
    athletes: [
      { name: 'Ananya Anbhule', category: 'Youth C', medal: 'Participated', event: 'Overall', year: 2018, location: 'Bangkok' },
      { name: 'Diksha Bodke', category: 'Youth C', medal: 'Participated', event: 'Overall', year: 2018, location: 'Bangkok' },
      { name: 'Adhiraj Magar', category: 'Youth C', medal: 'Participated', event: 'Overall', year: 2018, location: 'Bangkok' },
      { name: 'Sania Shaikh', category: 'Youth D', medal: 'Participated', event: 'Overall', year: 2018, location: 'Bangkok' },
      { name: 'Nirmayee Neve', category: 'Youth D', medal: 'Participated', event: 'Overall', year: 2018, location: 'Bangkok' },
      { name: 'Saee Punekar', category: 'Youth D', medal: 'Participated', event: 'Overall', year: 2018, location: 'Bangkok' }
    ]
  },
  {
    id: 'world-cup-china-2019',
    name: 'World Cup',
    year: 2019,
    location: 'China',
    logo: '/ifsc-logo.svg',
    type: 'World Cup',
    description: 'IFSC World Cup held in China',
    athletes: [
      { name: 'Hritik Marne', category: 'Mens', medal: 'Participated', event: 'Overall', year: 2019, location: 'China' }
    ]
  },
  {
    id: 'world-championship-japan-2019',
    name: 'World Championship',
    year: 2019,
    location: 'Japan',
    logo: '/ifsc-logo.svg',
    type: 'World Championship',
    description: 'IFSC World Championship held in Japan',
    athletes: [
      { name: 'Hritik Marne', category: 'Mens', medal: 'Participated', event: 'Overall', year: 2019, location: 'Japan' },
      { name: 'Sahil Khan', category: 'Mens', medal: 'Participated', event: 'Overall', year: 2019, location: 'Japan' },
      { name: 'Dhanshree Lekurwale', category: 'Womens', medal: 'Participated', event: 'Overall', year: 2019, location: 'Japan' }
    ]
  },
  {
    id: 'asian-kids-jamshedpur-2022',
    name: 'Asian Kids Championship',
    year: 2022,
    location: 'Jamshedpur',
    logo: '/ifsc-asia-logo.svg',
    type: 'IFSC Asia',
    description: 'Asian Kids Championship held in Jamshedpur, India',
    athletes: [
      { name: 'Sharayu Hande', category: 'Kids', medal: 'Silver', event: 'Overall', year: 2022, location: 'Jamshedpur' },
      { name: 'Rajvardhan Shedge', category: 'Kids', medal: 'Silver', event: 'Overall', year: 2022, location: 'Jamshedpur' },
      { name: 'Sharayu Ghongade', category: 'Kids', medal: 'Participated', event: 'Overall', year: 2022, location: 'Jamshedpur' },
      { name: 'Irawati Tatooskar', category: 'Kids', medal: 'Participated', event: 'Overall', year: 2022, location: 'Jamshedpur' },
      { name: 'Jiza Malve', category: 'Kids', medal: 'Participated', event: 'Overall', year: 2022, location: 'Jamshedpur' },
      { name: 'Rajnandini Chawale', category: 'Kids', medal: 'Participated', event: 'Overall', year: 2022, location: 'Jamshedpur' },
      { name: 'Soumya Joshi', category: 'Kids', medal: 'Participated', event: 'Overall', year: 2022, location: 'Jamshedpur' },
      { name: 'Sumit More', category: 'Kids', medal: 'Participated', event: 'Overall', year: 2022, location: 'Jamshedpur' },
      { name: 'Rudra Salunke', category: 'Kids', medal: 'Participated', event: 'Overall', year: 2022, location: 'Jamshedpur' },
      { name: 'Neil Warke', category: 'Kids', medal: 'Participated', event: 'Overall', year: 2022, location: 'Jamshedpur' },
      { name: 'Kalash Mithari', category: 'Kids', medal: 'Participated', event: 'Overall', year: 2022, location: 'Jamshedpur' },
      { name: 'Rururaj Nikam', category: 'Kids', medal: 'Participated', event: 'Overall', year: 2022, location: 'Jamshedpur' },
      { name: 'Prayag Ambeti', category: 'Kids', medal: 'Participated', event: 'Overall', year: 2022, location: 'Jamshedpur' }
    ]
  },
  {
    id: 'asia-cup-singapore-2023',
    name: 'Asia Cup',
    year: 2023,
    location: 'Singapore',
    logo: '/ifsc-asia-logo.svg',
    type: 'IFSC Asia',
    description: 'Asia Cup held in Singapore in June 2023',
    athletes: [
      { name: 'Saniya Shaikh', category: 'Junior Girls', medal: 'Participated', event: 'Overall', year: 2023, location: 'Singapore' },
      { name: 'Yuvraj Jadhav', category: 'Youth A Boys', medal: 'Participated', event: 'Overall', year: 2023, location: 'Singapore' }
    ]
  },
  {
    id: 'world-championship-bern-2023',
    name: 'World Championship',
    year: 2023,
    location: 'Bern, Switzerland',
    logo: '/ifsc-logo.svg',
    type: 'World Championship',
    description: 'IFSC World Championship held in Bern, Switzerland',
    athletes: [
      { name: 'Hritik Marne', category: 'Open Men', medal: 'Participated', event: 'Overall', year: 2023, location: 'Bern, Switzerland' }
    ]
  },
  {
    id: 'asian-k-continental-jamshedpur-2023',
    name: 'Asian K Continental Championship',
    year: 2023,
    location: 'Jamshedpur',
    logo: '/ifsc-asia-logo.svg',
    type: 'IFSC Asia',
    description: 'Asian K Continental Championship held in Jamshedpur, India in December 2023',
    athletes: [
      { name: 'Dhruvi Padwal', category: 'Youth D Girl', medal: 'Bronze', event: 'Overall', year: 2023, location: 'Jamshedpur' },
      { name: 'Rajvardhan Shedge', category: 'Youth D Boys', medal: 'Silver', event: 'Overall', year: 2023, location: 'Jamshedpur' }
    ]
  }
]

export const getCompetitionById = (id: string): Competition | undefined => {
  return competitions.find(comp => comp.id === id)
}
