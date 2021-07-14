import React, {useState, useEffect} from 'react';
import axios from 'axios'; 
import List from './List'; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Data from './Data.js';

const data = Data();

export default function Search() {
    
    const [contacts, setContacts] = useState(data)
    const [search, setSearch] = useState('')




    // useEffect(() => {
    //     const API_URL = 'https://my.api.mockaroo.com/phonebook.json?key=9ac1c5f0'
    //     axios
    //         .get(API_URL)
    //         .then(res => {
    //             const contacts = res.data
    //             setContacts(contacts)
    //         })
    // }, [])

    const filteredContacts = search.length === 0 ? contacts : 
    contacts.filter(contact => contact.full_name.toLowerCase().includes(search.toLowerCase()) || contact.tel.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            

            <input  
                    className ="form-control"
                    type="text" 
                    placeholder="Ask me about ANTI MONEY LAUNDERING" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
            <br/>
            
            <br/>
            <List contacts={filteredContacts}/>

       

        </div>
    )
}