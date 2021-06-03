import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Raphael Clemente Miranda</Text>
          <Text color="gray.300" fontSize="small">
            raphelc898@teste.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Raphael Miranda"
        src="https://github.com/raphaelc484.png"
      />
    </Flex>
  );
}
