
describe('Render home page - signed out', () => {


  beforeEach(() => {
    cy.visit('/', {failOnStatusCode: false});
    cy.session("signed-out", () => {
      cy.signOut();
    });
  })

  it('renders without crashing', () => {
    cy.get('header').should('exist');
  });

  // Desktop tests
  it(' menu visible - desktop', () => {
    cy.viewport(1200, 660);
    const menuContents = [
      "Design",
      "Collaborate",
      "Integrate",
      "Support"
    ];

    menuContents.forEach((item) => {
      cy.get('header').contains(item).should('be.visible');
    });
  });

  // Mobile Tests
  it('toggles mobile menu on MenuIcon click - mobile', () => {
    cy.viewport(600, 660); // Set viewport to mobile dimensions
    cy.get('[data-testid="MenuIcon"]').click();
    cy.contains('Collaborate').should('be.visible');
  });

  it('closes mobile menu when clicking away', () => {
    cy.viewport(600, 660);
    cy.get('[data-testid="MenuIcon"]').click();
    cy.get('h1').click();
    cy.contains('Collaborate').should('not.be.visible');
  });

  it('shows login and register buttons when not logged in - desktop', () => {
    cy.viewport(1200, 660);
    cy.get('button').contains('Login').should('be.visible');
    cy.get('button').contains('Register').should('be.visible');
  });

  it('shows login and regsiter buttons when not logged in - mobile', () => {
    cy.viewport(600, 660);
    cy.get('[data-testid="MenuIcon"]').click();
    cy.get('button').contains('Login').should('be.visible');
    cy.get('button').contains('Register').should('be.visible');
  })
})

describe('render home page - signed in', () =>{

  before(() => {
    cy.session('signed-in', () => {
      cy.signIn();
    })
  })

  beforeEach(() => {
    cy.visit('/', {failOnStatusCode: false});
  })

  it('shows avatar button when logged in - desktop', async () => {
    cy.viewport(1200, 660);
    await cy.get('*[class^="cl-avatarBox"]').should('be.visible');
  });

  it('shows log out button when logged in - desktop', async () => {
    cy.viewport(1200, 660);
    cy.get('[aria-label="Open user button"]', {timeout: 4000}).click()
    cy.contains('Sign out').should('be.visible')
  });

  it('shows avatar button when logged in - mobile', async () => {
    cy.viewport(600, 660);
    cy.get('*[class^="cl-avatarBox"]', {timeout: 4000}).should('be.visible');
  });

  it('shows log out button when logged in - mobile', async () => {
    cy.viewport(600, 660);
    cy.get('[aria-label="Open user button"]', {timeout: 4000}).click()
    cy.get('button').contains('Sign out').should('be.visible')
  });
})

describe('Footer - mobile & desktop', () => {
  beforeEach(() => {
    cy.visit('/', {failOnStatusCode: false});
  });

  it('renders the footer - desktop', () => {
    cy.viewport(1200, 660);
    const menuContents = [
      "Design",
      "Collaborate",
      "Integrate",
      "Support"
    ];

    menuContents.forEach((item) => {
      cy.get('footer').contains(item).should('be.visible');
    });
  });

  it('renders the footer - mobile', () => {
    cy.viewport(600, 660);
    const menuContents = [
      "Design",
      "Collaborate",
      "Integrate",
      "Support"
    ];

    menuContents.forEach((item) => {
      cy.get('footer').contains(item).should('be.visible');
    });
  });

  it('renders copyright - desktop', () => {
    cy.viewport(1200, 660);
    cy.contains('Copyright ©').should('be.visible');
  });

  it('renders copyright - mobile', () => {
    cy.viewport(600, 660);
    cy.contains('Copyright ©').should('be.visible');
  });

  it('renders social links - desktop', () => {
    cy.viewport(1200, 660);
    const socialLinks = [
      'TwitterIcon',
      'FacebookIcon',
      'InstagramIcon'
    ]

    socialLinks.forEach((socialNetwork) => {
      cy.get(`[data-testid="${socialNetwork}"]`).should('be.visible');
    });
  });

  it('renders social links - mobile', () => {
    cy.viewport(600, 660);
    const socialLinks = [
      'TwitterIcon',
      'FacebookIcon',
      'InstagramIcon'
    ]

    socialLinks.forEach((socialNetwork) => {
      cy.get('footer').get(`[data-testid="${socialNetwork}"]`).should('be.visible');
    });
  });
})

describe('main page content', () => {
  before(() => {
    cy.visit('/', {failOnStatusCode: false});
  })

  it('renders the main hero', () => {
    cy.get('div').contains('Design Legislation and Policy').parent().within(() => {
      cy.contains('Design Legislation and Policy').should('be.visible');
      cy.get('button').contains('Get Started').should('be.visible');
      cy.get('button').contains('Learn More').should('be.visible');
    })
  })

  it('renders the features content', () => {
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

    cy.get('p').contains('FEATURES').parent().within(() => {
      features.forEach((feature) => {
        cy.contains(feature.title).should('be.visible');
        cy.contains(feature.description).should('be.visible');
      })
    })
  
  })

  it('renders the pricing plans', () => {
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
      },
    ]

    cy.get('p').contains('PRICING').parent().within(() => {
      plans.forEach((plan) => {
        cy.contains(plan.title).should('be.visible');
        cy.contains(plan.description).should('be.visible');
        cy.contains(`£${plan.price}`).should('be.visible');
        plan.features.forEach((feature) => {
          cy.contains(feature).should('be.visible');
        })
        cy.contains('button', plan.buttonText)
      })
    })

  })
})