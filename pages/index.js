// import { MongoClient } from "mongodb";
// import MeetupList from "../components/meetups/MeetupList";
// import Head from "next/head";
// import { Fragment } from "react";

// // const DUMMY_MEETUPS = [
// //   {
// //     id: "m1",
// //     title: "A First Meetup",
// //     image:
// //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
// //     address: "Some address 5, 12345 Some City",
// //     description: "This is a first meetup!",
// //   },
// //   {
// //     id: "m2",
// //     title: "A Second Meetup",
// //     image:
// //       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
// //     address: "Some address 10, 12345 Some City",
// //     description: "This is a second meetup!",
// //   },
// // ];

// function HomePage(props) {
//   return (
//     <Fragment>
//       <Head>
//         <title>React Meetups</title>
//         <meta
//           name="description"
//           content="Browser a huge list of highly active React meetups!"
//         />
//       </Head>
//       <MeetupList meetups={props.meetups} />
//     </Fragment>
//   );
// }

// // export async function getServerSideProps(context) {
// //   const req = context.req;
// //   const res = context.res;

// //   //fetch data from the api
// //   return {
// //     props: {
// //       meetups: DUMMY_MEETUPS,
// //     },
// //   };
// // }

// export async function getStaticProps() {
//   //fetch data form an api without using useSatte and useEffect

//   const client = await MongoClient.connect(
//     "mongodb+srv://Aman:Amanbisht10@cluster0.hryso.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//   );
//   const db = client.db();

//   const meetupsCollection = db.collection("meetups");

//   const meetups = await meetupsCollection.find().toArray();

//   client.close();
//   return {
//     props: {
//       meetups: meetups.map((meetup) => ({
//         title: meetup.title,
//         address: meetup.address,
//         image: meetup.image,
//         id: meetup._id.toString(),
//       })),
//     },
//     revalidate: 1, // 1 second
//   };
// }
// export default HomePage;

import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://Aman:Amanbisht10@cluster0.hryso.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
