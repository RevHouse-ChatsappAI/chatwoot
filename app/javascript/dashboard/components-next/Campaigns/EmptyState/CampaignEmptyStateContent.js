export const ONGOING_CAMPAIGN_EMPTY_STATE_CONTENT = [
  {
    id: 1,
    title: 'Chatbot Assistance',
    inbox: {
      id: 2,
      name: 'PaperLayer Website',
      channel_type: 'Channel::WebWidget',
      phone_number: '',
    },
    sender: {
      id: 1,
      name: 'Alexa Rivera',
    },
    message: 'Hello! 👋 Need help with our chatbot features? Feel free to ask!',
    campaign_status: 'active',
    enabled: true,
    campaign_type: 'ongoing',
    trigger_rules: {
      url: 'https://www.chatwoot.com/features/chatbot/',
      time_on_page: 10,
    },
    trigger_only_during_business_hours: true,
    created_at: '2024-10-24T13:10:26.636Z',
    updated_at: '2024-10-24T13:10:26.636Z',
  },
  {
    id: 2,
    title: 'Pricing Information Support',
    inbox: {
      id: 2,
      name: 'PaperLayer Website',
      channel_type: 'Channel::WebWidget',
      phone_number: '',
    },
    sender: {
      id: 1,
      name: 'Jamie Lee',
    },
    message: 'Hello! 👋 Any questions on pricing? I’m here to help!',
    campaign_status: 'active',
    enabled: false,
    campaign_type: 'ongoing',
    trigger_rules: {
      url: 'https://www.chatwoot.com/pricings',
      time_on_page: 10,
    },
    trigger_only_during_business_hours: false,
    created_at: '2024-10-24T13:11:08.763Z',
    updated_at: '2024-10-24T13:11:08.763Z',
  },
  {
    id: 3,
    title: 'Product Setup Assistance',
    inbox: {
      id: 2,
      name: 'PaperLayer Website',
      channel_type: 'Channel::WebWidget',
      phone_number: '',
    },
    sender: {
      id: 1,
      name: 'Laburen',
    },
    message: 'Hi! Laburen here. Need help setting up? Let me know!',
    campaign_status: 'active',
    enabled: false,
    campaign_type: 'ongoing',
    trigger_rules: {
      url: 'https://{*.}?chatwoot.com/apps/account/*/settings/inboxes/new/',
      time_on_page: 10,
    },
    trigger_only_during_business_hours: false,
    created_at: '2024-10-24T13:11:44.285Z',
    updated_at: '2024-10-24T13:11:44.285Z',
  },
  {
    id: 4,
    title: 'General Assistance Campaign',
    inbox: {
      id: 2,
      name: 'PaperLayer Website',
      channel_type: 'Channel::WebWidget',
      phone_number: '',
    },
    sender: {
      id: 1,
      name: 'Chris Barlow',
    },
    message:
      'Hi there! 👋 I’m here for any questions you may have. Let’s chat!',
    campaign_status: 'active',
    enabled: true,
    campaign_type: 'ongoing',
    trigger_rules: {
      url: 'https://siv.com',
      time_on_page: 200,
    },
    trigger_only_during_business_hours: false,
    created_at: '2024-10-29T19:54:33.741Z',
    updated_at: '2024-10-29T19:56:26.296Z',
  },
];

export const ONE_OFF_CAMPAIGN_EMPTY_STATE_CONTENT = [
  {
    id: 1,
    title: 'Customer Feedback Request',
    inbox: {
      id: 6,
      name: 'PaperLayer Mobile',
      channel_type: 'Channel::Sms',
      phone_number: '+29818373149903',
      provider: 'default',
    },
    message:
      'Hello! Enjoying our product? Share your feedback on G2 and earn a $25 Amazon coupon: https://chwt.app/g2-review',
    campaign_status: 'active',
    enabled: true,
    campaign_type: 'one_off',
    scheduled_at: 1729775588,
    audience: [
      { id: 4, type: 'Label' },
      { id: 5, type: 'Label' },
      { id: 6, type: 'Label' },
    ],
    trigger_rules: {},
    trigger_only_during_business_hours: false,
    created_at: '2024-10-24T13:13:08.496Z',
    updated_at: '2024-10-24T13:15:38.698Z',
  },
  {
    id: 2,
    title: 'Welcome New Customer',
    inbox: {
      id: 6,
      name: 'PaperLayer Mobile',
      channel_type: 'Channel::Sms',
      phone_number: '+29818373149903',
      provider: 'default',
    },
    message: 'Welcome aboard! 🎉 Let us know if you have any questions.',
    campaign_status: 'completed',
    enabled: true,
    campaign_type: 'one_off',
    scheduled_at: 1729732500,
    audience: [
      { id: 1, type: 'Label' },
      { id: 6, type: 'Label' },
      { id: 5, type: 'Label' },
      { id: 2, type: 'Label' },
      { id: 4, type: 'Label' },
    ],
    trigger_rules: {},
    trigger_only_during_business_hours: false,
    created_at: '2024-10-24T13:14:00.168Z',
    updated_at: '2024-10-24T13:15:38.707Z',
  },
  {
    id: 3,
    title: 'New Business Welcome',
    inbox: {
      id: 6,
      name: 'PaperLayer Mobile',
      channel_type: 'Channel::Sms',
      phone_number: '+29818373149903',
      provider: 'default',
    },
    message: 'Hello! We’re excited to have your business with us!',
    campaign_status: 'active',
    enabled: true,
    campaign_type: 'one_off',
    scheduled_at: 1730368440,
    audience: [
      { id: 1, type: 'Label' },
      { id: 3, type: 'Label' },
      { id: 6, type: 'Label' },
      { id: 4, type: 'Label' },
      { id: 2, type: 'Label' },
      { id: 5, type: 'Label' },
    ],
    trigger_rules: {},
    trigger_only_during_business_hours: false,
    created_at: '2024-10-30T07:54:49.915Z',
    updated_at: '2024-10-30T07:54:49.915Z',
  },
  {
    id: 4,
    title: 'New Member Onboarding',
    inbox: {
      id: 6,
      name: 'PaperLayer Mobile',
      channel_type: 'Channel::Sms',
      phone_number: '+29818373149903',
      provider: 'default',
    },
    message: 'Welcome to the team! Reach out if you have questions.',
    campaign_status: 'completed',
    enabled: true,
    campaign_type: 'one_off',
    scheduled_at: 1730304840,
    audience: [
      { id: 1, type: 'Label' },
      { id: 3, type: 'Label' },
      { id: 6, type: 'Label' },
    ],
    trigger_rules: {},
    trigger_only_during_business_hours: false,
    created_at: '2024-10-29T16:14:10.374Z',
    updated_at: '2024-10-30T16:15:03.157Z',
  },
];
