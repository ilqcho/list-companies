import React, {useState} from 'react';
import Globals from '../Globals';
import Title from './Title';

export default function Checkbox(props) {

    const statusData = Globals.status;

    const [status, setStatus] = useState(statusData);
    const [checkedStatus, setCheckedStatus] = useState([]);

    const handleChange = (value) => {
    
        let newChecked = [...checkedStatus];

        if(!newChecked.includes(value)){
            newChecked.push(value);
        } else {
            newChecked = newChecked.filter((status) => status !== value);
        }
    
        setCheckedStatus(newChecked);
        props.handleFilters(newChecked);
      }

    return(
        <div>
            <Title 
                title="Filtros"
            />
            <div className="checkbox-container">
                {status.map((oneStatus, i) => (
                    <div className="checkbox" key={i}>
                        <input 
                            className="checkbox-input"
                            id={'status' + oneStatus.id} 
                            type="checkbox" 
                            checked={checkedStatus.includes(oneStatus.value) ? true : false}
                            onChange={() => handleChange(oneStatus.value)} 
                        />
                        <label 
                            htmlFor={'status' + oneStatus.id}
                            className="checkbox-input"
                        >
                        {oneStatus.description}
                        </label>
                    </div>
                    )
                )}
            </div>
        </div>
    )
}