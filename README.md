# Meteor

launch common install

run into meteor mongo : 
db.states.insert(
    [
        { "_id" : ObjectId("58510f000dce863a43c3922f"), "acro" : "AL", "name" : "Alabama" },
        { "_id" : ObjectId("58511bf00dce863a43c39230"), "acro" : "AK", "name" : "Alaska" },
        { "_id" : ObjectId("58511c360dce863a43c39231"), "acro" : "AZ", "name" : "Arizona" },
        { "_id" : ObjectId("58511c4b0dce863a43c39232"), "acro" : "AR", "name" : "Arkansas" },
        { "_id" : ObjectId("58511c5b0dce863a43c39233"), "acro" : "CA", "name" : "California" },
        { "_id" : ObjectId("58511c6b0dce863a43c39234"), "acro" : "CO", "name" : "Colorado" },
        { "_id" : ObjectId("58511cb90dce863a43c39235"), "acro" : "CT", "name" : "Connecticut" },
        { "_id" : ObjectId("58511cde0dce863a43c39236"), "acro" : "DE", "name" : "Delaware" },
        { "_id" : ObjectId("58511ce80dce863a43c39237"), "acro" : "DC", "name" : "District_of_Columbia" },
        { "_id" : ObjectId("58511cf30dce863a43c39238"), "acro" : "FL", "name" : "Florida" },
        { "_id" : ObjectId("58511cfa0dce863a43c39239"), "acro" : "GA", "name" : "Atlanta" },
        { "_id" : ObjectId("58511d030dce863a43c3923a"), "acro" : "HI", "name" : "Hawaii" },
        { "_id" : ObjectId("58511d0a0dce863a43c3923b"), "acro" : "ID", "name" : "Idaho" },
        { "_id" : ObjectId("58511d140dce863a43c3923c"), "acro" : "IL", "name" : "Illinois" },
        { "_id" : ObjectId("58511d1b0dce863a43c3923d"), "acro" : "IN", "name" : "Indiana" },
        { "_id" : ObjectId("58511d210dce863a43c3923e"), "acro" : "IA", "name" : "Iowa" },
        { "_id" : ObjectId("58511d280dce863a43c3923f"), "acro" : "KS", "name" : "Kansas" },
        { "_id" : ObjectId("58511d310dce863a43c39240"), "acro" : "KY", "name" : "Kentucky" },
        { "_id" : ObjectId("58511d380dce863a43c39241"), "acro" : "LA", "name" : "Louisiana" },
        { "_id" : ObjectId("58511d400dce863a43c39242"), "acro" : "ME", "name" : "Maine" },
        { "_id" : ObjectId("58511d480dce863a43c39243"), "acro" : "MD", "name" : "Maryland" },
        { "_id" : ObjectId("58511d510dce863a43c39244"), "acro" : "MA", "name" : "Massachusetts" },
        { "_id" : ObjectId("58511df30dce863a43c39246"), "acro" : "MI", "name" : "Michigan" },
        { "_id" : ObjectId("58511dfb0dce863a43c39247"), "acro" : "MN", "name" : "Minnesota" },
        { "_id" : ObjectId("58511e020dce863a43c39248"), "acro" : "MS", "name" : "Mississippi" },
        { "_id" : ObjectId("58511e0a0dce863a43c39249"), "acro" : "MO", "name" : "Missouri" },
        { "_id" : ObjectId("58511e120dce863a43c3924a"), "acro" : "MT", "name" : "Montana" },
        { "_id" : ObjectId("58511e1c0dce863a43c3924b"), "acro" : "NE", "name" : "Nebraska" },
        { "_id" : ObjectId("58511e230dce863a43c3924c"), "acro" : "NV", "name" : "Nevada" },
        { "_id" : ObjectId("58511e2b0dce863a43c3924d"), "acro" : "NH", "name" : "New_Hampshire" },
        { "_id" : ObjectId("58511e330dce863a43c3924e"), "acro" : "NJ", "name" : "New_Jersey" },
        { "_id" : ObjectId("58511e3b0dce863a43c3924f"), "acro" : "NM", "name" : "New_Mexico" },
        { "_id" : ObjectId("58511e420dce863a43c39250"), "acro" : "NY", "name" : "New_York" },
        { "_id" : ObjectId("58511e490dce863a43c39251"), "acro" : "NC", "name" : "North_Carolina" },
        { "_id" : ObjectId("58511e510dce863a43c39252"), "acro" : "ND", "name" : "North_Dakota" },
        { "_id" : ObjectId("58511e590dce863a43c39253"), "acro" : "OH", "name" : "Ohio" },
        { "_id" : ObjectId("58511e620dce863a43c39254"), "acro" : "OK", "name" : "Oklahoma" },
        { "_id" : ObjectId("58511e6a0dce863a43c39255"), "acro" : "OR", "name" : "Oregon" },
        { "_id" : ObjectId("58511e700dce863a43c39256"), "acro" : "PA", "name" : "Pennsylvania" },
        { "_id" : ObjectId("58511e760dce863a43c39257"), "acro" : "RI", "name" : "Rhode_Island" },
        { "_id" : ObjectId("58511e7c0dce863a43c39258"), "acro" : "SC", "name" : "South_Carolina" },
        { "_id" : ObjectId("58511e820dce863a43c39259"), "acro" : "SD", "name" : "South_Dakota" },
        { "_id" : ObjectId("58511e8b0dce863a43c3925a"), "acro" : "TN", "name" : "Tennessee" },
        { "_id" : ObjectId("58511e910dce863a43c3925b"), "acro" : "TX", "name" : "Texas" },
        { "_id" : ObjectId("58511e980dce863a43c3925c"), "acro" : "UT", "name" : "Utah" },
        { "_id" : ObjectId("58511e9f0dce863a43c3925d"), "acro" : "VT", "name" : "Vermont" },
        { "_id" : ObjectId("58511ea40dce863a43c3925e"), "acro" : "VA", "name" : "Virginia" },
        { "_id" : ObjectId("58511eac0dce863a43c3925f"), "acro" : "WA", "name" : "Washington" },
        { "_id" : ObjectId("58511eb20dce863a43c39260"), "acro" : "WV", "name" : "West_Virginia" },
        { "_id" : ObjectId("58511ebb0dce863a43c39261"), "acro" : "WI", "name" : "Wisconsin" },
        { "_id" : ObjectId("58511ec30dce863a43c39262"), "acro" : "WY", "name" : "Wyoming" },
    ]
)
