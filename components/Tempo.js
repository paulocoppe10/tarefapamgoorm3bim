import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Tempo(props) {
 return (
   <>
        <Text style={styles.texto}>Tempo hoje:</Text>
        <Text style={styles.texto}>hora da consulta: {props.data1.time}</Text>
        <Text style={styles.texto}>Data da consulta: {props.data1.date}</Text>
        <Text style={styles.texto}>temperatura atual: {props.data1.temp}</Text>
        <Text style={styles.texto}>Descrição: {props.data1.description}</Text>
        <Text style={styles.texto}>Previsao para o resto do dia:</Text>
        <Text style={styles.texto}>Min: {props.data.min}</Text>
        <Text style={styles.texto}>Max: {props.data.max}</Text>
        <Text style={styles.texto}>Descrição: {props.data.description}</Text>
        <Text style={styles.texto}>Tempo amanha:</Text>
        <Text style={styles.texto}>Data da consulta: {props.data2.date}</Text>
        <Text style={styles.texto}>Min: {props.data2.min}</Text>
        <Text style={styles.texto}>Max: {props.data2.max}</Text>
        <Text style={styles.texto}>Descrição: {props.data2.description}</Text>
   </>
  );
}

const styles = StyleSheet.create({
    texto:{
        fontSize:20,
        marginLeft:'10%',
        marginTop:10
    }
});
  