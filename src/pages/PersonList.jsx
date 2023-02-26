import { useEffect } from "react";
import PersonCard from "../components/PersonCard";

function PersonList(props) {
    const {people, listazas, personEdit} = props;

    useEffect(() => {
        listazas();
    }, );
    const cardList = [];
    people.forEach(person => {
        cardList.push(<PersonCard key={person.id} person={person} listazas={listazas} personEdit={personEdit}/>)        
    });

    return (
        <div className="container py-4">
            <h3 className="pb-4 ms-5">Emberek</h3>
            <div className="container">
                <div className="row g-3">
                    {cardList}                
                </div>
            </div>
        </div>
    )
}

export default PersonList;


