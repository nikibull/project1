module.exports.homelist = function (req, res) {
  res.render('locations-list', {
    title: 'find a place to work with wifi',
    pageHeader: {
      title: 'Troubleshooting',
      strapline: 'Software services company',
    },
    sidebar:
      'You find the best service company? Then you found it. Troubleshooting helps in various solutions, such as deploy, script programming, site development and other types of services',
    locations: [
      {
        name: 'Monitoring',
        address: 'grafana+telegraf+graphite+CH+moira',
        facilities: ['1TB', '16 RAM', '10core'],
        distance: '1500$',
      },
      {
        name: 'Monitoring',
        address: 'Stack ELK',
        facilities: ['800GB', '8 RAM', '8core'],
        distance: '800$',
      },
      {
        name: 'Web site',
        address: 'Stack MEAN',
        facilities: ['1 month'],
        distance: 'immortal',
      },
    ],
  })
}

module.exports.locationInfo = function (req, res) {
  res.render('location-info', {
    title: 'Review',
    pageHeader: {
      title: 'Review',
    },
    sidebar: {
      context: '',
      callToAction: '',
    },
    location: {
      address: 'Here you can post a feedback',
      facilities: ['everyday'],
      coords: {
        lat: 51.455041,
        lng: -0.9690884,
      },
      infoReview: [
        {
          days: 'When can you leave your feedback here',
        },
        {
          days: 'Here you can share useful information',
        },
      ],
      reviews: [
        {
          author: 'Homer Simpson',
          timestamp: '16 July 2019',
          reviewText: 'What a great place.',
        },
        {
          author: 'Marta Simpson',
          timestamp: '16 June 2020',
          reviewText: 'It was cool.',
        },
      ],
    },
  })
}

/* GET 'Add review' page */
module.exports.addReview = function (req, res) {
  res.render('location-review-form', {
    title: 'Review Starcups ',
    pageHeader: {
      title: 'Review Starcups',
    },
  })
}
