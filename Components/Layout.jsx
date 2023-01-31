import React from "react";
import {
    Box,
    Text,
    Image,
    Input,
    Grid,
    GridItem,
    Button,
} from "@chakra-ui/react";

export default function Layout() {

    const [bill, setBill] = React.useState('');
    const [people, setPeople] = React.useState('');
    const [tip, setTip] = React.useState('');

    {/* set Tip Amount */ }
    function tipAmount() {
        if (people < 1) {
            return (bill / 100 * tip).toFixed(2); 
        }
        else {
            return ((bill / 100 * tip) / people).toFixed(2);
        }
    }
    

    {/* set Total */ }
    function setTotal() {
        return (bill / 100 * tip).toFixed(2);
    }

  return (
      <Box
          backgroundColor={'var(--light-grayish-cyan)'}
          width={'100%'}
          height={['933px', '933px', '100vh']}
          position='relative'
          display={'flex'}
          flexDirection='row'
          justifyContent={'center'}
      >
        {/* splitter Titel */}
          <Text
              width={['auto']}
              height={['auto']}
              position={['absolute']}
              top={['50px', '50px', '50px', '163px']}
              textTransform='uppercase'
              fontWeight={'700'}
              color='#3d6666'
              fontSize={'20px'}
              lineHeight={['23px']}
              letterSpacing={['5px']}
          >
              spli<br/>tter
          </Text>

          {/* Main app Box */}
          <Box
              width={['100%', '100%', '100%', '920px']}
              height={['789px', '798px', '100vh', '481px']}
              position={['absolute']}
              backgroundColor={'var(--white)'}
              top={['144px', '144px', '144px', '304px']}
              display={['flex']}
              flexDirection={['column']}
              alignItems={['center']}
              justifyContent={['space-between']}
              paddingTop={['20px']}
              paddingBottom={['20px']}
          >
              {/* Bill Box */}
              <Box
                  width={['311px']}
                  height={['78px']}
                  display={['flex']}
                  flexDirection={['column']}
                  justifyContent={['flex-end']}
              >
                  <Text
                      fontSize={['16px']}
                      color='#5E7A7D'
                      fontWeight={'700'}
                  >
                      Bill
                  </Text>
                  <Box
                      width={['100%']}
                      height={['48px']}
                      backgroundColor='var(--very-light-grayish-cyan)'
                      display={['flex']}
                      flexDirection={['row']}
                  >
                      <Box
                          width={['9.84px']}
                          height={['15.46px']}
                          position={'relative'}
                          top={'16.87px'}
                          left={['19.26px']}>
                          <Image src="/images/icon-dollar.svg" alt="" />
                      </Box>
                      <Box
                          height={['48px']}
                          width={['100%']}
                          display={['flex']}
                          flexDirection={['row-reverse']}
                          alignItems={['center']}
                          paddingRight={['19.26px']}
                      >
                          <Input
                              color={'var(--dark-grayish-cyan)'}
                              fontWeight={['700']}
                              placeholder='0'
                              variant={'unstyled'}
                              textAlign='right'
                              type={'number'}
                              value={bill}
                              onChange={(event) => setBill(event.target.value)}
                          />
                      </Box>
                      
                  </Box>
              </Box>

              {/* Select Tip Box */}
              <Box
                  width={['311px']}
                  height={['216px']}
                  display={['flex']}
                  flexDirection={['column']}
                  justifyContent={['space-between']}
              >
                  <Text fontSize={'16px'} fontWeight={['700']}>Select Tip %</Text>
                  <Box
                      width={'311px'}
                      height={['176px']}
                  >
                      <Grid templateColumns={'1fr 1fr'} gridColumnGap={'4'} gridRowGap={'4'}>
                          <GridItem width={['146.63px']} height={['48px']} backgroundColor='#00474B'>
                              <Button
                                  width={['146.63px']}
                                  height={['48px']}
                                  colorScheme='red'
                                  backgroundColor='#00474B'
                                  color={'white'}
                                  fontSize={'20px'}
                                  onClick={() => setTip(5)}
                              >
                                  5%
                              </Button>
                          </GridItem>
                          <GridItem width={['146.63px']} height={['48px']} backgroundColor='#00474B'>
                              <Button
                                  width={['146.63px']}
                                  height={['48px']}
                                  colorScheme='red'
                                  backgroundColor='#00474B'
                                  color={'white'}
                                  fontSize={'20px'}
                                  onClick={() => setTip(10)}
                              >
                                  10%
                              </Button>
                          </GridItem>
                          <GridItem width={['146.63px']} height={['48px']} backgroundColor='#26C2AE'>
                              <Button
                                  width={['146.63px']}
                                  height={['48px']}
                                  colorScheme='red'
                                  backgroundColor='#26C2AE'
                                  color={'#00474B'}
                                  fontSize={'20px'}
                                  onClick={() => setTip(15)}
                              >
                                  15%
                              </Button>
                          </GridItem>
                          <GridItem width={['146.63px']} height={['48px']} backgroundColor='#00474B'>
                              <Button
                                  width={['146.63px']}
                                  height={['48px']}
                                  colorScheme='red'
                                  backgroundColor='#00474B'
                                  color={'white'}
                                  fontSize={'20px'}
                                  onClick={() => setTip(25)}
                              >
                                  25%
                              </Button>
                          </GridItem>
                          <GridItem width={['146.63px']} height={['48px']} backgroundColor='#00474B'>
                              <Button
                                  width={['146.63px']}
                                  height={['48px']}
                                  colorScheme='red'
                                  backgroundColor='#00474B'
                                  color={'white'}
                                  fontSize={'20px'}
                                  onClick={() => setTip(50)}
                              >
                                  50%
                              </Button>
                          </GridItem>
                          <GridItem width={['146.63px']} height={['48px']} backgroundColor='#F3F9FA'>
                              <Input
                                  width={'100%'}
                                  height={'100%'}
                                  placeholder='Custom'
                                  color={'#547878'}
                                  fontSize='20px'
                                  fontWeight={'700'}
                                  type='number'
                                  textAlign={'right'}
                                  
                                  onChange={(event) => setTip(event.target.value)}
                              />
                          </GridItem>
                      </Grid>
                  </Box>
              </Box>

              {/* Number of People Box */}
              <Box
                  width={['311px']}
                  height={['78px']}
                  display={['flex']}
                  flexDirection={['column']}
                  justifyContent={['flex-end']}
              >
                  <Text
                      fontSize={['16px']}
                      color='#5E7A7D'
                      fontWeight={'700'}
                  >
                      Number of People
                  </Text>
                  <Box
                      width={['100%']}
                      height={['48px']}
                      backgroundColor='var(--very-light-grayish-cyan)'
                      display={['flex']}
                      flexDirection={['row']}
                  >
                      <Box
                          width={['9.84px']}
                          height={['15.46px']}
                          position={'relative'}
                          top={'16.87px'}
                          left={['19.26px']}>
                          <Image src="/images/icon-person.svg" alt="" />
                      </Box>
                      <Box
                          height={['48px']}
                          width={['100%']}
                          display={['flex']}
                          flexDirection={['row-reverse']}
                          alignItems={['center']}
                          paddingRight={['19.26px']}
                      >
                           <Input
                              color={'var(--dark-grayish-cyan)'}
                              fontWeight={['700']}
                              placeholder='1'
                              variant={'unstyled'}
                              textAlign='right'
                              type={'number'}
                              value={people}
                              onChange={(event) => setPeople(event.target.value)}
                          />
                      </Box>
                    </Box>
              </Box>

              {/* Display Box */}
              <Box
                  width={['327px']}
                  height={['257px']}
                  backgroundColor={['#00474B']}
                  borderRadius='15px'
                  display={'flex'}
                  flexDirection={['column']}
                  alignItems={['center']}
                  paddingTop={['30px']}
                  paddingBottom={['30px']}
                  justifyContent={['space-between']}
              >
                  <Box
                      width={['281px']}
                      height={['116px']}
                      display={'flex'}
                      flexDirection={['column']}
                      justifyContent={['space-between']}
                  >
                      {/* Box1 */}
                      <Box
                          width={['281px']}
                          height={['48px']}
                          display={'flex'}
                          flexDirection={['row']}
                      >
                          {/* Description */}
                          <Box
                              width={['100px']}
                              height={['44px']}
                              display={'flex'}
                              flexDirection={['column']}
                              justifyContent={'center'}
                          >
                              <Text fontSize={'12px'} fontWeight='700' color={'#ffffff'}>Tip Amount</Text>
                              <Text fontSize={'10px'} color='#7F9D9F'>/ person</Text>
                              
                          </Box>

                          {/* Tip Amount pro person */}
                          <Box
                              width={'100%'}
                              display={['flex']}
                              flexDirection={['row-reverse']}
                              alignItems={['center']}
                              color='#26C2AE'
                              fontSize={'28px'}
                              fontWeight='700'
                          >
                              {tipAmount()}
                          </Box>
                          
                      </Box>

                      {/* Box2 */}
                      <Box
                          width={['281px']}
                          height={['48px']}
                          display={'flex'}
                          flexDirection={['row']}
                      >
                          {/* Description */}
                          <Box
                              width={['98px']}
                              height={['44px']}
                              display={'flex'}
                              flexDirection={['column']}
                              justifyContent={'center'}
                          >
                              <Text fontSize={'12px'} fontWeight='700' color={'#ffffff'}>Total</Text>
                              <Text fontSize={'10px'} color='#7F9D9F'>/ person</Text>
                              
                          </Box>

                          {/* Total Amount */}
                          <Box
                              width={'100%'}
                              display={['flex']}
                              flexDirection={['row-reverse']}
                              alignItems={['center']}
                              color='#26C2AE'
                              fontSize={'28px'}
                              fontWeight='700'
                          >
                              {setTotal()}
                          </Box>
                          
                      </Box>
                      
                      
                  </Box>
                  <Button
                      width={['281px']}
                      height={['48px']}
                      backgroundColor={['#26C2AE']}
                      color='#00474B'
                      fontSize={['20px']}
                      onClick={() => {
                          setBill('');
                          setPeople('');
                          setTip('');
                      }}
                  >
                      Reset
                  </Button>

              </Box>

          </Box>
          
      </Box>
  )
}
