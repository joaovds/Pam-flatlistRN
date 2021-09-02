import React from "react";
import { FlatList, Text, View } from "react-native";

import Card from "../../components/Card";

import styles from "./styles";

interface ICourse {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

const data: ICourse[] = [
  {
    id: "1",
    name: "Desenvolvimento de sistemas",
    description: "É um curso top ae de programação",
    imageUrl: "http://www.fatecsp.br/img/ti.jpg",
  },
  {
    id: "2",
    name: "JavaScript",
    description:
      "Neste curso você aprenderá a base de programação com a linguagem JavaScript",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/260px-Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    id: "3",
    name: "ReactJS",
    description:
      "Aprenda a desenvolver aplicativos para web com a biblioteca do momento",
    imageUrl:
      "https://blog.fcamara.com.br/wp-content/uploads/2019/03/1_y6C4nSvy2Woe0m7bWEn4BA-1024x538.png",
  },
  {
    id: "4",
    name: "GraphQL com NodeJS",
    description: "Aprenda a desenvolver uma API GraphQL sensacional com NodeJS",
    imageUrl:
      "https://static.imasters.com.br/wp-content/uploads/2018/08/15110811/og_image.png",
  },
  {
    id: "5",
    name: "Python Básico",
    description: "Pequeno curso de iniciação na programação com Python",
    imageUrl:
      "https://marquesfernandes.com/wp-content/uploads/2020/08/kwi4bvgzths31.jpg",
  },
];

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de cursos</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card courseInfo={item} />}
        style={styles.courseList}
      />
    </View>
  );
};

export default Home;
