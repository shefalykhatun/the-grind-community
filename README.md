# The Grind — Web3 Creator Community

A responsive front-end prototype for The Grind community platform.

## Included in this prototype
- Activity feed and community navigation
- Discover projects and creator showcase
- UGC Campaign listings, campaign details and submission form preview
- Open and Invite Only UGC campaign types
- Giveaway listings, original X post links and configurable entry fields
- Live Campaigns and Collaborations
- My Profile preview and login/signup placeholder
- Admin dashboard preview for creating/editing/deleting UGC campaigns and giveaways
- Opportunities visibility toggle
- Local browser persistence for demo campaign/admin changes

## Run locally
Open `index.html` in a modern browser. No build step is required.

## Important prototype limitations
This is a front-end demonstration only. It does not yet include real accounts, secure admin authorization, cloud database, cloud file uploads, private submission storage, or automated social-task verification. Admin changes are stored only in the current browser's local storage and are not shared with other visitors. The login and submission forms display preview messages rather than saving real user data.

## Planned production backend
Connect Supabase Auth, Postgres, Storage and Row Level Security. Create a server-controlled admin role; never trust a client-side admin toggle. Add duplicate-entry constraints and private access policies before collecting wallet addresses or other user data. Deploy through GitHub and Netlify after environment variables and backend policies are configured.
