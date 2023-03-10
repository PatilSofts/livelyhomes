/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      image
      type
      location
      otherDetails
      locationDetails
      noMembers
      oldPrice
      newPrice
      note
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        type
        location
        otherDetails
        locationDetails
        noMembers
        oldPrice
        newPrice
        note
        latitude
        longitude
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
