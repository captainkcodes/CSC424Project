import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useForm, Controller } from 'react-hook-form';
import HTML from 'react-native-render-html';

//[CONSTANTS]//
const Stack = createStackNavigator();

/*[CONSTANTS FOR HTML PAGES]*/
const htmlContentLists = `
<div class="container">

        <div class="header">
            <h1> To-Do Lists </h1>
            
            <div class="navbar">
                <ul class="breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="events.html">Events</a></li>
                    <li><a href="mylists.html">To-Do Lists</a></li>
                    <li><a href="classes.html">Class Search</a></li>
                    <li><a><button class="button" onclick="signOut()" id="signOut"> Log out</button></a></li>
                </ul>
            </div>
        </div>

        <div class="maincontent">

            <!-- For Work Related Tasks-->
            <div class="work-task">

                <div id="worktodo-wrap">
                    <h2>Tasks</h2>
                    <form id="worktodo-form" class="clearfix">
                        <input type="text" id="worktodo-add" placeholder="New Task" required />
                        <input type="submit" value="&#10010;" />
                    </form>
                
                <div id="worktodo-del">
                    <input type="button" value="Delete All Tasks" id="worktodo-dat" />
                    <input type="button" value="Delete Completed Tasks" id="worktodo-dct" />
                </div>
                
                <div id="worktodo-list"> </div>
            </div>

        </div>
    </div>`;
  
/*[OUR SCREENS WILL GO HERE]*/
function Home({ navigation }) //our index.html
{
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Let's Login"
        onPress={() => navigation.navigate('Login')}
        color="#6cc9ff"
      />
    </View>
  );
}

function Login({ navigation }) //our login.html
{
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = () => {navigation.navigate('Landing Page');}

  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <View>
        <Text>Email:</Text>
        <Controller
          as={TextInput}
          control={control}
          name="email"
          onChange={args => args[0].nativeEvent.text}
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.email && <Text>This is required. </Text>}

        <Text>Password:</Text>
        <Controller
          as={TextInput}
          control={control}
          name="password"
          onChange={args => args[0].nativeEvent.text}
          defaultValue=""
        />
      {errors.password && <Text>This is required. </Text>}
        <Button title="Return to Kingdom" onPress={handleSubmit(onSubmit)} />
      </View>

      <Button
        title="Don't have a King? Let's assign you one"
        onPress={() => navigation.navigate('Register')}
        color="#6cc9ff"
      />

    </View>
  );
}

function Register({ navigation })
{
  //[CONSTANT FOR REG FORM]//
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = () => {navigation.navigate('Schedule Me');}

  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    <View>
        <Text>Email:</Text>
        <Controller
          as={TextInput}
          control={control}
          name="email"
          onChange={args => args[0].nativeEvent.text}
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.email && <Text>This is required. </Text>}

        <Text>Password:</Text>
        <Controller
          as={TextInput}
          control={control}
          name="password"
          onChange={args => args[0].nativeEvent.text}
          defaultValue=""
        />
      {errors.password && <Text>This is required. </Text>}

        <Button title="Return home" onPress={handleSubmit(onSubmit)} />
    </View>

    </View>
  )
}

function Landing({ navigation }) //our landingpage.html
{
  return(

    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Let's go party"
        onPress={() => navigation.navigate('Events')}
        color="#6cc9ff"
      />

      <Button
        title="Let's organize ourself"
        onPress={() => navigation.navigate('To-Do Lists')}
        color="#6cc9ff"
      />

      <Button
        title="Let's go find classes"
        onPress={() => navigation.navigate('Class Search')}
        color="#6cc9ff"
      />

      <Button
        title="Let's go home"
        onPress={() => navigation.navigate('Schedule Me')}
        color="#6cc9ff"
      />
    </View>
  );
}

function Events({ navigation }) //our events.html
{
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Events will go here</Text>
    </View>
  );
}

function Lists({ navigation }) //our lists.html
{
  return(
    <ScrollView style={{flex: 1}}>
      <HTML html={htmlContentLists} />
    </ScrollView>
  );
}

function Classes({ navigation }) //our lists.html
{
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Classes will pop up here</Text>
    </View>
  );
}

/*[OUR ENTRY POINT]*/
function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Schedule Me">

          <Stack.Screen 
            name="Schedule Me"
            component={Home}
            options={{
              headerStyle: {
                backgroundColor: '#6cc9ff',
              },
            }}
          />

          <Stack.Screen 
            name="Login"
            component={Login}
            options={{
              headerStyle: {
                backgroundColor: '#6cc9ff',
              },
            }} 
          />

          <Stack.Screen 
            name="Landing Page" 
            component={Landing} 
            options={{
              headerStyle: {
                backgroundColor: '#6cc9ff',
              },
            }}
          />

          <Stack.Screen 
            name="Events" 
            component={Events} 
            options={{
              headerStyle: {
                backgroundColor: '#6cc9ff',
              },
            }}
          />

          <Stack.Screen 
            name="To-Do Lists" 
            component={Lists} 
            options={{
              headerStyle: {
                backgroundColor: '#6cc9ff',
              },
            }}
          />

          <Stack.Screen 
            name="Class Search" 
            component={Classes} 
            options={{
              headerStyle: {
                backgroundColor: '#6cc9ff',
              },
            }}
          />

          <Stack.Screen 
            name="Register" 
            component={Register} 
            options={{
              headerStyle: {
                backgroundColor: '#6cc9ff',
              },
            }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;