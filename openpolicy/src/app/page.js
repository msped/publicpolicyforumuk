import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import CheckIcon from '@mui/icons-material/Check';
import GroupsIcon from '@mui/icons-material/Groups';

export const metadata = {
  title: "OpenPolicy | Design, build, and implement legislation and policy to see it's outcomes, together.",
  description: "Craft effective policies and shape the future with our cutting-edge \
  platform where you can design, collaborate, and refine legislation. Join a community \
  dedicated to creating impactful change.",
};

const plans = [
  {
    title: "FREE",
    description: " A free plan for users to get started with designing legislation and policy.",
    price: "0",
    features: [
      "Access to basic design tools",
      "Unlimited number of legislation",
      "Community support"
    ],
    buttonText: "Continue with Free",
    buttonColor: "pastel"
  },
  {
    title: "BASIC",
    description: "A plan for users who need more advanced features and support.",
    price: "5",
    features: [
      "All features of FREE plan",
      "Access to advanced design tools",
      "Priority support",
    ],
    buttonText: "Try the Basic plan",
    buttonColor: "primary"
  },
  {
    title: "PRO",
    description: "A premium plan for power users and organizations requiring extensive features and support.",
    price: "20",
    features: [
      "All features of BASIC plan",
      "Access to all design tools and features",
      "Built for teams & enterprises"
    ],
    buttonText: "Try the PRO plan",
    buttonColor: "primary"
  },
]

const features = [
  {
    title: 'Intuitive Policy Builder',
    description: 'Our intuitive policy builder empowers users to easily draft legislation and policy documents using a user-friendly interface.'
  },
  {
    title: 'Collaborative Editing',
    description: 'Foster collaboration among team members and stakeholders with our collaborative editing feature.'
  },
  {
    title: 'Expand on the ideas of others',
    description: 'Either make the changes in an open source contribution, or fork the policy and expand further.'
  },
  {
    title: 'Version control',
    description: 'Maintain a clear audit trail of policy revisions and iterations with our version control feature.'
  }
]

export default function Home() {
  return (
    <Container maxWidth="md">
      {/* Hero */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '75vh',
          color: 'white',
          textAlign: 'center',
          p: 4
        }}
      >
        <Typography 
        variant="h2" 
        component="h1" 
        gutterBottom
        fontSize='44px'
        fontWeight={700}
        >
          Design Legislation and Policy
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button 
          variant="contained" 
          color='primary'
          sx={{ 
            backgroundColor: "#C9B8F9",
            color: 'primary',
            ':hover': {
              bgcolor: '#8862f7',
              color: '#fff'
            }
          }}>
            Get Started
          </Button>
          <Button variant="outlined" sx={{ color: 'white' }}>
            Learn More →
          </Button>
        </Stack>
      </Box>

      {/* Features */}
      <Box p={3} mb={4}>
        <Typography align='center' fontWeight={600} color='#fff'>
          FEATURES
        </Typography>
        <Typography
          variant='h4'
          align='center'
          color='#fff'
          fontWeight={600}
          gutterBottom
        >
          Design Legislation and Policy Together
        </Typography>
        <Grid container spacing={2}>
          {features.map((feature) => (
          <Grid item xs={12} md={6} key={feature.title}>
            <Card>
              <CardContent sx={{ 
                display: 'flex',
                backgroundColor: '#202134',
                color: '#fff',
                alignItems: 'flex-start',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                maxHeight: '150px'
              }}>
                <Box minWidth='35px'>
                  <GroupsIcon />
                </Box>
                <Box>
                  <Typography fontSize='20px' fontWeight={600}>
                    {feature.title}
                  </Typography>
                  <Typography>
                    {feature.description}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>))}
        </Grid>
      </Box>

      {/* Pricing */}
      <Box p={2}>
        <Typography align='center' fontWeight={600} color='#fff'>
          PRICING
        </Typography>
        <Typography
          variant="h4"
          align="center"
          color='#fff'
          fontWeight={600}
          gutterBottom
        >
          Choose the Right Plan for You
        </Typography>
        <Grid 
          container
          spacing={2}
          alignItems={{ xs: 'center', md: 'normal' }}
          justifyContent={{ xs: 'center', md: 'normal' }}
          direction={{ xs: 'column', md: 'row' }}
        >
          {plans.map((plan) => (
            <Grid item xs={12} md={4} key={plan.title}>
              <Card sx={{ 
                backgroundColor: '#F1DDD9',
                maxWidth: '500px',
              }}>
                <CardContent>
                  <Typography variant="h5" fontSize='20px' component="h2">
                    {plan.title}
                  </Typography>
                  <Typography mt={2}>
                    {plan.description}
                  </Typography>
                  <Typography variant="h6" sx={{ display: 'flex', alignItems: 'baseline' }}>
                    £<Typography fontSize='4rem' fontWeight='700'>{plan.price}</Typography>/month
                  </Typography>
                  <List>
                    {plan.features.map((feature, index) => (
                      <ListItem key={index}>
                        <ListItemIcon sx={{ minWidth: '35px' }}>
                          <CheckIcon />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant="contained" color={plan.buttonColor}>
                    {plan.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
