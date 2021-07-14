

export default function List({contacts}) {
    return (
        <>
        <div>  

            {contacts.map(contact => (
                <div>
                    <div className="card" key={contact.id}>
                      <div className="card-header">
                        {contact.full_name}  
                      </div>
                      <div className="card-body">
                        <p className="card-text">{contact.tel}</p>
                      </div>
                    </div>
                    <br/>
                </div>
            ))}


        </div>
        
        </>
    )
}