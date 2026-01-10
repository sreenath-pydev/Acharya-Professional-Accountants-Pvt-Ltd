export const locationGroups = [
    {
        region: "Tier-2 High-Growth Cities (South India)",
        cities: [
            "Kochi", "Trivandrum", "Coimbatore", "Madurai", "Salem",
            "Tiruchirappalli", "Vijayawada", "Visakhapatnam", "Tirupati",
            "Mangaluru", "Udupi", "Hubballi", "Belagavi"
        ]
    },
    {
        region: "North India",
        cities: [
            "Noida", "Gurugram", "Faridabad", "Ghaziabad", "Chandigarh",
            "Jaipur", "Udaipur", "Jodhpur", "Dehradun", "Haridwar",
            "Ludhiana", "Amritsar"
        ]
    },
    {
        region: "West India",
        cities: [
            "Surat", "Vadodara", "Rajkot", "Indore", "Bhopal", "Ujjain",
            "Nagpur", "Nashik", "Aurangabad"
        ]
    },
    {
        region: "East India",
        cities: [
            "Bhubaneswar", "Cuttack", "Patna", "Ranchi", "Durgapur",
            "Asansol", "Siliguri"
        ]
    },
    {
        region: "Emerging & Fast-Developing Cities",
        cities: [
            "Kozhikode", "Malappuram", "Kannur", "Palakkad", "Thrissur",
            "Alappuzha", "Kottayam", "Tirur", "Perinthalmanna", "Manjeri",
            "Guntur", "Nellore", "Kurnool", "Anantapur", "Eluru", "Alwar",
            "Ajmer", "Kota", "Sikar", "Gwalior", "Jabalpur", "Rewa"
        ]
    }
];

export const getAllCities = () => {
    const allCities = [];
    locationGroups.forEach(group => {
        allCities.push(...group.cities);
    });
    return allCities;
};
