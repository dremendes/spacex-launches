import gql from 'graphql-tag';
import client from "../apollo-client";
import { launches } from '../types/launch';
import Home from './home';

export async function getStaticProps() {
  const query = gql`
  {
    launches {
      id
      launch_site {
        site_id
        site_name
      }
      rocket {
        rocket_name
        rocket_type
      }
      mission_name
    }
  }  
  `;
    
  const { data } = await client.query({ query });


  return  {
    props: {
      launches: data.launches,
    },
  };
}

export default function HomePage(launches: launches) {
  return Home(launches);
}