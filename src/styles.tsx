import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  overlayContainer: {
    ...StyleSheet.absoluteFillObject, // Fills the entire parent view
    justifyContent: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Fills the entire parent view
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Semi-transparent black overlay
  },
  mainBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainBtnText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalCard: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 25,
    padding: 20,
  },
  cardContainer: {
    height: 250,
    flexDirection: 'row',
    gap: 10,
    paddingBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  buttonStyle: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
});
