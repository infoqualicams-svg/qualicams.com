# QualiCams Live Setup

## Current Status
- ✅ Website deployed: https://qualicams.web.app
- ✅ Firebase Functions working
- ✅ Firebase Hosting working
- ❌ Firestore API not enabled
- ❌ No product data

## To Fix:

### 1. Enable Firestore API
Visit: https://console.developers.google.com/apis/api/firestore.googleapis.com/overview?project=qualicams
Click "Enable API"

### 2. Deploy Database Rules
```bash
firebase deploy --only firestore,storage --project qualicams
```

### 3. Add Sample Products
```bash
npm run add:products
```

### 4. Test Website
Visit: https://qualicams.web.app
- Should show products on homepage
- Product pages should work
- Cart should function
- Admin panel should work at /admin

## Why Different?
- Local: Uses old Firebase project with data
- Live: Uses new empty Firebase project
- Solution: Enable API + Add data = Full functionality