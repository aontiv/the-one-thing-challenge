import HabitList from './HabitList';
import NameInput from './NameInput';
import DateInput from './DateInput';
import { Container } from 'flux/utils';
import SubmitInput from './SubmitInput';
import CategoryInput from './CategoryInput';
import HabitStore from '../../stores/HabitStore';
import React, { Component, Fragment } from 'react';
import TrackerStore from '../../stores/TrackerStore';

class HabitContainer extends Component {
    static getStores() {
        return [ HabitStore, TrackerStore ];
    }

    static calculateState() {
        return {
            defaultCategories: [
                'Jobs',
                'Business',
                'Personal Life',
                'Spiritual Life',
                'Financial Life',
                'Physical Health',
                'Key Relationships',
            ],
            name: HabitStore.getState().name,
            category: HabitStore.getState().category,
            startDate: TrackerStore.getState().startDate,
            submitted: TrackerStore.getState().submitted,
        }
    }

    render() {
        return (
            <div className="habit-container mb-4">
                {
                    this.state.submitted
                        ? <HabitList
                            name={this.state.name}
                            category={this.state.category}
                            startDate={this.state.startDate}
                        />
                        : (
                            <Fragment>
                                <CategoryInput
                                    category={this.state.category}
                                    defaultCategories={this.state.defaultCategories}
                                />
                                <DateInput startDate={this.state.startDate} />
                                <NameInput name={this.state.name} />
                                <SubmitInput
                                    name={this.state.name}
                                    category={this.state.category}
                                    startDate={this.state.startDate}
                                />
                            </Fragment>
                        )
                }
            </div>
        )
    }
}

export default Container.create(HabitContainer);
