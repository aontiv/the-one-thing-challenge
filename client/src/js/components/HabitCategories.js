import React from 'react';

const HabitCategories = props => {
    const categoryList = [
        'Business',
        'Financial Life',
        'Jobs',
        'Key Relationships',
        'Personal Life',
        'Physical Health',
        'Spiritual Life'
    ];

    return (
        <select className='custom-select mb-1' value={props.category} name='category' onChange={props.onChange}>
            <option value="" disabled={true}>Choose A Category</option>
            {
                categoryList.map(category => {
                    return (<option key={category} value={category}>{category}</option>)
                })
            }
        </select>
    );
}

export default HabitCategories;
