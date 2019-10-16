const todaysDate = "09/03/2018" //not that this matters haha

const checking = [
  { 
    date:'09/01/2018',
    description:'Costa Vida',
    amount:'($15.75)',
    ageInDays: 2
  },
  { 
    date:'09/02/2018',
    description:'Costco',
    amount:'($500.50)',
    ageInDays: 1
  },
  { 
    date:'09/03/2018',
    description:'Payday',
    amount:'$1500.22', 
    ageInDays: 0
  },
  { 
    date:'08/01/2018',
    description:'Costa Vida',
    amount:'($15.75)',
    ageInDays: 32
  },
  { 
    date:'07/02/2018',
    description:'Costco',
    amount:'($500.50)',
    ageInDays: 61
  },
  { 
    date:'04/03/2018',
    description:'Payday',
    amount:'$1500.22', 
    ageInDays: 150
  }
]

const axios = {
  get: function (url, timeout) {
    return new Promise(function(resolve, reject) {
      return setTimeout(() => {
        resolve(getData(url))
      }, 2000)
    })
  }
}

const getData = (url) => {
  if(url === ('/checking/30')){
    return checking.filter((transaction) => {
      return transaction.ageInDays < 30
    })
  } else if (url === '/checking/90') {
      return checking.filter((transaction) => {
        return transaction.ageInDays < 90
      })
  }
}

export { axios }