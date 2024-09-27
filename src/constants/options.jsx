export const SelectTravelersList = [
    {
        id:1,
        title:'Just Me',
        desc:'A solo traveler',
        icon:'✈︎',
        people:'1 person'
    },
    {
        id:2,
        title:'Couple',
        desc:'A couple',
        icon:'👫',
        people:'2 people'
    },
    {
        id:3,
        title:'Family',
        desc:'A family of 3 or more',
        icon:'👨‍👩‍👧‍👦',
        people:'3 to 5 people'
    },
    {
        id:4,
        title:'Group',
        desc:'A group of 5 or more',
        icon:'🤜🤛',
        people:'5 to 10 people'
    }
]

export const SelectBudgetOptions = [
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of cost',
        icon:'💵',
    },
    {
        id:2,
        title:'Moderate',
        desc:'Balanced budget',
        icon:'💰',
    },
    {   
        id:3,
        title:'Luxury',
        desc:'High-end experience',
        icon:'💎',
    }
]

export const AI_PROMPT='Generate Travel Plan for Location : {location}, for {days} Days for {travelers} with a {budget} Budget, Give me Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions, and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, time travel each of the locations for {days} days with each day plan with the best time to visit in JSON format'