# Constants.js Quick Reference Guide

## Purpose
Centralized data file for all dynamic content. Update this file to change website content without touching component code.

## How to Use

### 1. Import in Any Component
```jsx
import { COMPANY, HERO, SERVICES_LIST, BLOGS, etc } from "../../data/constants";
```

### 2. Available Constants

#### **COMPANY** - Business Information
```javascript
{
  name: "COZWEB",
  tagline: "Digital Solutions for Modern Business",
  description: "...",
  phone: "+91 (123) 456-7890",
  email: "info@cozweb.com",
  address: "Noida, Uttar Pradesh, India"
}
```
**Used in**: Navbar, Footer, ResponsiveMenu

#### **HERO** - Hero Section
```javascript
{
  title: "...",
  subtitle: "...",
  cta1: "Get Started",
  cta2: "Learn More"
}
```
**Used in**: Hero.jsx

#### **SERVICES_LIST** - All Services
Array of service objects with:
- `id`: Unique identifier
- `title`: Service name
- `description`: Service details

**Currently has**: 6 services (Web, Mobile, Custom Software, Cloud, UI/UX, Digital Marketing)

#### **STATISTICS** - Key Numbers
Array of stat objects with:
- `id`: Unique identifier
- `number`: Numeric value
- `label`: What it represents
- `suffix`: "+" or custom suffix

**Currently has**: 4 stats (Clients, Projects, Team Members, Years Experience)

#### **BLOGS** - Blog Articles
Array of blog objects with:
- `id`: Unique identifier
- `title`: Article title
- `content`: Article preview text
- `date`: Publication date
- `author`: Author name
- `category`: Topic category

**Currently has**: 3 blogs about web development, mobile apps, and cloud security

#### **BANNER_SECTIONS** - Detailed Sections
Array with:
- `id`: Unique identifier
- `title`: Section title
- `description`: Detailed description
- `features`: Array of feature points

**Currently has**: 2 sections (Web Development, Mobile Apps)

#### **NAV_LINKS** - Navigation Links
Simple array of navigation items with `label` and `href`

#### **FOOTER_LINKS** - Footer Organization
Object with three categories:
- `important`: Main navigation links
- `resources`: Legal/resource links
- `social`: Social media info (unused in footer, but structured)

---

## Common Tasks

### **Add a New Service**
1. Open `src/data/constants.js`
2. Find `SERVICES_LIST` array
3. Add new object:
```javascript
{
  id: 7,
  title: "API Development",
  description: "RESTful and GraphQL APIs for seamless integrations...",
}
```

### **Add a New Blog Post**
1. Find `BLOGS` array
2. Add:
```javascript
{
  id: 4,
  title: "New Blog Title",
  content: "Preview text here...",
  date: "June 15, 2024",
  author: "Author Name",
  category: "Category Name",
}
```

### **Update Company Phone/Email**
Find `COMPANY` object:
```javascript
phone: "+91 (NEW) NUMBER",
email: "newemail@example.com",
```

### **Add New Statistics**
Find `STATISTICS` array:
```javascript
{
  id: 5,
  number: 100,
  label: "Awards Won",
  suffix: "+",
}
```

### **Add New Banner Section**
Find `BANNER_SECTIONS` array:
```javascript
{
  id: 3,
  title: "Enterprise Solutions",
  description: "...",
  features: [
    "Feature 1",
    "Feature 2",
    "Feature 3",
  ],
}
```

### **Update Footer Links**
Edit `FOOTER_LINKS`:
```javascript
important: [
  { label: "Home", href: "#home" },
  // Add/modify links here
],
```

---

## Notes

- **Image References**: Blog images use array cycling (`blogImages[index % blogImages.length]`)
  - To add more blog images, add them to the `Blogs.jsx` blogImages array
  
- **Unused Constant**: `FOOTER_LINKS.social` is structured for future use if you want to add social links dynamically

- **Future Enhancement**: Add API integration to fetch this data from a backend

---

## File Locations

| Component | Uses These Constants |
|-----------|----------------------|
| Hero.jsx | HERO |
| Service.jsx | STATISTICS |
| BannerDetails.jsx | BANNER_SECTIONS |
| Blogs.jsx | BLOGS |
| Navbar2.jsx | COMPANY, SERVICES_LIST |
| ResponsiveMenu.jsx | COMPANY, NAV_LINKS |
| Footer.jsx | COMPANY, FOOTER_LINKS |
| App.jsx | (indirectly via components) |

---

## Tips

1. **Keep descriptions concise** - They display in limited space on mobile
2. **Use proper phone format** - Include country code for international dialing
3. **Blog dates** - Use consistent format (e.g., "June 15, 2024")
4. **Feature lists** - Keep to 3-5 items for better readability
5. **SEO** - Service titles appear in navigation, choose descriptive names
6. **Future**: Consider separating into multiple files by domain (services.js, blog.js, etc.)
