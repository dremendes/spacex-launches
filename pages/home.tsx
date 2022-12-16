import { Flex, Heading, Text } from '@chakra-ui/core';
import { Card, CardHeader, CardBody } from '@chakra-ui/react'
import { launch, launches } from '../types/launch';


export default function Home(data: launches) {
  return (
    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      {data.launches.map((launch: launch) => (
        <Card key={launch.id} p={4} width={{ base: '100%', md: '50%' }}>
          <CardHeader>
            <Heading>Mission: {launch.mission_name}</Heading>
          </CardHeader>
          <CardBody>
            <Text>Launch site: {launch.launch_site.site_name}</Text>
            <Text>Rocket type: {launch.rocket.rocket_type}</Text>
          </CardBody>
        </Card>
      ))}
    </Flex>
  );
}