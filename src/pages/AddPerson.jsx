import { useState, useEffect } from "react";

function AddPerson(props) {
    const {listazas, editId = 0, resetModositando, setBasicId } = props;
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [hobby, setHobby] = useState("");
    const [website, setWebsite] = useState("");
    const [subscribed, setSubscribed] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSetBasicId = () => {
        setBasicId(0);
        resetForm();
    }

    useEffect(() => {
        if (editId === 0){
            resetForm();  
        } else {
            fetch(`https://retoolapi.dev/X6h7DS/data/${editId}`, {   //https://retoolapi.dev/ggtvjc/people           
                headers: {
                    Accept: "application/json",
                },
            }).then(async (response) => {
                const data = await response.json();
                if (response.status !== 200) {                
                    alert(data.message);
                } else {
                    setName(data.name);
                    setAge(data.age);
                    setHobby(data.hobby);
                    setWebsite(data.website);
                    setSubscribed(data.subscribed);
                }
            //listazas();
            });
        }
    }, [editId]);

    const handleOnChange = () => {
        setSubscribed(!subscribed);
    };

    const addNewPerson = () => {
        const newPerson = {
            name: name,
            age: age,
            hobby: hobby,
            website: website,
            subscribed: subscribed
        };
        fetch("https://retoolapi.dev/X6h7DS/data", {   //https://retoolapi.dev/ggtvjc/people
            method: "POST",
            body: JSON.stringify(newPerson),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }).then(async (response) => {                         
            if (response.status === 201) {
                listazas();
                resetForm();          
            } else if (response.status === 404) {
                setErrorMessage("Az oldal nem található!");
              } else {
                const jsonData = await response.json();
                const errorMessage = jsonData.message;
                setErrorMessage(errorMessage);
              }
        });    
    };

    const editPerson = () => {
        const person = {
          name: name,
          age: age,
          hobby: hobby,
          website: website,
          subscribed: subscribed,
        };
        fetch(`https://retoolapi.dev/X6h7DS/data/${editId}`, {
          method: "PUT",
          body: JSON.stringify(person),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }).then(async (response) => {
          if (response.status === 200) {
            listazas();
            resetModositando();
          } else if (response.status === "404") {
            setErrorMessage("Az oldal nem található");
          } else {
            const jsonData = await response.json();
            const errorMessage = jsonData.message;
            setErrorMessage(errorMessage);
          }
        });
      };

      const resetForm = () => {
        setName("");
        setAge("");
        setHobby("");
        setWebsite("");
        setSubscribed("");
        setErrorMessage("");
      };

    return (
        <div id="new-record">
            <div className="container py-5">
                {editId === 0 ? 
                    <h3 className="ms-3 mb-3">Új ember hozzáadása</h3> : 
                    <h3 className="ms-3 mb-3">{name} szerkesztése</h3> }                
                    {errorMessage !== "" ? <div>
                        <div className="alert alert-warning alert-danger fade show w-50" role="alert">
                            <span>{errorMessage}</span>
                            <button type="button" className="btn-close float-end" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div> : ""}
                <div className="card shadow w-50 p-3">
                    <form onSubmit={event => { event.preventDefault(); 
                        if (editId === 0) {
                            addNewPerson();
                        } else {
                            editPerson();
                        } 
                        }}>

                        <div className="mb-3">
                            <label className="form-label fw-bold" htmlFor="nameInput">Név:</label>
                            <input className="form-control" type="text" id="nameInput" placeholder={"Name"} value={name} onInput={event => setName(event.target.value)} required/>
                        </div>    
                        <div className="mb-3">
                            <label className="form-label fw-bold" htmlFor="ageInput">Kor:</label>
                            <input className="form-control" type="number" id="ageInput" placeholder={"Age"} value={age} onInput={event => setAge(event.target.value)} required min={1} max={120}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold" htmlFor="hobbyInput">Hobbi:</label>
                            <input className="form-control" type="text" id="hobbyInput" placeholder={"Hobby"} value={hobby} onInput={event => setHobby(event.target.value)} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold" htmlFor="websiteInput">Websoldal:</label>
                            <input className="form-control" type="text" id="websiteInput" placeholder={"Website"} value={website} onInput={event => setWebsite(event.target.value)} required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-bold" htmlFor="subscribedInput">Feliratkozva:</label>
                            <input className="form-check-input ms-3" type="checkbox" id="subscribedInput" placeholder={"Subscribed"} value={subscribed} 
                                checked={subscribed} onChange={handleOnChange}/>  
                        </div>   
                        { editId === 0 ? (                                
                        <button className="btn btn-primary" type="submit">Felvétel</button> ) : (
                            <button className="btn btn-warning" type="submit">Módosítás</button> )}
                        <button className="btn btn-danger float-end" type="reset" onClick={() => { resetForm(); resetModositando(); }}>Alaphelyzet</button>
                        <a href="#new-record" onClick={handleSetBasicId}><button className="btn btn-success float-end me-2"><i class="bi bi-arrow-clockwise"></i></button></a> 
                    </form>     
                </div>                               
            </div>
        </div>
    )
}

export default AddPerson;