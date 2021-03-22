import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelctor } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const Directory = ({ sections }) => (
            <div className='directory-menu'>
                {sections.map(({ id, ...OtherSectionProps}) => (     //equivalent to { title, imageUrl, id, size, linkUrl}
                <MenuItem key={id} {...OtherSectionProps} />    //equivalent to title={title} imageUrl={imageUrl} size={size}
                ))}
            </div>
);

const mapStateToProps = createStructuredSelctor({
  sections: selectDirectorySections
});
export default connect(mapStateToProps)(Directory);