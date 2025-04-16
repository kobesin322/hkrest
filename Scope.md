# Project Scope (Updated on 12/4)

Green remarks has been updated to reply the questions and comments

**Objective**

Build a mobile app that helps users discover restaurants, get personalized recommendations, and connect with a community through social media features like post-feeding, like and subscribe, reels-like feature

**Target Audience**: Food lovers, frequent diners, and social media users who enjoy sharing and exploring dining experiences.

**Unique Value Proposition:** Unlike typical restaurant apps (e.g., Yelp), this platform blends social media engagement—such as video reels and user/restaurant subscriptions—with personalized dining recommendations, creating a dynamic, community-driven experience.

**MVP (Minimal Viable Product)**

Key Features

### **Restaurant Listings**

- Search and filter restaurants by location, cuisine, price range, and ratings.
- Detailed profiles for each restaurant, including menus, operating hours, and contact details.

## Booking

Provide booking form and contact details to restaurants (With confirmed connections to our company), also confirmation details to two parties (By email and messages)

Manage the available timeslots from the restaurants through Dashboard (Might need to spend extra time to develop a new dashboard, or update by other means)

## Dashboard

Dashboard will reflect on data when the bookings come in through API , no need to update manually. 

Another imporant dashboard feature is to let merchant (restaurants)  to change their information, available booking timeslots or even menus

(It depends on whether we want to let merchants update on their own, or change through our team << which is apparently the best choice, the tradeoff is we need extra resources to design, build , develop and testing)

## **LINE Message**

Yes, we need to register a business LINE account

Also, build Line messaging API and Line Channel

### **Social Media Integration (Community Features)**

Phase 1

- **Like/ Subscribe/ Follow**: Follow restaurants or other users to stay updated on their posts and recommendations.
- **Post-Feeding**: Feed other users/restaurants post about food, review and latest news
Yes, they are algorithm-based, but the first version would be mainly depends on “Hot Trend” (Perhaps depends on views and level of engagement)

Phase 2

- **Community**: Join interest-based groups (e.g., vegan dining, local eats) to share tips and connect with others.
    
    No, optional. Could omit this feature first
    
- **Reels**: Users can upload short video reviews of restaurants (e.g., 15-30 seconds).
    
    Not sure what kind of limit we are referring to (Length? Number of uploads)
    

## User Profiles

Restaurants profiles should be placed in merchant dashboard, where they can manage booking and other informations

- Create and customize profiles, view followed accounts
- Comment Credit from restaurants (Depends on whether we have actual connections with restaurants)
- Track personal activity (e.g., posted reels, saved restaurants)

The recommendations and advice regarding personal preferences are excellent! I believe we can integrate most of these features. However, I see these minor features as primarily enhancements, which would benefit from further user data accumulation. They might be more appropriately developed in stage 2.

## Minor Features

Google Maps for restaurant locations

Rating / Saving

Statistics

### **Personalized Recommendations (Phase 2)**

- Algorithm-based suggestions tailored to user preferences, location history, and past interactions.
    
    Both, but post-feed and restaurants search results / recommendation are two different parts of algorithm ( Need further design, no exact idea for now)
    
- Need to integrate with proper user data analysis
    
    Only have basic concepts, and I think our work and efforts will have more significant impact as our sample of data increase
    

## Development Phases and Timeline

### Month 1: Foundation

Technical Team👨🏼‍💻: 

**Set up development environment and cloud infrastructure.**

Frontend: React Native for cross-platform development (iOS and Android).
Backend: Node.js with Express.js for efficient API development.
Database: MongoDB Atlas for flexible, scalable data storage.
Media Storage: AWS S3 for hosting images and videos (reels).
Authentication: AWS Cognito for secure user login and management.
Content Delivery: Cloudflare CDN to ensure fast loading of media content.

**Database schema Design**

**Restaurant listing / Restaurants Profile with mockup data**

**Design and implement basic API / utilities** 

Other team:
Define the detailed social media workflow and credit/rebating system

UI Team: Build ad draft App User interface wireframe *(If hiring a dedicated designer for the app)*

## Month 2: Core Features (Part 1)

Technical Team 👨🏼‍💻:

**Build user authentication** ( Login and registration, forget password, social Login)

### Booking

Basic Booking flow with restaurants with mockup data 

(Default timeslots, replace data with existing restaurants when ready)

### **Social Media Integration**

- **Like/ Subscribe/ Follow**
- **Post-Feeding**

**Revamp the existing User interaface made by UI team**

Other team:
Gather and organize restaurant data. (Otherwise, the technical team will need an additional 4-6 weeks to develop a dashboard for manual data input or build bots for data scraping and cleanup.)

Two major approach in collecting restaurants data in early stage:

1. Data scraping by Kobe to crawl data, need time (hopefully 3 weeks for proper and sufficient data) to develop bots crawling data, tidying and stretching data in database, then directly import into the APP
2. Team members help to collect , storing in any kind of consistent data format (.csv /excel). Wait until the merchant dashboard is developed, we input the data by Administrative role instead of merchant role)

Later stage:

Two kinds of data:

Connected restaurants (With bookings): 

Import through dashboard ( Their Staff / Our admin)

Other restaurants (Without any connections and bookings) : Just following old format until we have establish connections

## Month 3: Core Features (Part 2)

Technical team👨🏼‍💻:

**User Profile**

**Credit mechanism from commenting**

**Advanced search and filtering**

**Notifications**

## Month 4: Minor Features + Pre-Launch

Technical team👨🏼‍💻:

Google Maps for restaurant locations

Rating / Saving

Statistics

Testing and debugging phase

System integration test

User acceptance test

End-to-end test

Hosting and deploy all application, server on cloud

Launching on App Store and Google Play

Other team:

- Conduct testing and collect feedback for improvements.
- Support the launch process.

## **Month 5:**

Most probably need to take 2-3 weeks away from this month to develop Merchant dashboard, perhaps this dashboard schedule would be inserted before Month 3 or 4 since this might hinder the restaurant connection progress

Contingency period for delays, bug fixes, or minor feature enhancements
or any big features from phase 2 switching into MVP

(Drafted by Kobe Sin)