import TosEn from './tos/en'
import PPEn from './privacyPolicy/en'

export default {
  'common': {
    'next': 'Next',
    'skip': 'Skip',
    'finish': 'Finish',
    'continue': 'Continue',
    'save': 'Save',
    'search': 'Search',
    'deselectAll': 'Deselect All',
    'cancel': 'Cancel',
    'unknownError': 'Unknown Error',
    'unexpectedServerResposne': 'Unexpected Server Response',
    'cryptoError': 'Unexpected cryptography error',
    'secondsShort': 's',
    'ok': 'ok',
    'request': 'Request',
    'back': 'Back',
    'close': 'Close',
    'done': 'Done',
    'errorCreatingInbox': 'Error creating user inbox.',
  },
  'loginFlow': {
    'anonymityNotice': 'Nobody will see this until you allow it. Even us.',
    'intro': {
      'title1': 'Import your contacs anonymously.',
      'title2': 'See their buy & sell offers.',
      'title3': 'Request identity for the ones you like and trade.',
    },
    'start': {
      'subtitle': 'Welcome! Ready to get started?',
      'touLabel': 'I agree to',
      'termsOfUse': 'Terms of use',
    },
    'anonymizationNotice': {
      'title': 'Your identity will be anonymized',
      'text':
        'Nobody will see your real name and profile picture until you reveal it for particular trade. Even us. Let’s set up your true identity first.',
    },
    'name': {
      'prompt': 'What do your friends call you?',
      'placeholder': 'Full name or nickname',
      'nameValidationError':
        'Name should be at least 1 characters long and maximum 50 characters long',
    },
    'photo': {
      'title': 'Hey {{name}}! What do you look like?',
      'selectSource': 'Select the source of your image',
      'camera': 'Camera',
      'gallery': 'Gallery',
      'permissionsNotGranted': 'Permissions not granted.',
      'nothingSelected': 'No image was selected',
    },
    'anonymization': {
      'beforeTitle': 'This is your identity',
      'afterTitle': 'Identity anonymized!',
      'action': 'Anonymize',
      'afterDescription':
        'This is how other users will see you until you reveal your real identity.',
    },
    'phoneNumber': {
      'title': 'What’s your phone number?',
      'placeholder': 'Phone number',
      'text':
        'In order to connect you with the Vexl community, enter your phone number',
      'errors': {
        'invalidPhoneNumber':
          'Invalid phone number. Please try a different one',
        'previousCodeNotExpired':
          'Verification for this phone number is already in progress. Please wait until it expires',
      },
    },
    'verificationCode': {
      'title': 'We just sent you the code',
      'text': 'Enter it bellow to verify',
      'inputPlaceholder': 'Your verification code',
      'retryCountdown': 'Didn’t receive a code? Resend in',
      'retry': 'Didn’t receive a code? Tap to resend',
      'errors': {
        'userAlreadyExists': 'User with this phone number already exists',
        'challengeCouldNotBeGenerated':
          'Challenge could not be generated. Try again later',
        'verificationNotFound': 'Verification code wrong.',
        'UserNotFound': 'User not found. Try to resend the code.',
        'SignatureCouldNotBeGenerated':
          'Signature could not be generated. Try again later',
        'PublicKeyOrHashInvalid': 'Public key or hash invalid. Try again later',
      },
      'success': {
        'title': 'Phone verified.\nLet’s setup your profile.',
        'errorWhileParsingSessionForInternalState': 'Error while saving user',
      },
    },
    'importContacts': {
      'title': 'Let’s find your friends now!',
      'text':
        'Vexl is using your real-world social network - your friends and their friends. The more contacts you add, the more offers you’ll see.',
      'anonymityNotice': 'Nobody can see your contacts. Even us.',
      'action': 'Import contacts',
    },
    'permissions': {
      'title': 'Allow notification permissions',
      'text':
        'Enabling notifications lets you know when others accept your offers or when messages arrive. Vexl app can’t be used without this permission.',
      'action': 'Allow permissions',
    },
  },
  'postLoginFlow': {
    'contactsExplanation': {
      'title': 'Let’s find your friends now!',
      'text':
        'Vexl is using your real-world social network - your friends and their friends. The more contacts you add, the more offers you’ll see.',
      'anonymizationCaption': 'Nobody can see your contacts. Even us.',
    },
    'importContactsButton': 'Import contacts',
    'contactsList': {
      'deselectAll': 'Deselect all',
      'selectAll': 'Select all',
      'addContact': 'Add contact {{number}} manually',
      'inputPlaceholder': 'Search or Add number',
      'nothingFound': {
        'title': 'No contact found. ',
        'text':
          'To add phone number directly, type it into a search bar (with country code prefix).',
      },
      'toAddCustomContact':
        'To add phone number directly type it into a search bar (with country code)',
    },
    'allowNotifications': {
      'title': 'Allow notification permissions',
      'text':
        'Enabling notifications lets you know when others accept your offers or when messages arrive. Vexl app can’t be used without this permission.',
      'action': 'Allow permissions',
      'errors': {
        'permissionDenied':
          'Permissions not granted. You can allow them later in the system settings.',
        'unknownError': 'Unknown error while requesting permissions',
        'notAvailableOnEmulator': 'Notifications are not available on emulator',
      },
    },
  },
  'settings': {
    'yourReach': 'Your reach: {{number}} vexlers',
    'items': {
      'myOffers': 'My offers',
      'changeProfilePicture': 'Change profile picture',
      'editName': 'Edit name',
      'contactsImported': 'Contacts imported',
      'xFriends': '{{number}} friends',
      'setPin': 'Set PIN',
      'faceId': 'Face ID',
      'czechCrown': 'Czech crown',
      'allowScreenshots': 'Allow Screenshots',
      'allowScreenshotsDescription': 'Refuse users to snap the chat',
      'termsAndPrivacy': 'Terms and Privacy',
      'faqs': 'FAQs',
      'reportIssue': 'Report issue',
      'inAppLogs': 'In-app logs',
      'requestKnownData': 'Request known data',
      'followUsOn': 'Follow us on',
      'twitter': 'Twitter',
      'twitterUrl': 'https://twitter.com/vexl',
      'readMoreOn': 'Read more on',
      'medium': 'Medium',
      'mediumUrl': 'https://blog.vexl.it',
      'learnMoreOn': 'Learn more on',
      'website': 'Vexl.it',
      'websiteUrl': 'https://vexl.it',
      'deleteAccount': 'Delete account',
    },
    'noLogoutExplanation':
      "Can't find logout? There's no such thing.\nBut you can delete account.",
    'support':
      'If you like Vexl, support it’s improvement by sending some Bitcoins as donation!',
  },
  'offer': {
    'cashOnly': 'Cash only',
    'onlineOnly': 'Online only',
    'upTo': 'Up to',
    'forSeller': 'For seller',
    'forBuyer': 'For buyer',
    'bank': 'Bank',
    'revolut': 'Revolut',
    'isSelling': 'is selling',
    'isBuying': 'is buying',
    'directFriend': 'Direct friend',
    'friendOfFriend': 'Friend of friend',
    'buy': 'Buy',
    'sell': 'Sell',
    'filterOffers': 'Filter offers',
    'myOffers': 'My offers',
  },
  'termsOfUse': {
    'termsOfUse': 'Terms of Use',
    'privacyPolicy': 'Privacy Policy',
    'dontHaveTime':
      'Don’t have a time to read all this? Take' +
      ' a look on Frequently Asked Questions.',
    'termsOfUseText': TosEn,
    'privacyPolicyText': PPEn,
  },
  'faqs': {
    'faqs': 'Frequently Asked Questions',
    'whatIsVexl': 'What is Vexl?',
    'vexlIsPlatform':
      'Vexl is a platform where you can trade Bitcoin within your real world social network - your friends and friends of their friends - while staying completely anonymous - if you wish.',
    'whoCanSeeMyContacts': 'Who can see my contacts?',
    'peopleWhomYouAllowToSee':
      "People whom you allow to see your identity can see the friends you have in common. That's it.",
    'howCanIRemainAnonymous':
      'How can I remain anonymous and still participate in Vexl? ',
    'byDefaultYouParticipateInTheNetwork':
      'By default, you participate in the network under your Vexl name and Vexl avatar that were given to you during the registration. You can only reveal your identity per a particular trade in our secure, end to end encrypted chat.',
    'howCanIMakeSure':
      'How can I make sure that the person I am talking to is the person I want to talk to?',
    'oneChallenge':
      'One challenge with truly anonymous communications systems like Vexl is that sometimes you do need to verify the identity of the person you’re talking to! In cases like these, it’s best to use a secure secondary channel of communication to confirm with the other person that you’re both who you say you are.',
    'howCanIEnsure':
      'How can I ensure that my communication and trades are private and encrypted? ',
    'vexlIsOpensource':
      'Vexl is open source - anyone can look for any backdoor or malicious intentions. Also, here you can look at the report from an independent Security Audit .',
    'howCanYouEnsure': 'How can you ensure that my data is protected?',
    'vexlIsDesigned':
      'Vexl is designed to never collect or store any sensitive information. Vexl messages and other content cannot be accessed by us or other third parties because they are always end-to-end encrypted, private, and secure. Our Terms of Service and Privacy Policy are available below.',
    'howDoIContactVexl': 'How do I contact Vexl?',
    'youCanAlwaysReachOutToUs':
      'You can always reach out to us via email: support@vexl.it. For a private comms, you can also send us an e2ee mail.  \n' +
      '\n' +
      'Or you can meet us during your next P2P trade! 😻',
  },
  'createOffer': {
    'myNewOffer': 'My new offer',
    'iWantTo': 'I want to',
    'sellBitcoin': 'Sell Bitcoin',
    'buyBitcoin': 'Buy Bitcoin',
    'currency': 'Currency',
    'czk': 'CZK',
    'eur': 'EUR',
    'usd': 'USD',
    'amountOfTransaction': {
      'amountOfTransaction': 'Amount of transaction',
      'eurSymbol': '€',
      'dollarSymbol': '$',
      'czkSymbol': 'Kč',
    },
    'premiumOrDiscount': {
      'premiumOrDiscount': 'Premium or discount',
      'youBuyForTheActualMarketPrice':
        'You buy for the actual market price. Play with the slider to sell faster or earn more.',
      'theOptimalPositionForMostPeople':
        'The optimal position for most people. You buy slightly faster, but a bit overpriced',
      'youBuyReallyFast':
        'You buy really fast, but so much above the market price',
      'youBuyPrettyCheap':
        'You buy pretty cheap, but it can take slightly longer to find a seller',
      'youBuyVeryCheaply':
        'You buy very cheaply, but it can take a while to find seller',
      'buyFaster': 'Buy faster',
      'buyCheaply': 'Buy cheaply',
      'youSellForTheActualMarketPrice':
        'You sell for the actual market price. Play with the slider to sell faster or earn more.',
      'youEarnBitMore': 'You earn a bit more, but it can take slightly longer.',
      'youWantToEarnFortune':
        'You want to earn a fortune, but it can take years to find a seller.',
      'youSellSlightlyFaster':
        'You sell slightly faster, but a bit below market price',
      'youSellMuchFaster': 'You sell much faster, but far below market price',
      'youBuyBtcFor': 'You buy BTC for',
      'youSellBtcFor': 'You sell BTC for',
      'marketPrice': 'market price',
      'sellFaster': 'Sell faster',
      'earnMore': 'Earn more',
      'premiumOrDiscountExplained': 'Premium or discount explained',
      'influenceImpactOfYourSellOffer':
        'Influence the impact of your offer. Sell faster by adding a discount, or earn more by adding a premium to the Bitcoin market price.',
      'influenceImpactOfYourBuyOffer':
        'Influence the impact of your offer. Buy cheaply by adding a discount, or buy faster by adding a premium to the Bitcoin market price.',
      'playWithItAndSee':
        'Play with it and see how it affects the interest of others.',
    },
    'buyCheaperByUsingDiscount':
      'Buy cheaper by using discount or buy faster by adding a premium to the bitcoin market price',
    'sellFasterWithDiscount':
      'Sell faster with a discount or earn more by adding a premium to the bitcoin market price.',
    'location': {
      'location': 'Location',
      'meetingInPerson':
        'Meeting in person is safer. What to watch out for online?',
      'checkItOut': 'Check it out',
      'addCityOrDistrict': 'Add city, or district',
      'whatToWatchOutForOnline': 'What to watch out for online?',
      'moneySentByRandomPerson':
        'Money sent by a random person can be of criminal origin and traceable.',
      'neverSendCrypto': 'Never send cryptocurrency before receiving payment.',
      'alwaysVerifyTheName':
        'Always verify the name of the account holder you received the payment from with the declared identity of the counterparty.',
      'forwardTheAddress':
        'Forward the address in a secure manner and be sure to verify it through another secure channel.',
    },
    'inPerson': 'In person',
    'online': 'Online',
    'paymentMethod': {
      'paymentMethod': 'Payment method',
      'cash': 'Cash',
      'bank': 'Bank',
      'revolut': 'Revolut',
    },
    'network': {
      'network': 'Network',
      'lightning': 'Lightning',
      'theBestOption':
        'The best option for really small amounts. Usually much faster.',
      'onChain': 'On chain',
      'theBestFor':
        'The best for fairly huge amounts. It takes time sometimes.',
    },
    'description': {
      'description': 'Description',
      'writeWhyPeopleShouldTake': 'Write why people should take your offer.',
    },
    'friendLevel': {
      'friendLevel': 'Friend level',
      'firstDegree': '1st degree',
      'secondDegree': '2nd degree',
      'reachVexlers': 'Reach {{count}} vexlers',
    },
    'publishOffer': 'Publish offer',
    'gotIt': 'Got it',
    'errorCreatingOffer': 'Error while creating offer',
    'errorSearchingForAvailableLocation':
      'Error when searching for available locations',
    'offerEncryption': {
      'encryptingYourOffer': 'Encrypting your offer ...',
      'dontShutDownTheApp':
        'Don’t shut down the app while encrypting. It can take several minutes.',
      'forVexlers': 'for {{count}} vexlers',
      'doneOfferPoster': 'Done! Offer posted.',
      'yourFriendsAndFriendsOfFriends':
        'Your friends and friends of their friends can now see your offer.',
      'anonymouslyDeliveredToVexlers':
        'Anonymously delivered to {{count}} vexlers',
    },
    'errorLocationNotFilled': 'Please fill in offer location',
    'errorDescriptionNotFilled': 'Please fill in offer description',
  },
  'notifications': {
    'permissionsNotGranted': {
      title: 'Permissions for notifications were not granted',
      message: 'You can enable them in the settings',
      openSettings: 'Open settings',
    },
  },
}
