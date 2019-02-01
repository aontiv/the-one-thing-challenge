import React from 'react';
import PropTypes from 'prop-types';
import { setCategory } from '../../actions/habit/actions';

const CategoryInput = props => {
    const handleChange = event => {
        const value = event.target.value;
        return setCategory({ category: value });
    }

    return (
        <form className="category-input">
            <div className="form-group">
                <select className="form-control" value={props.category} onChange={handleChange}>
                    <option value="">- Category -</option>
                    {
                        props.defaultCategories.map(category => {
                            return (
                                <option key={`C_${category}`} value={category}>{category}</option>
                            )
                        })
                    }
                </select>
            </div>
        </form>
    );
}

export default CategoryInput;

CategoryInput.propTypes = {
    defaultCategories: PropTypes.array.isRequired,
}
