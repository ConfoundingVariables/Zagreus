import { List, ListItem, Card } from "@material-tailwind/react";
 
export function ListDefault() {
    const Cities = [
        "Mumbai",
        "Bangalore",
        "gurgaon",
        "Chennia"
    ]
    function handleClick(){console.log("Clicked an item on the list")}
  return (
    <>
    <Card className="w-96 text-left font-bold"> List Group
      <List>
      {Cities.map((city,index) => <ListItem key={index} onClick={handleClick }>{city}</ListItem>)}            
      </List>
    </Card>
    </>
  );
}