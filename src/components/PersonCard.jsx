import PersonModal from "./PersonModal";

function PersonCard(props) {
    const { person, listazas, personEdit } = props;
    const subscribed = (person.subscribed ? "igen" : "ne");


    const personDelete = (event) => {
        fetch(`https://retoolapi.dev/X6h7DS/data/${person.id}`, {   //https://retoolapi.dev/ggtvjc/people
            method: "DELETE",
            headers: {
                Accept: "application/json",
            },
        }).then(async response => {
            if (!response.status === 204) {
                const data = await response.json();
                alert(data.message);
            }
            listazas();
        });
    }


    return (
        <div className="col">
            <div className="card shadow h-100">
                <div className="card-header">
                    <h4 className="card-title mt-2">{person.name}</h4></div>
                <div className="card-body">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>#</th>
                                <td>{person.id}</td>
                            </tr>
                            <tr>
                                <th>Kor:</th>
                                <td>{person.age}</td>
                            </tr>
                            <tr>
                                <th>Hobbi:</th>
                                <td>{person.hobby}</td>
                            </tr>
                            <tr>
                                <th>Weboldal:</th>
                                <td>{person.website}</td>
                            </tr>
                            <tr>
                                <th>Feliratkozva:</th>
                                <td id="subsribed">{subscribed}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="card-footer">
                    <div className="row">
                        <button className="col btn btn-warning me-2" onClick={() => {personEdit(person.id)}}><a href="#new-record"><i className="bi bi-pen me-2"></i>Módosítás</a> </button>
                        <PersonModal person={person} subscribed={subscribed}/>
                        <button className="col btn btn-danger" onClick={personDelete}><i className="bi bi-trash3 me-2" ></i>Törlés</button>
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default PersonCard;


