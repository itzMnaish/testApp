import {StyleSheet, Text, View, Image} from 'react-native';
import {useState} from 'react';
import React from 'react';
import Button from './Button';

export default function ImageSlider() {
  const [index, setindex] = useState(0);
  const arr = [
    'https://imgs.search.brave.com/fGlxQJC2AL91DavMjQvz_2-XowfU9okvgDT_QXBvhoQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL3ZhZGVyLXBy/b2QuczMuYW1hem9u/YXdzLmNvbS8xNjcy/ODg4MTg2LUp1c3Rp/bmEtQmxha2VuZXkt/SG9tZS1XYWxscGFw/ZXItZGV0YWlscy03/XzJmNjc0MGU2LWMz/ZjgtNDMwMS05NTRi/LTRmOTdjZDk5MDhk/Y18yMDQ4eC5qcGc_/Y3JvcD0xeHc6MS4w/MHhoO2NlbnRlcix0/b3AmcmVzaXplPTk4/MDoq',
    'https://imgs.search.brave.com/ob9gEKb2gYVPvL1YkVp5TJrPHe9Y9HRDcC2473GboqA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5zaHV0dGVyc3Rv/Y2suY29tL2ltYWdl/LXBob3RvL3JldHJv/LWRhbWFzay13YWxs/cGFwZXItYmFja2dy/b3VuZC1zZWUtMjYw/bnctMTAyODQ1MDQ1/LmpwZw',
    'https://imgs.search.brave.com/s1UwY4bOHAypE6wyKIKqBkpDCP21Dv2S5G4XIygID2g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/dGhld2lyZWN1dHRl/ci5jb20vd3AtY29u/dGVudC9tZWRpYS8y/MDIxLzEwL3dhbGxw/YXBlci10ZXN0aW5n/LTIwNDhweC03Lmpw/Zz9hdXRvPXdlYnAm/cXVhbGl0eT03NSZ3/aWR0aD0xMDI0',
  ];
  const prevFun = () => {
    if(index==0){
        setindex(arr.length - 1)
        
    }else
    setindex(index-1)
  };
  const nextFun = () => {
    if(arr.length-1 == index){
        setindex(0)
    }
    else{
        setindex(index + 1)
    }
    console.log("running " , index)
    };
        

  return (
    <View>
      <Text>ImageSlider</Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button title="prev" onPress={prevFun} />
        <Image
          source={{uri: arr[index]}}
          style={{
            width: 200,
            height: 200,
          }}
        />
        <Button title="next" onPress={nextFun} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
