import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Images} from '../constants/Images';
import {screenWidth} from '../utlis/responsive';

const ExpandableItem = ({title, content}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={toggleExpand}
        activeOpacity={1}
        style={{
          paddingVertical: 20,
          justifyContent: 'space-between',
          flexDirection: 'row',
          flex: 1,
        }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'black',
            maxWidth: screenWidth - 100,
          }}>
          {title}
        </Text>
        <Image
          style={{marginLeft: 20, alignSelf: 'center', height: 20, width: 20}}
          source={expanded ? Images.iconDropUp : Images.iconDropDown}
        />
      </TouchableOpacity>
      {expanded && <Text style={{color: '#6B6C77'}}>{content}</Text>}
    </View>
  );
};

export default ExpandableItem;
