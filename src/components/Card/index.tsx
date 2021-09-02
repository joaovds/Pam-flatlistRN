import React from "react";
import { Image, Text, View } from "react-native";

import styles from "./styles";

interface ICourse {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

interface IProps {
  courseInfo: ICourse;
}

const Card: React.FC<IProps> = ({ courseInfo }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: courseInfo.imageUrl }} style={styles.image} />

      <View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Nome:</Text>
          <Text style={styles.info}>{courseInfo.name}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Detalhes:</Text>
          <Text style={styles.info}>{courseInfo.description}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
