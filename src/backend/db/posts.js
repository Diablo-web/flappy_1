import { v4 as uuid } from "uuid";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  // Post 1
  {
    _id: uuid(),
    content: "Time moves in one direction, memory in another.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Aster",
          lastName: "Rebeiro",
          username: "aster08",
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
      dislikedBy: [],
    },
    firstName: "Anish",
    lastName: "Ketkar",
    avatarURL:
      "https://thumbs.dreamstime.com/b/portrait-good-looking-smiling-indian-man-crossed-arms-standing-modern-building-office-portrait-smiling-indian-man-148147610.jpg",
    username: "anish1234",
    createdAt: new Date("July 1, 2023"),
    updatedAt: new Date("July 1, 2023"),
    comments: [
      {
        _id: uuid(),
        firstName: "Aster",
        lastName: "Rebeiro",
        username: "aster08",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Abhi",
        lastName: "Dubey",
        username: "AbhiDubey",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 1

  // Post 2
  {
    _id: uuid(),
    content: "The only real mistake is the one from which we learn nothing.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Aster",
          lastName: "Rebeiro",
          username: "aster08",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
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
      dislikedBy: [],
    },
    firstName: "Abhi",
    lastName: "Dubey",
    username: "AbhiDubey",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
    createdAt: new Date("July 2, 2023"),
    updatedAt: new Date("July 2, 2023"),
    comments: [
      {
        _id: uuid(),
        firstName: "Rishi",
        lastName: "Gurav",
        username: "iamrishi",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Abhi",
        lastName: "Dubey",
        username: "AbhiDubey",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 2
  // Post 3
  {
    _id: uuid(),
    content: "Life shrinks or expands in proportion to one’s courage.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Aster",
          lastName: "Rebeiro",
          username: "aster08",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
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
          firstName: "Kriti",
          lastName: "Pawar",
          username: "kriti_pawar",
          avatarURL:
            "https://images.pexels.com/photos/2747267/pexels-photo-2747267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Kriti",
    lastName: "Pawar",
    username: "kriti_pawar",
    avatarURL:
      "https://images.pexels.com/photos/2747267/pexels-photo-2747267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.jpg",
    createdAt: new Date("July 3, 2023"),
    updatedAt: new Date("July 3, 2023"),
    comments: [
      {
        _id: uuid(),
        firstName: "Rishi",
        lastName: "Gurav",
        username: "iamrishi",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Abhi",
        lastName: "Dubey",
        username: "AbhiDubey",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 3
  // Post 4
  {
    _id: uuid(),
    content:
      "Happiness often sneaks in through a door you didn’t know you left open.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Aster",
          lastName: "Rebeiro",
          username: "aster08",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
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
      dislikedBy: [],
    },
    firstName: "Anish",
    lastName: "Ketkar",
    avatarURL:
      "https://thumbs.dreamstime.com/b/portrait-good-looking-smiling-indian-man-crossed-arms-standing-modern-building-office-portrait-smiling-indian-man-148147610.jpg",
    username: "anish1234",
    createdAt: new Date("July 2, 2023"),
    updatedAt: new Date("July 2, 2023"),
    comments: [
      {
        _id: uuid(),
        firstName: "Rishi",
        lastName: "Gurav",
        username: "iamrishi",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Abhi",
        lastName: "Dubey",
        username: "AbhiDubey",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 3
  // Post 4
  {
    _id: uuid(),
    content:
      "You can’t cross the sea merely by standing and staring at the water.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Aster",
          lastName: "Rebeiro",
          username: "aster08",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
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
          firstName: "Kriti",
          lastName: "Pawar",
          username: "kriti_pawar",
          avatarURL:
            "https://images.pexels.com/photos/2747267/pexels-photo-2747267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Anish",
    lastName: "Ketkar",
    avatarURL:
      "https://thumbs.dreamstime.com/b/portrait-good-looking-smiling-indian-man-crossed-arms-standing-modern-building-office-portrait-smiling-indian-man-148147610.jpg",
    username: "anish1234",
    createdAt: new Date("July 6, 2023"),
    updatedAt: new Date("July 6, 2023"),
    comments: [
      {
        _id: uuid(),
        firstName: "Rishi",
        lastName: "Gurav",
        username: "iamrishi",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Abhi",
        lastName: "Dubey",
        username: "AbhiDubey",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 4
  // Post 5
  {
    _id: uuid(),
    content: "If you can dream it, you can do it.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Aster",
          lastName: "Rebeiro",
          username: "aster08",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
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
      dislikedBy: [],
    },
    firstName: "Manish",
    lastName: "Gupta",
    username: "Manish_20",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
    createdAt: new Date("June 28, 2023"),
    updatedAt: new Date("June 28, 2023"),
    comments: [
      {
        _id: uuid(),
        firstName: "Rishi",
        lastName: "Gurav",
        username: "iamrishi",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Abhi",
        lastName: "Dubey",
        username: "AbhiDubey",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 5
  // Post 6
  {
    _id: uuid(),
    content: "Either you run the day, or the day runs you.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Aster",
          lastName: "Rebeiro",
          username: "aster08",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
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
          firstName: "Kriti",
          lastName: "Pawar",
          username: "kriti_pawar",
          avatarURL:
            "https://images.pexels.com/photos/2747267/pexels-photo-2747267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Sumedh",
    lastName: "Kurhade",
    username: "sumedhk",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1387873189917720581/3NfEA_sE_400x400.jpg",
    createdAt: new Date("June 29, 2023"),
    updatedAt: new Date("June 29, 2023"),
    comments: [
      {
        _id: uuid(),
        firstName: "Rishi",
        lastName: "Gurav",
        username: "iamrishi",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Abhi",
        lastName: "Dubey",
        username: "AbhiDubey",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 6
  // Post 7
  {
    _id: uuid(),
    content: "The roots of education are bitter, but the fruit is sweet.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Aster",
          lastName: "Rebeiro",
          username: "aster08",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
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
      dislikedBy: [],
    },
    firstName: "Manish",
    lastName: "Gupta",
    username: "Manish_20",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
    createdAt: new Date("June 27, 2023"),
    updatedAt: new Date("June 27, 2023"),
    comments: [
      {
        _id: uuid(),
        firstName: "Rishi",
        lastName: "Gurav",
        username: "iamrishi",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Abhi",
        lastName: "Dubey",
        username: "AbhiDubey",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 7
  // Post 8
  {
    _id: uuid(),
    content: "The most wasted of days is one without laughter.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Aster",
          lastName: "Rebeiro",
          username: "aster08",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
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
          firstName: "Kriti",
          lastName: "Pawar",
          username: "kriti_pawar",
          avatarURL:
            "https://images.pexels.com/photos/2747267/pexels-photo-2747267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Sumedh",
    lastName: "Kurhade",
    username: "sumedhk",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1387873189917720581/3NfEA_sE_400x400.jpg",
    createdAt: new Date("July 5, 2023"),
    updatedAt: new Date("July 5, 2023"),
    comments: [
      {
        _id: uuid(),
        firstName: "Rishi",
        lastName: "Gurav",
        username: "iamrishi",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Abhi",
        lastName: "Dubey",
        username: "AbhiDubey",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 8
  // Post 9
  {
    _id: uuid(),
    content: "The best way out is always through.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Aster",
          lastName: "Rebeiro",
          username: "aster08",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
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
          firstName: "Kriti",
          lastName: "Pawar",
          username: "kriti_pawar",
          avatarURL:
            "https://images.pexels.com/photos/2747267/pexels-photo-2747267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Manish",
    lastName: "Gupta",
    username: "Manish_20",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
    createdAt: new Date("June 24, 2023"),
    updatedAt: new Date("June 24, 2023"),
    comments: [
      {
        _id: uuid(),
        firstName: "Rishi",
        lastName: "Gurav",
        username: "iamrishi",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Abhi",
        lastName: "Dubey",
        username: "AbhiDubey",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 9
  // Post 10
  {
    _id: uuid(),
    content:
      "Achievements of today are the stepping stones for the future ones.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Aster",
          lastName: "Rebeiro",
          username: "aster08",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
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
          firstName: "Kriti",
          lastName: "Pawar",
          username: "kriti_pawar",
          avatarURL:
            "https://images.pexels.com/photos/2747267/pexels-photo-2747267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Aster",
    lastName: "Rebeiro",
    username: "aster08",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
    createdAt: new Date("June 24, 2023"),
    updatedAt: new Date("June 24, 2023"),
    comments: [
      {
        _id: uuid(),
        firstName: "Rishi",
        lastName: "Gurav",
        username: "iamrishi",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Abhi",
        lastName: "Dubey",
        username: "AbhiDubey",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 10
  // Post 11
  {
    _id: uuid(),
    content: "Whenever life hammers you, bounce back with a smile.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Aster",
          lastName: "Rebeiro",
          username: "aster08",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
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
          firstName: "Kriti",
          lastName: "Pawar",
          username: "kriti_pawar",
          avatarURL:
            "https://images.pexels.com/photos/2747267/pexels-photo-2747267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Rishi",
    lastName: "Gurav",
    username: "iamrishi",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
    createdAt: new Date("June 6, 2023"),
    updatedAt: new Date("June 6, 2023"),
    comments: [
      {
        _id: uuid(),
        firstName: "Rishi",
        lastName: "Gurav",
        username: "iamrishi",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Abhi",
        lastName: "Dubey",
        username: "AbhiDubey",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 11
  // Post 12
  {
    _id: uuid(),
    content: "The triumph can’t be had without the struggle.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Aster",
          lastName: "Rebeiro",
          username: "aster08",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
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
          firstName: "Kriti",
          lastName: "Pawar",
          username: "kriti_pawar",
          avatarURL:
            "https://images.pexels.com/photos/2747267/pexels-photo-2747267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Anish",
    lastName: "Ketkar",
    username: "anish1234",
    avatarURL:
      "https://thumbs.dreamstime.com/b/portrait-good-looking-smiling-indian-man-crossed-arms-standing-modern-building-office-portrait-smiling-indian-man-148147610.jpg",
    createdAt: new Date("June 7, 2023"),
    updatedAt: new Date("June 7, 2023"),
    comments: [
      {
        _id: uuid(),
        firstName: "Rishi",
        lastName: "Gurav",
        username: "iamrishi",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Abhi",
        lastName: "Dubey",
        username: "AbhiDubey",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 12
  // Post 13
  {
    _id: uuid(),
    content: "If you have the ability to love, love yourself first.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Aster",
          lastName: "Rebeiro",
          username: "aster08",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
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
          firstName: "Kriti",
          lastName: "Pawar",
          username: "kriti_pawar",
          avatarURL:
            "https://images.pexels.com/photos/2747267/pexels-photo-2747267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Aster",
    lastName: "Rebeiro",
    username: "aster08",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
    createdAt: new Date("June 6, 2023"),
    updatedAt: new Date("June 6, 2023"),
    comments: [
      {
        _id: uuid(),
        firstName: "Rishi",
        lastName: "Gurav",
        username: "iamrishi",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Abhi",
        lastName: "Dubey",
        username: "AbhiDubey",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 13
  // Post 14
  {
    _id: uuid(),
    content: "Mastering others is strength. Mastering yourself is true power.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Aster",
          lastName: "Rebeiro",
          username: "aster08",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
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
          firstName: "Kriti",
          lastName: "Pawar",
          username: "kriti_pawar",
          avatarURL:
            "https://images.pexels.com/photos/2747267/pexels-photo-2747267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Sumedh",
    lastName: "Kurhade",
    username: "sumedhk",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
    createdAt: new Date("June 16, 2023"),
    updatedAt: new Date("June 16, 2023"),
    comments: [
      {
        _id: uuid(),
        firstName: "Rishi",
        lastName: "Gurav",
        username: "iamrishi",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Abhi",
        lastName: "Dubey",
        username: "AbhiDubey",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 14
  // Post 15
  {
    _id: uuid(),
    content: "Good things happen to those who hustle.",
    likes: {
      likeCount: 3,
      likedBy: [
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
          firstName: "Rishi",
          lastName: "Gurav",
          username: "iamrishi",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
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
      dislikedBy: [],
    },
    firstName: "Vishal",
    lastName: "Singh",
    username: "vishalsinghrawat29",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
    createdAt: new Date("June 26, 2023"),
    updatedAt: new Date("June 26, 2023"),
    comments: [
      {
        _id: uuid(),
        firstName: "Rishi",
        lastName: "Gurav",
        username: "iamrishi",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Abhi",
        lastName: "Dubey",
        username: "AbhiDubey",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 15
  // Post 16
  {
    _id: uuid(),
    content: "It’s kind of fun to do the impossible.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Aster",
          lastName: "Rebeiro",
          username: "aster08",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        },
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
          firstName: "Kriti",
          lastName: "Pawar",
          username: "kriti_pawar",
          avatarURL:
            "https://images.pexels.com/photos/2747267/pexels-photo-2747267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Kriti",
    lastName: "Pawar",
    username: "kriti_pawar",
    avatarURL:
      "https://images.pexels.com/photos/2747267/pexels-photo-2747267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.jpg",
    createdAt: new Date("June 20, 2023"),
    updatedAt: new Date("June 20, 2023"),
    comments: [
      {
        _id: uuid(),
        firstName: "Rishi",
        lastName: "Gurav",
        username: "iamrishi",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Abhi",
        lastName: "Dubey",
        username: "AbhiDubey",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 16
  // Post 17
  {
    _id: uuid(),
    content: "No pressure, no diamonds.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Aster",
          lastName: "Rebeiro",
          username: "aster08",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
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
          firstName: "Kriti",
          lastName: "Pawar",
          username: "kriti_pawar",
          avatarURL:
            "https://images.pexels.com/photos/2747267/pexels-photo-2747267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Sumedh",
    lastName: "Kurhade",
    username: "sumedhk",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
    createdAt: new Date("June 18, 2023"),
    updatedAt: new Date("June 18, 2023"),
    comments: [
      {
        _id: uuid(),
        firstName: "Rishi",
        lastName: "Gurav",
        username: "iamrishi",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Abhi",
        lastName: "Dubey",
        username: "AbhiDubey",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 17
  // Post 18
  {
    _id: uuid(),
    content: "You miss 100% of the shots you don’t take.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Aster",
          lastName: "Rebeiro",
          username: "aster08",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
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
      dislikedBy: [],
    },
    firstName: "Manish",
    lastName: "Gupta",
    username: "Manish_20",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
    createdAt: new Date("June 15, 2023"),
    updatedAt: new Date("June 15, 2023"),
    comments: [
      {
        _id: uuid(),
        firstName: "Rishi",
        lastName: "Gurav",
        username: "iamrishi",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 18
  // Post 19
  {
    _id: uuid(),
    content: "I would rather die of passion than of boredom.",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Aster",
          lastName: "Rebeiro",
          username: "aster08",
          avatarURL:
            "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
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
          firstName: "Kriti",
          lastName: "Pawar",
          username: "kriti_pawar",
          avatarURL:
            "https://images.pexels.com/photos/2747267/pexels-photo-2747267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Sumedh",
    lastName: "Kurhade",
    username: "sumedhk",
    avatarURL:
      "https://pbs.twimg.com/profile_images/1511020219250376713/zFRXcl9k_400x400.jpg",
    createdAt: new Date("June 15, 2023"),
    updatedAt: new Date("June 15, 2023"),
    comments: [
      {
        _id: uuid(),
        firstName: "Rishi",
        lastName: "Gurav",
        username: "iamrishi",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1529104197613805568/iKazt9pT_400x400.jpg",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        firstName: "Abhi",
        lastName: "Dubey",
        username: "AbhiDubey",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 19
  // Post 20
  {
    _id: uuid(),
    content: "There are no regrets in life, just lessons.",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Kriti",
          lastName: "Pawar",
          username: "kriti_pawar",
          avatarURL:
            "https://images.pexels.com/photos/2747267/pexels-photo-2747267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500.jpg",
        },
      ],
      dislikedBy: [],
    },
    firstName: "Vishal",
    lastName: "Singh",
    username: "vishalsinghrawat29",
    avatarURL:
          "https://pbs.twimg.com/profile_images/1528089482364612608/rTGaahib_400x400.jpg",
    
    createdAt: new Date("June 27, 2023"),
    updatedAt: new Date("June 27, 2023"),
    comments: [
      {
        _id: uuid(),
        firstName: "Abhi",
        lastName: "Dubey",
        username: "AbhiDubey",
        avatarURL:
          "https://pbs.twimg.com/profile_images/1479650839660675075/B3bwE2Yk_400x400.jpg",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  // Post 20
];
