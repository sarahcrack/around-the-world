/*
PLAN    
    Display the data on the page
        Material UI to import cards & in a grid
    
    In App:
    Send down the default countries from App
        - In App call the card component and send down default data that we want to appear

    In card component:
        - Create a function that calls the Rest Countries API 
        - Write a function that takes in a prop from App that sets the name of the country that will be called in the API 
        - Display .flags.png"url", .name, .capital, .population
*/

export default function CountryCard() {
	//create a function that calls the rest countries API using useEffect
	//call Germany
	//display in App
	return <p>Hello</p>;
}
