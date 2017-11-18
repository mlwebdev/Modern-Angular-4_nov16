import { Book } from './book';

const MOCK_BOOKS: Book[] = [
  {
    id: 1,
    isbn: 9781783980628,
    title: 'Getting Started with Grunt',
    authors: 'Jaime Pillora',
    published: 'February 2014',
    // tslint:disable-next-line:max-line-length
    description: 'If you know JavaScript you ought to know Grunt – the Task Runner for managing sophisticated web applications. From a basic understanding to constructing your own advanced Grunt tasks, this tutorial has it all covered.',
    coverImage: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/0628OS_Getting%20Started.jpg'
  },
  {
    id: 2,
    isbn: 9781786462084,
    title: 'Laravel 5.x Cookbook',
    authors: 'Alfred Nutile',
    published: 'September 2016',
    description: 'A recipe-based book to help you efficiently create amazing PHP-based applications with Laravel 5.x',
    // tslint:disable-next-line:max-line-length
    coverImage: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/B05517_MockupCover_Cookbook_0.jpg'
  },
  {
    id: 3,
    isbn: 9781784396527,
    title: 'Sitecore Cookbook for Developers',
    authors: 'Yogesh Patel',
    published: 'April 2016',
    description: 'Over 70 incredibly effective and practical recipes to get you up and running with Sitecore development',
    coverImage: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/6527cov_.jpg'
  },
  {
    id: 4,
    isbn: 9781783286935,
    title: 'Sass and Compass Designers Cookbook',
    authors: 'Bass Jobsen',
    published: 'April 2016',
    // tslint:disable-next-line:max-line-length
    description: 'Over 120 practical and easy-to-understand recipes that explain how to use Sass and Compass to write efficient, maintainable, and reusable CSS code for your web development projects',
    coverImage: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/I6935.jpg'
  },
  {
    id: 5,
    isbn: 9781787124660,
    title: 'Functional Programming for JavaScript Developers',
    authors: 'Ved Antani',
    published: 'August 2016',
    // tslint:disable-next-line:max-line-length
    description: 'Unlock the powers of functional programming hidden within JavaScript to build smarter, cleaner, and more reliable web apps.',
    coverImage: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/978-1-78712-466-0.png'
  },
  {
    id: 6,
    isbn: 9781849510004,
    title: 'JavaScript Testing Beginners Guide',
    authors: 'Yuxian',
    published: 'August 2010',
    description: 'Test and debug JavaScript the easy way.',
    // tslint:disable-next-line:max-line-length
    coverImage: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/0004OT_MockupCover_Beginers%20guide.jpg'
  },
  {
    id: 7,
    isbn: 9781785281341,
    title: 'Mastering JavaScript',
    authors: 'Ved Antani',
    published: 'January 2016',
    description: 'Explore and master modern JavaScript techniques in order to build large-scale web applications.',
    // tslint:disable-next-line:max-line-length
    coverImage: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/4709_1341OS_Mastering%20JavaScript.jpg'
  },
  {
    id: 8,
    isbn: 9781849694384,
    title: 'Augmented Reality with Kinect',
    authors: 'Rui Wang',
    published: 'July 2013',
    // tslint:disable-next-line:max-line-length
    description: 'Microsoft Kinect changes the notion of user interface design. It differs from most other user input controllers as it enables users to interact with the program without touching the mouse or a trackpad. It utilizes motion sensing technology and all it needs is a real-time cameras, tracked skeletons, and gestures.',
    coverImage: 'https://dz13w8afd47il.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/4384OT_Mini.jpg'
  },
  {
    id: 9,
    isbn: 9781785881572,
    title: 'JavaScript Unlocked',
    authors: 'Dmitry Sheiko',
    published: 'December 2015',
    // tslint:disable-next-line:max-line-length
    description: 'Improve your code maintainability, performance, and security through practical expert insights and unlock the full potential of JavaScript.',
    coverImage: 'https://d255esdrn735hr.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/1572OS_4886_Javascript%20Unlocked.jpg'
  },
  {
    id: 10,
    isbn: 9781849692380,
    title: 'Kinect for Windows SDK Programming Guide',
    authors: 'Abhijit Jana',
    published: 'December 2012',
    // tslint:disable-next-line:max-line-length
    description: 'Kinect has been a game-changer in the world of motion games and applications since its first release. It has been touted as a controller for Microsoft Xbox but is much more than that. The developer version of Kinect, Kinect for Windows SDK, provides developers with the tools to develop applications that run on Windows. You can use this to develop applications that make interaction with your computer hands-free.',
    coverImage: 'https://d1ldz4te4covpm.cloudfront.net/sites/default/files/imagecache/ppv4_main_book_cover/2380OT.jpg'
  }
];

export default MOCK_BOOKS;
