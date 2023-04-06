import React from 'react';
import PropTypes from 'prop-types';
import { keyExtractor as defaultKeyExtractor, ValidComponent } from './utils';

let Wrapper;
try {
  // eslint-disable-next-line global-require, import/no-unresolved
  const { View } = require('react-native');
  Wrapper = View;
} catch (e) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  Wrapper = (props) => <div {...props} />;
}

const EasyList = ({
  keyExtractor,
  style,
  data,
  renderItem,
  ItemSeparatorComponent,
  ListEmptyComponent,
  ListHeaderComponent,
  ListFooterComponent,
}) => {
  const getItemCount = (dataToMeasure) => dataToMeasure.length;
  const end = getItemCount(data) - 1;

  const FinalListEmptyComponent = ValidComponent(ListEmptyComponent);
  const FinalListHeaderComponent = ValidComponent(ListHeaderComponent);
  const FinalListFooterComponent = ValidComponent(ListFooterComponent);

  const renderer = () => {
    if (getItemCount(data) === 0) {
      return FinalListEmptyComponent;
    }

    return data.map((item, index) => (
      <Wrapper key={keyExtractor(item, index)}>
        {renderItem(item, index)}
        {index < end ? ItemSeparatorComponent : undefined}
      </Wrapper>
    ));
  };

  return (
    <Wrapper style={style}>
      {FinalListHeaderComponent}
      {renderer()}
      {FinalListFooterComponent}
    </Wrapper>
  );
};

EasyList.defaultProps = {
  style: {},
  keyExtractor: defaultKeyExtractor,
  ItemSeparatorComponent: undefined,
  ListEmptyComponent: undefined,
  ListHeaderComponent: undefined,
  ListFooterComponent: undefined,
};

EasyList.propTypes = {
  style: PropTypes.shape(),
  keyExtractor: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  renderItem: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  ItemSeparatorComponent: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  ListEmptyComponent: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  ListHeaderComponent: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  ListFooterComponent: PropTypes.any,
};

export default EasyList;
