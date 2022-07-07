import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import ChatWidget from "@papercups-io/chat-widget-native";
import styled from "styled-components/native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function ModalScreen() {
  return (
    <Container>
      <ChatWidget
        // Update this with your own account token!
        accountId="57aea8d0-4c75-4263-aa82-0f11cfba2ef2"
        title="Hello"
        subtitle="We're here to help"
        greeting="Hi there! :wave: Have any questions?"
        primaryColor="#ff6900"
        baseUrl="https://app.papercups.io"
        customer={{
          external_id: "xxxxxxxx",
          email: "grant@ionev.co",
          name: "Grant",
        }}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  margin-bottom: 20px;
`;
