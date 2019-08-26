import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls:['./classes.component.scss']
})

export class ClassesComponent implements OnInit {
  classes : any = [];
  constructor() {
    this.classes = [
      {
        "header":"Ballet",
        "center_content": "Ballet is the foundation of all dances. This beginner Ballet class is dedicated to getting you confident, flexible and energized. Floating lightly between hard and soft movements. While also integrating emotion and learning how to 'feel the music'.  This class is for everyone that wants to work on their dance fundamentals and technique or continue to hone their skill set.",
        "bottom_content": "Dress comfortably in clothing you can move in. Ballet shoes are not required but recommended.  Pairs well with Stretch & Strengthen class."
      },
      {
        "header":"Flamenco",
        "center_content": "The Flamenco is a very passionate and emotional dance originating in Spain. In this 1-hour class you will learn different styles of Flamenco for singles, couples, and groups including different choreography styles like Bulerías, Sevillanas, Alegrías, and Rumbas. No partner is necessary for this class and is open for all levels!",
        "bottom_content": "Class Attire - Comfortable clothing which will allow for full body movement"
      },
      {
        "header":"Belly Dance",
        "center_content": "Belly Dance will explore different techniques and experiment with how we can use level changes, freezes, & flow to punctuate our dance as we express ourselves through movement and artistry.",
        "bottom_content": "Class Attire - Comfortable clothing which will allow for full body movement"
      },
      {
        "header":"Hip-Hop",
        "center_content": "This class will encompass the foundation of hip hop with basic footwork and the concepts of rhythm and groove. This class is for everyone and any skill level.",
        "bottom_content": "Comfortable attire and athletic/street shoes are required."
      },
      {
        "header":"Modern",
        "center_content": "Combine Jazz, Ballet, & Contemporary elements to create a beautiful form of self-expression in this 1-hour class. Utilize extensions, contractions and form, combined with choreography to emote a variety of feelings. No experience is needed for this class.",
        "bottom_content": "Comfortable and loose attire is recommended"
      },
      {
        "header":"Ballet",
        "center_content": "Ballet is the foundation of all dances. This beginner Ballet class is dedicated to getting you confident, flexible and energized. Floating lightly between hard and soft movements. While also integrating emotion and learning how to 'feel the music'.  This class is for everyone that wants to work on their dance fundamentals and technique or continue to hone their skill set.",
        "bottom_content": "Dress comfortably in clothing you can move in. Ballet shoes are not required but recommended.  Pairs well with Stretch & Strengthen class."
      },
      {
        "header":"Flamenco",
        "center_content": "The Flamenco is a very passionate and emotional dance originating in Spain. In this 1-hour class you will learn different styles of Flamenco for singles, couples, and groups including different choreography styles like Bulerías, Sevillanas, Alegrías, and Rumbas. No partner is necessary for this class and is open for all levels!",
        "bottom_content": "Class Attire - Comfortable clothing which will allow for full body movement"
      },
      {
        "header":"Belly Dance",
        "center_content": "Belly Dance will explore different techniques and experiment with how we can use level changes, freezes, & flow to punctuate our dance as we express ourselves through movement and artistry.",
        "bottom_content": "Class Attire - Comfortable clothing which will allow for full body movement"
      },
      {
        "header":"Hip-Hop",
        "center_content": "This class will encompass the foundation of hip hop with basic footwork and the concepts of rhythm and groove. This class is for everyone and any skill level.",
        "bottom_content": "Comfortable attire and athletic/street shoes are required."
      },
      {
        "header":"Modern",
        "center_content": "Combine Jazz, Ballet, & Contemporary elements to create a beautiful form of self-expression in this 1-hour class. Utilize extensions, contractions and form, combined with choreography to emote a variety of feelings. No experience is needed for this class.",
        "bottom_content": "Comfortable and loose attire is recommended"
      },
      {
        "header":"Ballet",
        "center_content": "Ballet is the foundation of all dances. This beginner Ballet class is dedicated to getting you confident, flexible and energized. Floating lightly between hard and soft movements. While also integrating emotion and learning how to 'feel the music'.  This class is for everyone that wants to work on their dance fundamentals and technique or continue to hone their skill set.",
        "bottom_content": "Dress comfortably in clothing you can move in. Ballet shoes are not required but recommended.  Pairs well with Stretch & Strengthen class."
      },
      {
        "header":"Flamenco",
        "center_content": "The Flamenco is a very passionate and emotional dance originating in Spain. In this 1-hour class you will learn different styles of Flamenco for singles, couples, and groups including different choreography styles like Bulerías, Sevillanas, Alegrías, and Rumbas. No partner is necessary for this class and is open for all levels!",
        "bottom_content": "Class Attire - Comfortable clothing which will allow for full body movement"
      },
      {
        "header":"Belly Dance",
        "center_content": "Belly Dance will explore different techniques and experiment with how we can use level changes, freezes, & flow to punctuate our dance as we express ourselves through movement and artistry.",
        "bottom_content": "Class Attire - Comfortable clothing which will allow for full body movement"
      },
      {
        "header":"Hip-Hop",
        "center_content": "This class will encompass the foundation of hip hop with basic footwork and the concepts of rhythm and groove. This class is for everyone and any skill level.",
        "bottom_content": "Comfortable attire and athletic/street shoes are required."
      },
      {
        "header":"Modern",
        "center_content": "Combine Jazz, Ballet, & Contemporary elements to create a beautiful form of self-expression in this 1-hour class. Utilize extensions, contractions and form, combined with choreography to emote a variety of feelings. No experience is needed for this class.",
        "bottom_content": "Comfortable and loose attire is recommended"
      },
      {
        "header":"Ballet",
        "center_content": "Ballet is the foundation of all dances. This beginner Ballet class is dedicated to getting you confident, flexible and energized. Floating lightly between hard and soft movements. While also integrating emotion and learning how to 'feel the music'.  This class is for everyone that wants to work on their dance fundamentals and technique or continue to hone their skill set.",
        "bottom_content": "Dress comfortably in clothing you can move in. Ballet shoes are not required but recommended.  Pairs well with Stretch & Strengthen class."
      },
      {
        "header":"Flamenco",
        "center_content": "The Flamenco is a very passionate and emotional dance originating in Spain. In this 1-hour class you will learn different styles of Flamenco for singles, couples, and groups including different choreography styles like Bulerías, Sevillanas, Alegrías, and Rumbas. No partner is necessary for this class and is open for all levels!",
        "bottom_content": "Class Attire - Comfortable clothing which will allow for full body movement"
      },
      {
        "header":"Belly Dance",
        "center_content": "Belly Dance will explore different techniques and experiment with how we can use level changes, freezes, & flow to punctuate our dance as we express ourselves through movement and artistry.",
        "bottom_content": "Class Attire - Comfortable clothing which will allow for full body movement"
      },
      {
        "header":"Hip-Hop",
        "center_content": "This class will encompass the foundation of hip hop with basic footwork and the concepts of rhythm and groove. This class is for everyone and any skill level.",
        "bottom_content": "Comfortable attire and athletic/street shoes are required."
      },
      {
        "header":"Modern",
        "center_content": "Combine Jazz, Ballet, & Contemporary elements to create a beautiful form of self-expression in this 1-hour class. Utilize extensions, contractions and form, combined with choreography to emote a variety of feelings. No experience is needed for this class.",
        "bottom_content": "Comfortable and loose attire is recommended"
      },
      {
        "header":"Ballet",
        "center_content": "Ballet is the foundation of all dances. This beginner Ballet class is dedicated to getting you confident, flexible and energized. Floating lightly between hard and soft movements. While also integrating emotion and learning how to 'feel the music'.  This class is for everyone that wants to work on their dance fundamentals and technique or continue to hone their skill set.",
        "bottom_content": "Dress comfortably in clothing you can move in. Ballet shoes are not required but recommended.  Pairs well with Stretch & Strengthen class."
      },
      {
        "header":"Flamenco",
        "center_content": "The Flamenco is a very passionate and emotional dance originating in Spain. In this 1-hour class you will learn different styles of Flamenco for singles, couples, and groups including different choreography styles like Bulerías, Sevillanas, Alegrías, and Rumbas. No partner is necessary for this class and is open for all levels!",
        "bottom_content": "Class Attire - Comfortable clothing which will allow for full body movement"
      },
      {
        "header":"Belly Dance",
        "center_content": "Belly Dance will explore different techniques and experiment with how we can use level changes, freezes, & flow to punctuate our dance as we express ourselves through movement and artistry.",
        "bottom_content": "Class Attire - Comfortable clothing which will allow for full body movement"
      },
      {
        "header":"Hip-Hop",
        "center_content": "This class will encompass the foundation of hip hop with basic footwork and the concepts of rhythm and groove. This class is for everyone and any skill level.",
        "bottom_content": "Comfortable attire and athletic/street shoes are required."
      },
      {
        "header":"Modern",
        "center_content": "Combine Jazz, Ballet, & Contemporary elements to create a beautiful form of self-expression in this 1-hour class. Utilize extensions, contractions and form, combined with choreography to emote a variety of feelings. No experience is needed for this class.",
        "bottom_content": "Comfortable and loose attire is recommended"
      },
      {
        "header":"Belly Dance",
        "center_content": "Belly Dance will explore different techniques and experiment with how we can use level changes, freezes, & flow to punctuate our dance as we express ourselves through movement and artistry.",
        "bottom_content": "Class Attire - Comfortable clothing which will allow for full body movement"
      },
      {
        "header":"Hip-Hop",
        "center_content": "This class will encompass the foundation of hip hop with basic footwork and the concepts of rhythm and groove. This class is for everyone and any skill level.",
        "bottom_content": "Comfortable attire and athletic/street shoes are required."
      }
    ]
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

}