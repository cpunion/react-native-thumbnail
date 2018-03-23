
import { NativeModules, Platform } from 'react-native';

const { RNThumbnail } = NativeModules;

export default {
  get(path, options) {
    if (Platform.OS === 'android') {
      return RNThumbnail.get(path, options || {});
    } else {
      return RNThumbnail.get(path);
    }
  }
};
