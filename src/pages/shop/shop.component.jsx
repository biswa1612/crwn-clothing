import React from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props) {      //So, to conclude, If you want to use this.props inside constructor, you need to pass it in super, otherwise it’s okay to not pass props to super as we see that irrespective of passing it to super, this.props is available inside render function.
        super(props);

        this.state = {
            collections: SHOP_DATA
        };
    }
    render() {
        const {collections} = this.state;
        return (<div className="shop-page">
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }

        </div>);
    }
}
export default ShopPage;