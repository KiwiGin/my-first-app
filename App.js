import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';

const imageFile = require('./assets/images/background-image.png');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={imageFile} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Select from gallery" />
        <Button label="Use photo default" />
      </View>
      <Text style={{ color: 'white' }}>Nya</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 60,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
