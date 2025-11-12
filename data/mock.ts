import { faker } from '@faker-js/faker';

export interface User {
  id: string;
  username: string;
  avatar: string;
}

export interface Story {
  id: string;
  user: User;
}

export interface Post {
  id: string;
  user: User;
  image: string;
  caption: string;
  likes: number;
  firstLiker: User;
  commentsCount: number;
  createdAt: string;
}

const createRandomUser = (): User => ({
  id: faker.string.uuid(),
  username: faker.internet.userName().toLowerCase(),
  avatar: faker.image.avatar(),
});

const createRandomPost = (user: User): Post => ({
  id: faker.string.uuid(),
  user,
  image: faker.image.urlLoremFlickr({ category: 'nature', width: 640, height: 480 }),
  caption: faker.lorem.sentence(),
  likes: faker.number.int({ min: 10, max: 50000 }),
  firstLiker: createRandomUser(),
  commentsCount: faker.number.int({ min: 0, max: 1000 }),
  createdAt: `${faker.number.int({ min: 1, max: 23 })} horas atrás`,
});

export const USERS: User[] = faker.helpers.multiple(createRandomUser, { count: 15 });
export const STORIES: Story[] = USERS.map(user => ({ id: faker.string.uuid(), user }));
export const POSTS: Post[] = USERS.map(user => createRandomPost(user));
