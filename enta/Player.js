import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';


const tracks = [
  {
    title: 'Track 1',
    uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    image: 'https://example.com/track1.jpg',
  },
  {
    title: 'Track 2',
    uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    image: 'https://example.com/track2.jpg',
  },
  {
    title: 'Track 3',
    uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    image: 'https://example.com/track3.jpg',
  },
  {
    title: 'Track 4',
    uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    image: 'https://example.com/track4.jpg',
  },
  {
    title: 'Track 5',
    uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    image: 'https://example.com/track5.jpg',
  },
];

export default function AudioPlayer() {
  const [sound, setSound] = useState(null);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  async function loadAudio() {
    const { sound } = await Audio.Sound.createAsync(
      { uri: tracks[currentTrackIndex].uri },
      { shouldPlay: false },
      onPlaybackStatusUpdate
    );
    setSound(sound);
    return sound;
  }

  function onPlaybackStatusUpdate(status) {
    if (status.isLoaded) {
      setDuration(status.durationMillis);
      setPosition(status.positionMillis);
      setIsPlaying(status.isPlaying);
    }
  }

  useEffect(() => {
    loadAudio();
    if (sound) {
      sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    } else {
        loadAudio();
    }

  }, [currentTrackIndex]);

 async function playAudio() {
  if (sound) {
    sound.playAsync().then(() => setIsPlaying(true));
  } else {
    // Handle the case when the sound is not loaded yet
    await loadAudio().then((loadedSound) => {
      setSound(loadedSound);
      loadedSound.playAsync().then(() => setIsPlaying(true));
    });
  }
}
  
  async function pauseAudio() {
    if (sound) {
      await sound.pauseAsync();
      sound.setOnPlaybackStatusUpdate(null);
      setSound(null);
    }
    setIsPlaying(false);
  }

  function onSeek(values) {
    const value = values[0];
    sound.setPositionAsync(value);
    setPosition(value);
  }

  function onNextTrack() {
 
    const nextTrackIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextTrackIndex);
    loadAudio();
  }


  async function onPrevTrack() {
    const prevTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrackIndex(prevTrackIndex);
    await loadAudio().then((loadedSound) => setSound(loadedSound));
  }
  
  async function onNextTrack() {
    const nextTrackIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextTrackIndex);
    await loadAudio().then((loadedSound) => setSound(loadedSound));
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: tracks[currentTrackIndex].image }} />
      <Text style={styles.title}>{tracks[currentTrackIndex].title}</Text>
      <Slider
        width={300}
        values={[position]}
        min={0}
        max={duration}
        onValuesChange={onSeek}
        step={1000}
        snapped
      />
      <View style={styles.controls}>
        <Button title="Prev" onPress={onPrevTrack} />
        {isPlaying ? (
          <Button title="Pause" onPress={pauseAudio} />
        ) : (
          <Button title="Play" onPress={playAudio} />
        )}
        <Button title="Next" onPress={onNextTrack} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop: 20,
  },
});