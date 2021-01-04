import React, { useContext, useState } from "react"
import { View, Text, TextInput, StyleSheet, Button } from "react-native"


const BlogPostForm = ( { onSubmit, initialValues }) => {

  const [title, setTitle] = useState(initialValues.title)
  const [content, setContent] = useState(initialValues.content)

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={(text)=> setTitle(text)} />
      <Text style={styles.label}>Enter content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={(text)=> setContent(text)}/>
      <Button 
        title="Save Blog Post"
        onPress={() => onSubmit(title, content)}
      />
    </View>
  )
}

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: ""
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  input: {
    fontSize: 18,
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 20,
    marginRight: 10,
    borderRadius: 3
  },
  label: {
    fontSize: 20,
    marginBottom: 10
  }
})

export default BlogPostForm