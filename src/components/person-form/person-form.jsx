import { useState } from 'react';

const PersonForm = () => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            firstname,
            lastname,
            gender
        };

        console.log('Formulaire validé !', data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='firstname'>Prénom : </label>
                <input id='firstname' type='text'
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)} />
            </div>
            <div>
                <label htmlFor='lastname'>Nom : </label>
                <input id='lastname' type='text'
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)} />
            </div>
            <div>
                <label htmlFor='gender'>Genre : </label>
                {/* Exemple de Select */}
                <select id='gender' value={gender}
                    onChange={(e) => setGender(e.target.value)}>
                    <option value='' disabled={true}>Fait votre choix</option>
                    <option value='F'>Femme</option>
                    <option value='H'>Homme</option>
                    <option value='X'>Autre</option>
                </select>
                <br />
                {/* Exemple de radio button */}
                <input type='radio' name='gender' id='genderF'
                    checked={gender === 'F'}
                    onChange={() => setGender('F')} />
                <label htmlFor='genderF'>Femme</label>
                <input type='radio' name='gender' id='genderH'
                    checked={gender === 'H'}
                    onChange={() => setGender('H')} />
                <label htmlFor='genderH'>Homme</label>
                <input type='radio' name='gender' id='genderX'
                    checked={gender === 'X'}
                    onChange={() => setGender('X')} />
                <label htmlFor='genderX'>Autre</label>
            </div>

            <button type='submit'>Valider</button>
        </form>
    );
};

export default PersonForm;