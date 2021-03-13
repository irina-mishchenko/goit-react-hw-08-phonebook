import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from './../../redux/contacts';

import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(contactsSelectors.getValue);
  const dispatch = useDispatch();

  return (
    <div className={s.filterContainer}>
      <label className={s.filterLabel}>
        Find contact
        <input
          className={s.filterInput}
          type="text"
          value={value}
          onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

export default Filter;
