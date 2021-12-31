import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

const Profile = ({ showProfileData = true }) => {
  return(
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Lucas Nakahara</Text>

          <Text color="gray.300" fontSize="small">
            nakahara@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Lucas Nakahara" src="https://github.com/nakahwra.png"/>
    </Flex>
  );
}

export default Profile;