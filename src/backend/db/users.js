import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [

  // User 1
  {
    _id: uuid(),
    firstName: "Anish",
    lastName: "Ketkar",
    username: "anish1234",
    avatarURL:
    "https://thumbs.dreamstime.com/b/portrait-good-looking-smiling-indian-man-crossed-arms-standing-modern-building-office-portrait-smiling-indian-man-148147610.jpg",
  bio: "always looking cool!",
  website: "https://peerlist.io/anish",
  following: [
    {
      _id: uuid(),
      firstName: "Vishal",
      lastName: "Singh",
      username: "vishalsinghrawat29",
      avatarURL:
        "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
    },
    {
      _id: uuid(),
      firstName: "Manish",
      lastName: "Gupta",
      username: "Manish_20",
      avatarURL:
        "https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
    },
    {
      _id: uuid(),
      firstName: "Abhi",
      lastName: "Dubey",
      username: "AbhiDubey",
      avatarURL:
        "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
    },
    {
      _id: uuid(),
      firstName: "Kriti",
      lastName: "Pawar",
      username: "kriti_pawar",
      avatarURL:
      "https://images.pexels.com/photos/2747267/pexels-photo-2747267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.jpg",
    },
  ],
  followers: [
    {
      _id: uuid(),
      firstName: "Sumedh",
      lastName: "Kurhade",
      username: "sumedhk",
      avatarURL:
        "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
    },
    {
      _id: uuid(),
      firstName: "Aster",
      lastName: "Rebeiro",
      username: "aster08",
      avatarURL:
        "https://pbs.twimg.com/profile_images/1387873189917720581/3NfEA_sE_400x400.jpg",
    },
    {
      _id: uuid(),
      firstName: "Rishi",
      lastName: "Gurav",
      username: "iamrishi",
      avatarURL:
        "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
    },
    {
      _id: uuid(),
      firstName: "Manish",
      lastName: "Gupta",
      username: "Manish_20",
      avatarURL:
        "https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
    },
    {
      _id: uuid(),
      firstName: "Abhi",
      lastName: "Dubey",
      username: "AbhiDubey",
      avatarURL:
        "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
    },
    {
      _id: uuid(),
      firstName: "Kriti",
      lastName: "Pawar",
      username: "kriti_pawar",
      avatarURL:
      "https://images.pexels.com/photos/2747267/pexels-photo-2747267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.jpg",
     
    },
  ],
    password: "password",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // User 1
  // User 2
  {
    _id: uuid(),
    firstName: "Vishal",
    lastName: "Singh",
    username: "vishalsinghrawat29",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
    bio: "The kinda perfect guy you love in your books.",
    website: "https://vishalsinghrawat.netlify.app/",
    following: [
      {
        _id: uuid(),
        firstName: "Rishi",
        lastName: "Gurav",
        username: "iamrishi",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Manish",
        lastName: "Gupta",
        username: "Manish_20",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Abhi",
        lastName: "Dubey",
        username: "AbhiDubey",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
      },
     
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Sumedh",
        lastName: "Kurhade",
        username: "sumedhk",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Rishi",
        lastName: "Gurav",
        username: "iamrishi",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Manish",
        lastName: "Gupta",
        username: "Manish_20",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
      },
    
     
    ],
    password: "vishal123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // User 2
  // User 3
  {
    _id: uuid(),
    firstName: "Sumedh",
    lastName: "Kurhade",
    username: "sumedhk",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
    bio: "The best things come from living outside of your comfort zone",
    website: "https://sumedhkurhade.netlify.app/",
    following: [
      {
        _id: uuid(),
        firstName: "Vishal",
        lastName: "Singh",
        username: "vishalsinghrawat29",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
      },
      {
        _id: uuid(),
        firstName: "Aster",
        lastName: "Rebeiro",
        username: "aster08",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1387873189917720581/3NfEA_sE_400x400.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Vishal",
        lastName: "Singh",
        username: "vishalsinghrawat29",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
      },
    ],
    password: "sumedhk123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // User 3
  // User 4
  {
    _id: uuid(),
    firstName: "Aster",
    lastName: "Rebeiro",
    username: "aster08",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1387873189917720581/3NfEA_sE_400x400.jpg",
    bio: "Success is in my veins",
    website: "https://peerlist.io/aster08",
    following: [
      {
        _id: uuid(),
        firstName: "Vishal",
        lastName: "Singh",
        username: "vishalsinghrawat29",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Sumedh",
        lastName: "Kurhade",
        username: "sumedhk",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1413557784746991621/QA9i13a3_400x400.jpg",
      },
    ],
    password: "aster08123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // User 4
  // User 5
  {
    _id: uuid(),
    firstName: "Rishi",
    lastName: "Gurav",
    username: "iamrishi",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
    bio: "Fallen Archangel of pride, sin, free will and the stars",
    website: "https://peerlist.io/t007rushi",
    following: [
      {
        _id: uuid(),
        firstName: "Vishal",
        lastName: "Singh",
        username: "vishalsinghrawat29",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Vishal",
        lastName: "Singh",
        username: "vishalsinghrawat29",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
      },
    ],
    password: "iamrishi123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // User 5
  // User 6
  {
    _id: uuid(),
    firstName: "Manish",
    lastName: "Gupta",
    username: "Manish_20",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
    bio: "Fallen Archangel of pride, sin, free will and the stars",
    website: "https://manishgupta.netlify.app/",
    following: [
      {
        _id: uuid(),
        firstName: "Vishal",
        lastName: "Singh",
        username: "vishalsinghrawat29",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Vishal",
        lastName: "Singh",
        username: "vishalsinghrawat29",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
      },
    ],
    password: "Manish_123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // User 6
  // User 7
  {
    _id: uuid(),
    firstName: "Abhi",
    lastName: "Dubey",
    username: "AbhiDubey",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
    bio: "Learning New thing while working!",
    website: "https://peerlist.io/Abhi",
    following: [
      {
        _id: uuid(),
        firstName: "Vishal",
        lastName: "Singh",
        username: "vishalsinghrawat29",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Vishal",
        lastName: "Singh",
        username: "vishalsinghrawat29",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
      },
    ],
    password: "AbhiDubey123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // User 7
  // User 8
  {
    _id: uuid(),
    firstName: "Kriti",
    lastName: "Pawar",
    username: "kriti_pawar",
    avatarURL:
    "https://images.pexels.com/photos/2747267/pexels-photo-2747267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.jpg",
 
    bio: "Sometimes you gotta run before you can walk",
    website: "https://kritipawar.netlify.app/",
    following: [
      {
        _id: uuid(),
        firstName: "Vishal",
        lastName: "Singh",
        username: "vishalsinghrawat29",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Vishal",
        lastName: "Singh",
        username: "vishalsinghrawat29",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
      },
    ],
    password: "kriti_pawar123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // User 8
];
