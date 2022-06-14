import { FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react'

function AccountSettings() {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      <FormControl id="iid">
        <FormLabel>id</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          placeholder="id"
        />
      </FormControl>
      <FormControl id="firstName">
        <FormLabel>姓</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="張" />
      </FormControl>
      <FormControl id="lastName">
        <FormLabel>名</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder="哲峰" />
      </FormControl>
      <FormControl id="phoneNumber">
        <FormLabel>html_url</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          placeholder="https://github.com/zfong/webp.git"
        />
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel>Email Address</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="email"
          placeholder="B0929005@cgu.edu.tw"
        />
      </FormControl>
      <FormControl id="city">
        <FormLabel>location</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          placeholder="Taiwan"
        />
      </FormControl>
    </Grid>
  )
}

export default AccountSettings
