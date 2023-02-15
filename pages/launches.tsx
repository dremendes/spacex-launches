import { gql, useQuery } from '@apollo/client';
import { Flex, Heading, Text } from '@chakra-ui/core';
import { Input } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, ChakraProvider, Image } from '@chakra-ui/react'
import { useState } from 'react';
import launch from '../types/launch';

export const query = gql`
{
  launches {
    id
    details
    mission_name
    launch_date_local
    links {
      flickr_images
    }
    rocket {
      rocket_name
      rocket_type
    }
  }
}  
  `;
export default function Launches() {
  const { data, loading, error } = useQuery(query);
  const allIds:number[] = [];
  const uniqueLaunches = data?.launches?.filter((launch: launch) => { if( allIds.includes(launch.id) ) { return false; } allIds.push(launch.id); return true; })
  const [search, setSearch] = useState("");

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }
  
  return (
    <ChakraProvider>
      <Heading as='h1' size='md' fontSize={ '30px' } textAlign={ 'center' }>SpaceX Launches</Heading>
      <Input
        placeholder="Search by mission name"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        flexWrap="wrap"
        width='550px'
        alignSelf='center'
        display='block'
        margin='20px auto'
      />
      <Flex  align="center" justify="center" flexWrap="wrap">
        {uniqueLaunches?.sort((a: launch, b: launch) => { return a.links.flickr_images.length > 0 ? -1 : 1; }).filter((launch: launch) =>
          launch.mission_name.toLowerCase().includes(search.toLowerCase())
        ).map((launch: launch) => (
          <Card key={launch.id}>
            <CardHeader>
              <Heading size='md'>Mission: {launch.mission_name.length >= 15 ? (launch.mission_name.slice(0,13) + '...') : launch.mission_name }</Heading>
            </CardHeader>
            <CardBody>
              <Image src={launch.links.flickr_images[0] ?? 'https://dummyimage.com/250x250/000/fff&text=no+image+provided'} borderRadius='lg' width={ '250px'} height={ '250px' } />
              <Text>Rocket type: <strong>{launch.rocket.rocket_type}</strong></Text>
              <Text maxWidth={ '250px' }>{launch.details}</Text>
            </CardBody>
          </Card>
        ))}
      </Flex>
    </ChakraProvider>
  );
}