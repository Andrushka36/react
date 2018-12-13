import { fakeRequest } from "../fakeRequest.js";

export const fetchComments = () => {
  const mockCommentsData = sessionStorage.getItem("user-comments")
    ? JSON.parse(sessionStorage.getItem("user-comments"))
    : [];
  return fakeRequest(mockCommentsData, 1000).then(response => response);
};

export const addComment = commentData => {
  return fakeRequest(commentData, 500).then(response => response);
};
