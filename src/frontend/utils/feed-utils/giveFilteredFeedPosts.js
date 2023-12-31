


const giveFilteredFeedPosts = (posts, following, currentUsername) => {
  const followingUsernames = following ? following.map((user) => user.username) : [];
  return posts.filter(
    (post) =>
      followingUsernames.includes(post.username) ||
      post.username === currentUsername
  );
};

export { giveFilteredFeedPosts };