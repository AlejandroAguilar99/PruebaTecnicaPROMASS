import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const responsiveDimensions =  {
  height:  (height<width) ? width : height,
  width: (width>height) ? height : width
};

export default responsiveDimensions;