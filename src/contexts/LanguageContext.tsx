import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "English" | "Hindi" | "Marathi" | "Telugu" | "Tamil" | "Bengali";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations: Record<Language, Record<string, string>> = {
  English: {
    // Navigation
    "nav.home": "Home",
    "nav.chatbot": "Try Chatbot",
    "nav.features": "Features",
    "nav.business": "Business",
    "nav.research": "Research",
    "nav.about": "About",
    "nav.startAssessment": "Start Assessment",
    
    // Common
    "common.learnMore": "Learn More",
    "common.getStarted": "Get Started",
    "common.backToOptions": "← Back to Options",
    "common.signIn": "Sign in to save your results",
    "common.recommended": "Recommended",
    "common.selfHelp": "Self-Help",
    
    // Chatbot
    "chatbot.title": "Mental Health Assessment",
    "chatbot.progress": "Progress",
    "chatbot.complete": "Complete",
    "chatbot.question": "Question",
    "chatbot.of": "of",
    "chatbot.greeting": "Hi! I'm here to help you understand how you've been feeling. This is a brief mental health check-in using clinically validated PHQ-9 and GAD-7 assessments. Would you like to start?",
    "chatbot.startPrompt": "Please type 'yes' or 'start' to begin the assessment, or ask me any questions about the process.",
    "chatbot.assessmentComplete": "Assessment Complete",
    "chatbot.nextSteps": "What would you like to do next?",
    "chatbot.connectExpert": "Connect with a Medical Expert",
    "chatbot.connectExpertDesc": "Speak with a licensed mental health professional for personalized guidance and support",
    "chatbot.wellnessExercises": "Try Wellness Exercises",
    "chatbot.wellnessExercisesDesc": "Simple attention-building and relaxation techniques to improve your mental wellbeing",
    "chatbot.downloadReport": "Download Report (PDF)",
    "chatbot.analyzing": "Thank you for completing the assessment. I'm analyzing your responses using our hybrid scoring model...",
    "chatbot.privacyNotice": "Your responses are private and encrypted. This is not a diagnosis.",
    
    // Risk Levels
    "risk.low": "Low Risk",
    "risk.moderate": "Moderate Risk",
    "risk.high": "High Risk",
    "risk.lowDesc": "Your responses indicate minimal symptoms. This is a positive sign, but remember that mental health is an ongoing journey.",
    "risk.moderateDesc": "Your responses suggest you may be experiencing symptoms consistent with mild to moderate depression or generalized anxiety disorder (GAD). These are common and manageable conditions with the right support and techniques.",
    "risk.highDesc": "Your responses indicate significant distress. You may be experiencing symptoms of major depressive disorder or severe anxiety. We strongly recommend speaking with a mental health professional as soon as possible.",
    
    // Expert Types
    "expert.psychiatrist": "Psychiatrist",
    "expert.psychiatristDesc": "Medical doctor specializing in mental health",
    "expert.psychologist": "Psychologist",
    "expert.psychologistDesc": "Therapy and counseling specialist",
    "expert.counselor": "Counselor",
    "expert.counselorDesc": "Supportive guidance and coping strategies",
    "expert.viewDoctors": "View Doctors →",
    "expert.viewExperts": "View Experts →",
    "expert.viewCounselors": "View Counselors →",
    
    // Footer
    "footer.tagline": "Making mental health support accessible to everyone in India.",
    "footer.quickLinks": "Quick Links",
    "footer.resources": "Resources",
    "footer.contact": "Contact",
    "footer.crisisSupport": "Crisis Support",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.termsOfService": "Terms of Service",
    "footer.rights": "All rights reserved.",
  },
  Hindi: {
    // Navigation
    "nav.home": "होम",
    "nav.chatbot": "चैटबॉट आज़माएं",
    "nav.features": "विशेषताएं",
    "nav.business": "व्यापार",
    "nav.research": "अनुसंधान",
    "nav.about": "हमारे बारे में",
    "nav.startAssessment": "मूल्यांकन शुरू करें",
    
    // Common
    "common.learnMore": "और जानें",
    "common.getStarted": "शुरू करें",
    "common.backToOptions": "← विकल्पों पर वापस जाएं",
    "common.signIn": "अपने परिणाम सहेजने के लिए साइन इन करें",
    "common.recommended": "अनुशंसित",
    "common.selfHelp": "स्व-सहायता",
    
    // Chatbot
    "chatbot.title": "मानसिक स्वास्थ्य मूल्यांकन",
    "chatbot.progress": "प्रगति",
    "chatbot.complete": "पूर्ण",
    "chatbot.question": "प्रश्न",
    "chatbot.of": "का",
    "chatbot.greeting": "नमस्ते! मैं यहां आपकी भावनाओं को समझने में मदद करने के लिए हूं। यह PHQ-9 और GAD-7 मूल्यांकन का उपयोग करके एक संक्षिप्त मानसिक स्वास्थ्य जांच है। क्या आप शुरू करना चाहेंगे?",
    "chatbot.startPrompt": "मूल्यांकन शुरू करने के लिए 'हां' या 'शुरू' टाइप करें।",
    "chatbot.assessmentComplete": "मूल्यांकन पूर्ण",
    "chatbot.nextSteps": "आगे क्या करना चाहेंगे?",
    "chatbot.connectExpert": "चिकित्सा विशेषज्ञ से संपर्क करें",
    "chatbot.connectExpertDesc": "व्यक्तिगत मार्गदर्शन के लिए लाइसेंस प्राप्त मानसिक स्वास्थ्य पेशेवर से बात करें",
    "chatbot.wellnessExercises": "वेलनेस व्यायाम आज़माएं",
    "chatbot.wellnessExercisesDesc": "मानसिक स्वास्थ्य में सुधार के लिए सरल तकनीकें",
    "chatbot.downloadReport": "रिपोर्ट डाउनलोड करें (PDF)",
    "chatbot.analyzing": "मूल्यांकन पूरा करने के लिए धन्यवाद। मैं आपकी प्रतिक्रियाओं का विश्लेषण कर रहा हूं...",
    "chatbot.privacyNotice": "आपकी प्रतिक्रियाएं निजी और एन्क्रिप्टेड हैं। यह निदान नहीं है।",
    
    // Risk Levels
    "risk.low": "कम जोखिम",
    "risk.moderate": "मध्यम जोखिम",
    "risk.high": "उच्च जोखिम",
    "risk.lowDesc": "आपकी प्रतिक्रियाएं न्यूनतम लक्षण दर्शाती हैं। यह एक सकारात्मक संकेत है।",
    "risk.moderateDesc": "आपकी प्रतिक्रियाएं हल्के से मध्यम अवसाद या सामान्य चिंता विकार के लक्षण सुझाती हैं। ये सही समर्थन के साथ प्रबंधनीय स्थितियां हैं।",
    "risk.highDesc": "आपकी प्रतिक्रियाएं महत्वपूर्ण संकट दर्शाती हैं। हम जल्द से जल्द मानसिक स्वास्थ्य पेशेवर से बात करने की सलाह देते हैं।",
    
    // Expert Types
    "expert.psychiatrist": "मनोचिकित्सक",
    "expert.psychiatristDesc": "मानसिक स्वास्थ्य में विशेषज्ञ चिकित्सक",
    "expert.psychologist": "मनोवैज्ञानिक",
    "expert.psychologistDesc": "थेरेपी और परामर्श विशेषज्ञ",
    "expert.counselor": "परामर्शदाता",
    "expert.counselorDesc": "सहायक मार्गदर्शन और रणनीतियां",
    "expert.viewDoctors": "डॉक्टर देखें →",
    "expert.viewExperts": "विशेषज्ञ देखें →",
    "expert.viewCounselors": "परामर्शदाता देखें →",
    
    // Footer
    "footer.tagline": "भारत में सभी के लिए मानसिक स्वास्थ्य सहायता सुलभ बनाना।",
    "footer.quickLinks": "त्वरित लिंक",
    "footer.resources": "संसाधन",
    "footer.contact": "संपर्क",
    "footer.crisisSupport": "संकट सहायता",
    "footer.privacyPolicy": "गोपनीयता नीति",
    "footer.termsOfService": "सेवा की शर्तें",
    "footer.rights": "सर्वाधिकार सुरक्षित।",
  },
  Marathi: {
    // Navigation
    "nav.home": "मुख्यपृष्ठ",
    "nav.chatbot": "चॅटबॉट वापरा",
    "nav.features": "वैशिष्ट्ये",
    "nav.business": "व्यवसाय",
    "nav.research": "संशोधन",
    "nav.about": "आमच्याबद्दल",
    "nav.startAssessment": "मूल्यांकन सुरू करा",
    
    // Common
    "common.learnMore": "अधिक जाणून घ्या",
    "common.getStarted": "सुरू करा",
    "common.backToOptions": "← पर्यायांकडे परत",
    "common.signIn": "तुमचे निकाल जतन करण्यासाठी साइन इन करा",
    "common.recommended": "शिफारस केलेले",
    "common.selfHelp": "स्व-मदत",
    
    // Chatbot
    "chatbot.title": "मानसिक आरोग्य मूल्यांकन",
    "chatbot.progress": "प्रगती",
    "chatbot.complete": "पूर्ण",
    "chatbot.question": "प्रश्न",
    "chatbot.of": "पैकी",
    "chatbot.greeting": "नमस्कार! तुम्हाला कसे वाटत आहे हे समजून घेण्यात मी मदत करण्यासाठी येथे आहे. PHQ-9 आणि GAD-7 मूल्यांकन वापरून ही एक संक्षिप्त मानसिक आरोग्य तपासणी आहे. तुम्हाला सुरू करायचे आहे का?",
    "chatbot.startPrompt": "मूल्यांकन सुरू करण्यासाठी 'होय' किंवा 'सुरू' टाइप करा।",
    "chatbot.assessmentComplete": "मूल्यांकन पूर्ण",
    "chatbot.nextSteps": "पुढे काय करायला आवडेल?",
    "chatbot.connectExpert": "वैद्यकीय तज्ञाशी संपर्क साधा",
    "chatbot.connectExpertDesc": "वैयक्तिक मार्गदर्शनासाठी परवानाधारक मानसिक आरोग्य व्यावसायिकांशी बोला",
    "chatbot.wellnessExercises": "वेलनेस व्यायाम करून पहा",
    "chatbot.wellnessExercisesDesc": "मानसिक आरोग्य सुधारण्यासाठी साध्या तंत्रे",
    "chatbot.downloadReport": "अहवाल डाउनलोड करा (PDF)",
    "chatbot.analyzing": "मूल्यांकन पूर्ण केल्याबद्दल धन्यवाद. मी तुमच्या प्रतिसादांचे विश्लेषण करत आहे...",
    "chatbot.privacyNotice": "तुमचे प्रतिसाद खाजगी आणि एन्क्रिप्टेड आहेत। हे निदान नाही।",
    
    // Risk Levels
    "risk.low": "कमी धोका",
    "risk.moderate": "मध्यम धोका",
    "risk.high": "उच्च धोका",
    "risk.lowDesc": "तुमचे प्रतिसाद किमान लक्षणे दर्शवतात। हे एक सकारात्मक चिन्ह आहे।",
    "risk.moderateDesc": "तुमचे प्रतिसाद सौम्य ते मध्यम नैराश्य किंवा सामान्य चिंता विकाराची लक्षणे सुचवतात।",
    "risk.highDesc": "तुमचे प्रतिसाद महत्त्वपूर्ण त्रास दर्शवतात। आम्ही लवकरात लवकर मानसिक आरोग्य व्यावसायिकांशी बोलण्याची शिफारस करतो।",
    
    // Expert Types
    "expert.psychiatrist": "मनोचिकित्सक",
    "expert.psychiatristDesc": "मानसिक आरोग्यात तज्ञ डॉक्टर",
    "expert.psychologist": "मानसशास्त्रज्ञ",
    "expert.psychologistDesc": "थेरपी आणि समुपदेशन तज्ञ",
    "expert.counselor": "समुपदेशक",
    "expert.counselorDesc": "सहाय्यक मार्गदर्शन आणि धोरणे",
    "expert.viewDoctors": "डॉक्टर पहा →",
    "expert.viewExperts": "तज्ञ पहा →",
    "expert.viewCounselors": "समुपदेशक पहा →",
    
    // Footer
    "footer.tagline": "भारतातील सर्वांसाठी मानसिक आरोग्य समर्थन सुलभ करणे।",
    "footer.quickLinks": "जलद दुवे",
    "footer.resources": "संसाधने",
    "footer.contact": "संपर्क",
    "footer.crisisSupport": "संकट समर्थन",
    "footer.privacyPolicy": "गोपनीयता धोरण",
    "footer.termsOfService": "सेवेच्या अटी",
    "footer.rights": "सर्व हक्क राखीव।",
  },
  Telugu: {
    // Navigation
    "nav.home": "హోమ్",
    "nav.chatbot": "చాట్‌బాట్ ప్రయత్నించండి",
    "nav.features": "ఫీచర్లు",
    "nav.business": "వ్యాపారం",
    "nav.research": "పరిశోధన",
    "nav.about": "మా గురించి",
    "nav.startAssessment": "అంచనా ప్రారంభించండి",
    
    // Common
    "common.learnMore": "మరింత తెలుసుకోండి",
    "common.getStarted": "ప్రారంభించండి",
    "common.backToOptions": "← ఎంపికలకు తిరిగి వెళ్ళండి",
    "common.signIn": "మీ ఫలితాలను సేవ్ చేయడానికి సైన్ ఇన్ చేయండి",
    "common.recommended": "సిఫార్సు చేయబడింది",
    "common.selfHelp": "స్వయం సహాయం",
    
    // Chatbot
    "chatbot.title": "మానసిక ఆరోగ్య అంచనా",
    "chatbot.progress": "పురోగతి",
    "chatbot.complete": "పూర్తయింది",
    "chatbot.question": "ప్రశ్న",
    "chatbot.of": "లో",
    "chatbot.greeting": "హాయ్! మీరు ఎలా అనుభూతి చెందుతున్నారో అర్థం చేసుకోవడంలో సహాయపడటానికి నేను ఇక్కడ ఉన్నాను. PHQ-9 మరియు GAD-7 అంచనాలను ఉపయోగించి ఇది క్లుప్త మానసిక ఆరోగ్య తనిఖీ. మీరు ప్రారంభించాలనుకుంటున్నారా?",
    "chatbot.startPrompt": "అంచనా ప్రారంభించడానికి 'అవును' లేదా 'ప్రారంభించు' టైప్ చేయండి।",
    "chatbot.assessmentComplete": "అంచనా పూర్తయింది",
    "chatbot.nextSteps": "తర్వాత ఏమి చేయాలనుకుంటున్నారు?",
    "chatbot.connectExpert": "వైద్య నిపుణుడితో కనెక్ట్ అవ్వండి",
    "chatbot.connectExpertDesc": "వ్యక్తిగత మార్గదర్శకత్వం కోసం లైసెన్స్ పొందిన మానసిక ఆరోగ్య నిపుణుడితో మాట్లాడండి",
    "chatbot.wellnessExercises": "వెల్‌నెస్ వ్యాయామాలు ప్రయత్నించండి",
    "chatbot.wellnessExercisesDesc": "మానసిక ఆరోగ్యాన్ని మెరుగుపరచడానికి సాధారణ టెక్నిక్‌లు",
    "chatbot.downloadReport": "నివేదిక డౌన్‌లోడ్ చేయండి (PDF)",
    "chatbot.analyzing": "అంచనా పూర్తి చేసినందుకు ధన్యవాదాలు. నేను మీ ప్రతిస్పందనలను విశ్లేషిస్తున్నాను...",
    "chatbot.privacyNotice": "మీ ప్రతిస్పందనలు ప్రైవేట్ మరియు ఎన్‌క్రిప్ట్ చేయబడ్డాయి। ఇది రోగనిర్ధారణ కాదు।",
    
    // Risk Levels
    "risk.low": "తక్కువ ప్రమాదం",
    "risk.moderate": "మధ్యస్థ ప్రమాదం",
    "risk.high": "అధిక ప్రమాదం",
    "risk.lowDesc": "మీ ప్రతిస్పందనలు కనిష్ట లక్షణాలను సూచిస్తున్నాయి। ఇది సానుకూల సంకేతం।",
    "risk.moderateDesc": "మీ ప్రతిస్పందనలు తేలికపాటి నుండి మధ్యస్థ డిప్రెషన్ లేదా సాధారణ ఆందోళన రుగ్మత లక్షణాలను సూచిస్తున్నాయి।",
    "risk.highDesc": "మీ ప్రతిస్పందనలు గణనీయమైన బాధను సూచిస్తున్నాయి। వీలైనంత త్వరగా మానసిక ఆరోగ్య నిపుణుడితో మాట్లాడమని మేము బలంగా సిఫార్సు చేస్తున్నాము।",
    
    // Expert Types
    "expert.psychiatrist": "మానసిక వైద్యుడు",
    "expert.psychiatristDesc": "మానసిక ఆరోగ్యంలో నిపుణుడైన వైద్యుడు",
    "expert.psychologist": "మనోవిజ్ఞాన శాస్త్రవేత్త",
    "expert.psychologistDesc": "థెరపీ మరియు కౌన్సెలింగ్ నిపుణుడు",
    "expert.counselor": "కౌన్సెలర్",
    "expert.counselorDesc": "సహాయక మార్గదర్శకత్వం మరియు వ్యూహాలు",
    "expert.viewDoctors": "డాక్టర్లను చూడండి →",
    "expert.viewExperts": "నిపుణులను చూడండి →",
    "expert.viewCounselors": "కౌన్సెలర్లను చూడండి →",
    
    // Footer
    "footer.tagline": "భారతదేశంలో అందరికీ మానసిక ఆరోగ్య మద్దతును అందుబాటులోకి తీసుకురావడం।",
    "footer.quickLinks": "త్వరిత లింకులు",
    "footer.resources": "వనరులు",
    "footer.contact": "సంప్రదించండి",
    "footer.crisisSupport": "సంక్షోభ మద్దతు",
    "footer.privacyPolicy": "గోప్యతా విధానం",
    "footer.termsOfService": "సేవా నిబంధనలు",
    "footer.rights": "అన్ని హక్కులు కేటాయించబడ్డాయి।",
  },
  Tamil: {
    // Navigation
    "nav.home": "முகப்பு",
    "nav.chatbot": "சாட்போட் முயற்சிக்கவும்",
    "nav.features": "அம்சங்கள்",
    "nav.business": "வணிகம்",
    "nav.research": "ஆராய்ச்சி",
    "nav.about": "எங்களைப் பற்றி",
    "nav.startAssessment": "மதிப்பீட்டைத் தொடங்குங்கள்",
    
    // Common
    "common.learnMore": "மேலும் அறிக",
    "common.getStarted": "தொடங்குங்கள்",
    "common.backToOptions": "← விருப்பங்களுக்குத் திரும்பு",
    "common.signIn": "உங்கள் முடிவுகளைச் சேமிக்க உள்நுழையவும்",
    "common.recommended": "பரிந்துரைக்கப்பட்டது",
    "common.selfHelp": "சுய உதவி",
    
    // Chatbot
    "chatbot.title": "மன நல மதிப்பீடு",
    "chatbot.progress": "முன்னேற்றம்",
    "chatbot.complete": "முடிந்தது",
    "chatbot.question": "கேள்வி",
    "chatbot.of": "இல்",
    "chatbot.greeting": "வணக்கம்! நீங்கள் எப்படி உணர்கிறீர்கள் என்பதைப் புரிந்துகொள்ள உதவ நான் இங்கே இருக்கிறேன். PHQ-9 மற்றும் GAD-7 மதிப்பீடுகளைப் பயன்படுத்தி இது ஒரு சுருக்கமான மன நல சோதனை. நீங்கள் தொடங்க விரும்புகிறீர்களா?",
    "chatbot.startPrompt": "மதிப்பீட்டைத் தொடங்க 'ஆம்' அல்லது 'தொடங்கு' என டைப் செய்யவும்.",
    "chatbot.assessmentComplete": "மதிப்பீடு முடிந்தது",
    "chatbot.nextSteps": "அடுத்து என்ன செய்ய விரும்புகிறீர்கள்?",
    "chatbot.connectExpert": "மருத்துவ நிபுணருடன் இணையுங்கள்",
    "chatbot.connectExpertDesc": "தனிப்பட்ட வழிகாட்டுதலுக்கு உரிமம் பெற்ற மன நல நிபுணருடன் பேசுங்கள்",
    "chatbot.wellnessExercises": "ஆரோக்கிய பயிற்சிகளை முயற்சிக்கவும்",
    "chatbot.wellnessExercisesDesc": "மன நலத்தை மேம்படுத்த எளிய நுட்பங்கள்",
    "chatbot.downloadReport": "அறிக்கையைப் பதிவிறக்கவும் (PDF)",
    "chatbot.analyzing": "மதிப்பீட்டை முடித்ததற்கு நன்றி. உங்கள் பதில்களை நான் பகுப்பாய்வு செய்கிறேன்...",
    "chatbot.privacyNotice": "உங்கள் பதில்கள் தனிப்பட்டவை மற்றும் குறியாக்கம் செய்யப்பட்டவை. இது நோயறிதல் அல்ல.",
    
    // Risk Levels
    "risk.low": "குறைந்த ஆபத்து",
    "risk.moderate": "மிதமான ஆபத்து",
    "risk.high": "அதிக ஆபத்து",
    "risk.lowDesc": "உங்கள் பதில்கள் குறைந்தபட்ச அறிகுறிகளைக் குறிக்கின்றன. இது ஒரு நேர்மறையான அறிகுறி.",
    "risk.moderateDesc": "உங்கள் பதில்கள் லேசான முதல் மிதமான மனச்சோர்வு அல்லது பொதுவான கவலை கோளாறின் அறிகுறிகளைக் குறிக்கின்றன.",
    "risk.highDesc": "உங்கள் பதில்கள் குறிப்பிடத்தக்க துன்பத்தைக் குறிக்கின்றன. கூடிய விரைவில் மன நல நிபுணருடன் பேச பரிந்துரைக்கிறோம்.",
    
    // Expert Types
    "expert.psychiatrist": "மனநல மருத்துவர்",
    "expert.psychiatristDesc": "மன நலத்தில் நிபுணத்துவம் பெற்ற மருத்துவர்",
    "expert.psychologist": "உளவியலாளர்",
    "expert.psychologistDesc": "சிகிச்சை மற்றும் ஆலோசனை நிபுணர்",
    "expert.counselor": "ஆலோசகர்",
    "expert.counselorDesc": "ஆதரவான வழிகாட்டுதல் மற்றும் உத்திகள்",
    "expert.viewDoctors": "மருத்துவர்களைக் காண்க →",
    "expert.viewExperts": "நிபுணர்களைக் காண்க →",
    "expert.viewCounselors": "ஆலோசகர்களைக் காண்க →",
    
    // Footer
    "footer.tagline": "இந்தியாவில் அனைவருக்கும் மன நல ஆதரவை அணுகக்கூடியதாக்குதல்.",
    "footer.quickLinks": "விரைவு இணைப்புகள்",
    "footer.resources": "வளங்கள்",
    "footer.contact": "தொடர்பு",
    "footer.crisisSupport": "நெருக்கடி ஆதரவு",
    "footer.privacyPolicy": "தனியுரிமைக் கொள்கை",
    "footer.termsOfService": "சேவை விதிமுறைகள்",
    "footer.rights": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
  },
  Bengali: {
    // Navigation
    "nav.home": "হোম",
    "nav.chatbot": "চ্যাটবট ব্যবহার করুন",
    "nav.features": "বৈশিষ্ট্য",
    "nav.business": "ব্যবসা",
    "nav.research": "গবেষণা",
    "nav.about": "আমাদের সম্পর্কে",
    "nav.startAssessment": "মূল্যায়ন শুরু করুন",
    
    // Common
    "common.learnMore": "আরও জানুন",
    "common.getStarted": "শুরু করুন",
    "common.backToOptions": "← বিকল্পে ফিরে যান",
    "common.signIn": "আপনার ফলাফল সংরক্ষণ করতে সাইন ইন করুন",
    "common.recommended": "প্রস্তাবিত",
    "common.selfHelp": "স্ব-সহায়তা",
    
    // Chatbot
    "chatbot.title": "মানসিক স্বাস্থ্য মূল্যায়ন",
    "chatbot.progress": "অগ্রগতি",
    "chatbot.complete": "সম্পূর্ণ",
    "chatbot.question": "প্রশ্ন",
    "chatbot.of": "এর মধ্যে",
    "chatbot.greeting": "হ্যালো! আপনি কেমন অনুভব করছেন তা বুঝতে সাহায্য করতে আমি এখানে আছি। PHQ-9 এবং GAD-7 মূল্যায়ন ব্যবহার করে এটি একটি সংক্ষিপ্ত মানসিক স্বাস্থ্য পরীক্ষা। আপনি কি শুরু করতে চান?",
    "chatbot.startPrompt": "মূল্যায়ন শুরু করতে 'হ্যাঁ' বা 'শুরু' টাইপ করুন।",
    "chatbot.assessmentComplete": "মূল্যায়ন সম্পূর্ণ",
    "chatbot.nextSteps": "পরবর্তীতে কী করতে চান?",
    "chatbot.connectExpert": "চিকিৎসা বিশেষজ্ঞের সাথে যোগাযোগ করুন",
    "chatbot.connectExpertDesc": "ব্যক্তিগত নির্দেশনার জন্য লাইসেন্সপ্রাপ্ত মানসিক স্বাস্থ্য পেশাদারের সাথে কথা বলুন",
    "chatbot.wellnessExercises": "সুস্থতা ব্যায়াম চেষ্টা করুন",
    "chatbot.wellnessExercisesDesc": "মানসিক সুস্থতা উন্নত করার সহজ কৌশল",
    "chatbot.downloadReport": "রিপোর্ট ডাউনলোড করুন (PDF)",
    "chatbot.analyzing": "মূল্যায়ন সম্পূর্ণ করার জন্য ধন্যবাদ। আমি আপনার প্রতিক্রিয়া বিশ্লেষণ করছি...",
    "chatbot.privacyNotice": "আপনার প্রতিক্রিয়া ব্যক্তিগত এবং এনক্রিপ্টেড। এটি রোগ নির্ণয় নয়।",
    
    // Risk Levels
    "risk.low": "কম ঝুঁকি",
    "risk.moderate": "মাঝারি ঝুঁকি",
    "risk.high": "উচ্চ ঝুঁকি",
    "risk.lowDesc": "আপনার প্রতিক্রিয়া ন্যূনতম লক্ষণ নির্দেশ করে। এটি একটি ইতিবাচক লক্ষণ।",
    "risk.moderateDesc": "আপনার প্রতিক্রিয়া হালকা থেকে মাঝারি বিষণ্নতা বা সাধারণ উদ্বেগজনিত ব্যাধির লক্ষণ নির্দেশ করে।",
    "risk.highDesc": "আপনার প্রতিক্রিয়া উল্লেখযোগ্য কষ্ট নির্দেশ করে। যত তাড়াতাড়ি সম্ভব মানসিক স্বাস্থ্য পেশাদারের সাথে কথা বলার পরামর্শ দিই।",
    
    // Expert Types
    "expert.psychiatrist": "মনোরোগ বিশেষজ্ঞ",
    "expert.psychiatristDesc": "মানসিক স্বাস্থ্যে বিশেষজ্ঞ ডাক্তার",
    "expert.psychologist": "মনোবিজ্ঞানী",
    "expert.psychologistDesc": "থেরাপি এবং কাউন্সেলিং বিশেষজ্ঞ",
    "expert.counselor": "কাউন্সেলর",
    "expert.counselorDesc": "সহায়ক নির্দেশনা এবং কৌশল",
    "expert.viewDoctors": "ডাক্তার দেখুন →",
    "expert.viewExperts": "বিশেষজ্ঞ দেখুন →",
    "expert.viewCounselors": "কাউন্সেলর দেখুন →",
    
    // Footer
    "footer.tagline": "ভারতে সবার জন্য মানসিক স্বাস্থ্য সহায়তা অ্যাক্সেসযোগ্য করা।",
    "footer.quickLinks": "দ্রুত লিঙ্ক",
    "footer.resources": "সম্পদ",
    "footer.contact": "যোগাযোগ",
    "footer.crisisSupport": "সংকট সহায়তা",
    "footer.privacyPolicy": "গোপনীয়তা নীতি",
    "footer.termsOfService": "পরিষেবার শর্তাবলী",
    "footer.rights": "সর্বস্বত্ব সংরক্ষিত।",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("English");

  const t = (key: string): string => {
    return translations[language][key] || translations["English"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
