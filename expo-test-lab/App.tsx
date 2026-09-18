import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { SvgXml } from 'react-native-svg';

const iconXml = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><linearGradient id="s" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#7E14FF"/><stop offset=".55" stop-color="#4D0BAF"/><stop offset="1" stop-color="#2D0670"/></linearGradient><linearGradient id="f" x1=".12" y1=".08" x2=".82" y2=".92"><stop stop-color="#BFA7FF"/><stop offset=".28" stop-color="#863BFF"/><stop offset=".7" stop-color="#6D20E8"/><stop offset="1" stop-color="#4810B8"/></linearGradient></defs><path d="M27.3 45.9c-.66.85-2.02.38-2.02-.7V34.9a2.26 2.26 0 0 0-2.26-2.26H11.65c-.92 0-1.46-1.04-.92-1.79l7.48-10.47c1.07-1.5 0-3.58-1.84-3.58H2.6c-.92 0-1.46-1.04-.92-1.79L11.38 1.47c.21-.3.56-.47.92-.47h28.89c.92 0 1.46.97.92 1.79l-7.48 10.47c-1.07 1.5-.1 3.58 1.84 3.58h11.38c.94 0 1.47 1.09.89 1.83Z" fill="url(#s)"/><path d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456.965.92 1.788l-7.48 10.471c-1.07 1.498-.1 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94Z" fill="url(#f)"/></svg>';

export default function App() {
  const dark = useColorScheme() === 'dark';
  return <SafeAreaView style={[styles.safe, dark && styles.dark]}><ScrollView contentContainerStyle={styles.content}>
    <View style={styles.hero}><SvgXml xml={iconXml} width={88} height={88}/><Text style={[styles.title,dark&&styles.darkText]}>ItundaFace Test Lab</Text><Text style={styles.sub}>Android · iOS · Web</Text></View>
    <Section title="Native launcher QA" text="Expo Go validates the in-app UI. A Development Build validates the real installed launcher icon, including Android adaptive masking and the iOS home-screen icon."/>
    <Section title="Browser favicon QA" text="The web build uses the same Itunda icon family for the browser tab and PWA install surface."/>
    <Text style={[styles.heading,dark&&styles.darkText]}>Required checks</Text>
    {['Android launcher + adaptive mask','Android themed/monochrome icon','iOS home-screen icon','Web favicon / PWA icon','14–128 px optical legibility','Light + dark UI'].map(x=><Text key={x} style={[styles.check,dark&&styles.darkText]}>✓ {x}</Text>)}
    <Text style={[styles.heading,dark&&styles.darkText]}>ItundaFace masters</Text>
    {['Thumbs up','Heart','Laughing','Wow','Sad'].map(x=><View key={x} style={styles.row}><Text style={styles.rowTitle}>{x}</Text><Text style={styles.rowMeta}>canonical flat + 3D renderer</Text></View>)}
  </ScrollView></SafeAreaView>;
}
function Section({title,text}:{title:string;text:string}){return <View style={styles.card}><Text style={styles.cardTitle}>{title}</Text><Text style={styles.cardText}>{text}</Text></View>}
const styles=StyleSheet.create({safe:{flex:1,backgroundColor:'#f7f7fb'},dark:{backgroundColor:'#101014'},content:{padding:22,paddingBottom:60},hero:{alignItems:'center',paddingVertical:28},title:{fontSize:28,fontWeight:'800',marginTop:12,color:'#16161a'},sub:{marginTop:6,color:'#777782'},card:{backgroundColor:'#fff',borderRadius:22,padding:18,marginBottom:14},cardTitle:{fontSize:17,fontWeight:'800',color:'#16161a'},cardText:{fontSize:14,lineHeight:21,color:'#666670',marginTop:8},heading:{fontSize:20,fontWeight:'800',marginTop:18,marginBottom:10,color:'#16161a'},check:{fontSize:15,marginBottom:9,color:'#303038'},row:{height:56,borderRadius:16,backgroundColor:'#fff',marginBottom:8,paddingHorizontal:16,justifyContent:'center'},rowTitle:{fontWeight:'700'},rowMeta:{fontSize:12,color:'#888',marginTop:3},darkText:{color:'#f4f4f7'}});
