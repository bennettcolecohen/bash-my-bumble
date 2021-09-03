$(window).on('load', function() {

var tags = [
  
    // QUESTION 1
  {
    type: "input",
    tag: "text",
    name: "name",
    "chat-msg": "Sooo, what's your name?"
  },
  // QUESTION 2
  {
    type: "input",
    tag: "radio",
    name: "age",
    "chat-msg": "Nice to meet ya, {{name}}! How old are you?",
    children: [{
        value: "18-24",
        text: "18-24",
      },
      {
        value: "25-30",
        text: "25-30",
      },
      {
        value: "31-40",
        text: "31-40",
      },
      {
        value: "40+",
        text: "40+",
      }
    ]
  }, 
   // QUESTION 3
   {
    type: "input",
    tag: "checkbox",
    name: "app",
    "chat-msg": "What dating apps do you have downloaded on your phone right now (select all that apply)?",
    children: [{
        value: "Bumble",
        text: "Bumble",
      },
      {
        value: "Tinder",
        text: "Tinder",
      },
      {
        value: "Hinge",
        text: "Hinge",
      },
      {
        value: "Raya",
        text: "Raya",
      }, 
      {
        value: "Other",
        text: "Other",
      }
    ],
  },
  // QUESTION 4
  {
    type: "input",
    tag: "radio",
    name: "app",
    "chat-msg": "What dating app do you spend the most time on?",
    children: [{
        value: "Bumble",
        text: "Bumble",
      },
      {
        value: "Tinder",
        text: "Tinder",
      },
      {
        value: "Hinge",
        text: "Hinge",
      },
      {
        value: "Raya",
        text: "Raya",
      }, 
      {
        value: "Other",
        text: "Other",
      }
    ],
  },
  // Intermediate Messages
  {type:"msg",
  "chat-msg":"Cool",
  delay: 500},
  {type:"msg",
  "chat-msg":"I guess",
  delay: 500},
  {type:"msg",
  "chat-msg":"Okay, tbh i don't really care",
  delay: 1500},

// QUESTION 5
{
    type: "input",
    tag: "radio",
    name: "language",
    "chat-msg": "Anyway, when was the last time you used Bumble?",
    children: [{
        value: "Today",
        text: "Today",
      },
      {
        value: "Within the last week",
        text: "Within the last week",
      },
      {
        value: "Within the last month",
        text: "Within the last month",
      },
      {
        value: "It's been a while",
        text: "It's been a while",
      }
    ]
  },
// QUESTION 6
{
    type: "input",
    tag: "radio",
    name: "language",
    "chat-msg": "Have you ever dated or met someone from Bumble?",
    children: [{
        value: "Yeah, once",
        text: "Yeah, once"
      },
      {
        value: "Yeah, more than once",
        text: "Yeah, more than once"
      },
      {
        value: "Nope",
        text: "Nope"
      }
    ]
  }, 
// QUESTION 7
{
    type: "input",
    tag: "radio",
    name: "language",
    "chat-msg": "Do you think the people you hookup with, date, or have relationships with tend to be the same time of people you match with on dating apps (Bumble or other)?",
    children: [{
        value: "Yes",
        text: "Yes",
      },
      {
        value: "Eh, a little",
        text: "Eh, a little",
      },
      {
        value: "Nope",
        text: "Nope"
      }
    ]
  }, 
// QUESTION 8
  {type:"msg",
  "chat-msg":"Okay, last one, but it's important",
  delay: 100},
  {
    type: "input",
    tag: "radio",
    name: "age",
    "chat-msg": "Who do you match with usually on dating apps",
    children: [{
        value: "Guys",
        text: "Guys",
      },
      {
        value: "Girls",
        text: "Girls",
      },
      {
        value: "Everyone",
        text: "Everyone",
      },]},
      {type:"msg",
  "chat-msg":"Thanks for the info! I understand that all people have their own strengths, weaknesses, beauties, and flaws. Everything I tell you about your Bumble experience is completely a joke, and should be taken as such.",
  delay: 100}, 
  {
    type: "input",
    tag: "radio",
    name: "age",
    "chat-msg": "You understand?",
    children: [{
        value: "Yeah",
        text: "Yeah",
      },
      {
        value: "No, I want to leave",
        text: "No, I want to leave",
      },]},


];

function customTagRender () {
	$('#ui-control').prepend('<div id="custom-input">Custom input! Practically, this would be a clickable map or image, or virtually anything that you can code up. Click the big button below to submit</div>');
  
  //This custom data would be set by user interaction in the real world
  window.customData = "the possibilities are endless!";
}

$(document).ready(function() {
  Chat.start($('#chat-context'), tags);
});


});
  