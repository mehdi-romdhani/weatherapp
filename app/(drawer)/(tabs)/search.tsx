// import { Alert, AlertIcon, AlertText } from "@/components/ui/alert";
// import { InfoIcon } from "@/components/ui/icon";

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView, TextInput } from "react-native-gesture-handler";
const search = () => {
  return (
    <ScrollView>
      <View>
        <TextInput></TextInput>
        {/* <Alert variant={"accent"} action={"success"} className="gap-3">
          <AlertIcon as={InfoIcon} />
          <AlertText>Selection successfully moved!</AlertText>
        </Alert> */}
        
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  // containerSearch: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderBlockColor: 'red',
  // },
});
export default search;
